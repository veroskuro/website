import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://devenchoudhary.com'; // Change this to actual domain later
const DEDUCTIONS_DIR = path.resolve(__dirname, '../src/content/deductions');
const OUTPUT_FILE = path.resolve(__dirname, '../public/rss.xml');

// Simple front-matter parser since we don't want to add extra dependencies if possible
function parseFrontMatter(fileContent) {
  const match = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { attributes: {}, body: fileContent };

  const attributes = {};
  const yamlLines = match[1].split('\n');
  
  yamlLines.forEach(line => {
    const splitIndex = line.indexOf(':');
    if (splitIndex > -1) {
      const key = line.slice(0, splitIndex).trim();
      let value = line.slice(splitIndex + 1).trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      attributes[key] = value;
    }
  });

  return { attributes, body: match[2].trim() };
}

function generateRSS() {
  if (!fs.existsSync(DEDUCTIONS_DIR)) {
    console.log('No deductions directory found.');
    return;
  }

  const files = fs.readdirSync(DEDUCTIONS_DIR).filter(file => file.endsWith('.md'));
  
  const posts = files.map(file => {
    const content = fs.readFileSync(path.join(DEDUCTIONS_DIR, file), 'utf-8');
    const { attributes, body } = parseFrontMatter(content);
    const slug = file.replace(/\.md$/, '');
    
    return {
      title: attributes.title || 'Untitled',
      date: new Date(attributes.date || Date.now()),
      slug: slug,
      excerpt: body.substring(0, 200).replace(/[#*`_]/g, '') + '...',
    };
  }).sort((a, b) => b.date - a.date);

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Deven Choudhary - Deductions</title>
    <link>${SITE_URL}</link>
    <description>Mechanistic Interpretability Research, Field Notes, and Deductions.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/deductions/${post.slug}</link>
      <guid>${SITE_URL}/deductions/${post.slug}</guid>
      <pubDate>${post.date.toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
    </item>`).join('')}
  </channel>
</rss>`;

  fs.writeFileSync(OUTPUT_FILE, rss, 'utf-8');
  console.log(`✅ Generated RSS feed with ${posts.length} entries at /rss.xml`);
}

generateRSS();
