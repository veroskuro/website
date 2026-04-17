const fs = require('fs');
const https = require('https');

const data = JSON.parse(fs.readFileSync('C:/Users/deven/.gemini/antigravity/brain/0653dfdf-38de-40e3-9b2e-b105c9e8a539/.system_generated/steps/203/output.txt', 'utf8'));

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
  const screen = data.outputComponents[0].design.screens[0];
  const slug = 'artifacts';
  
  if (screen.htmlCode && screen.htmlCode.downloadUrl) {
    console.log('Downloading HTML...');
    await download(screen.htmlCode.downloadUrl, `site/public/${slug}.html`);
    await download(screen.htmlCode.downloadUrl, `.stitch/designs/${slug}.html`);
  }
  
  if (screen.screenshot && screen.screenshot.downloadUrl) {
    console.log('Downloading PNG...');
    const url = screen.screenshot.downloadUrl + `=w${screen.width}`;
    await download(url, `.stitch/designs/${slug}.png`);
  }
  console.log('Done downloading new screen');
}

main();
