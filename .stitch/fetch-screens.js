const fs = require('fs');
const https = require('https');
const path = require('path');

const data = JSON.parse(fs.readFileSync('C:/Users/deven/.gemini/antigravity/brain/0653dfdf-38de-40e3-9b2e-b105c9e8a539/.system_generated/steps/104/output.txt', 'utf8'));

fs.mkdirSync('site/public', { recursive: true });
fs.mkdirSync('.stitch/designs', { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  const sitemap = [];
  
  for (const screen of data.screens) {
    if (screen.title.includes('Untitled')) continue;
    if (screen.deviceType === 'MOBILE') continue; // Prefer desktop for now
    
    let slug = screen.title.replace(/ \(.+\)/, '').trim().toLowerCase().replace(/\s+/g, '-');
    if (slug.includes('corrected')) {
       slug = slug.replace('-corrected', '').replace('--', '-').trim();
    }
    // Remove trailing hyphens
    slug = slug.replace(/-$/, '');
    
    console.log(`Downloading ${slug}...`);
    
    if (screen.htmlCode && screen.htmlCode.downloadUrl) {
      await download(screen.htmlCode.downloadUrl, `site/public/${slug}.html`);
      await download(screen.htmlCode.downloadUrl, `.stitch/designs/${slug}.html`);
    }
    
    if (screen.screenshot && screen.screenshot.downloadUrl) {
      const url = screen.screenshot.downloadUrl + `=w${screen.width}`;
      await download(url, `.stitch/designs/${slug}.png`);
    }
    
    sitemap.push(`- [x] ${slug}`);
  }
  
  const siteMd = `# Site Vision: Neural Deduction

## 1. Vision
The Digital Forensic Study. A high-end, digital laboratory hidden within a Victorian library.

## 2. Target Audience
Detectives, researchers, and forensic analysts.

## 3. Core Capabilities
- Investigation tracking
- Deduction analysis
- Lab notes management

## 4. Sitemap
${sitemap.join('\n')}

## 5. Roadmap
- [ ] Add a "Suspect Profiles" page
- [ ] Add an "Evidence Locker" page

## 6. Creative Freedom
- Create a dashboard for recent case activity
`;

  fs.writeFileSync('.stitch/SITE.md', siteMd);
  console.log('Done!');
}

main();
