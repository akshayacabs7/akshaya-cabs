const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const BASE_DIRS = [
  path.join(PROJECT_ROOT, 'public', 'images', 'akshaya'),
  path.join(PROJECT_ROOT, 'public', 'images', 'logo', 'akshaya')
];

async function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(await getFiles(fullPath));
    } else if (item.name.endsWith('.png')) {
      results.push(fullPath);
    }
  }
  return results;
}

async function convert() {
  console.log('Starting image conversion with sharp...');
  let totalOriginal = 0;
  let totalWebp = 0;
  let count = 0;

  for (const baseDir of BASE_DIRS) {
    if (!fs.existsSync(baseDir)) continue;
    const pngFiles = await getFiles(baseDir);
    for (const file of pngFiles) {
      const dir = path.dirname(file);
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      const webpPath = path.join(dir, `${name}.webp`);
      const originalStat = fs.statSync(file);
      totalOriginal += originalStat.size;

      // Convert to webp
      const img = sharp(file);
      const meta = await img.metadata();
      
      await sharp(file)
        .webp({ quality: 85, effort: 4 })
        .toFile(webpPath);
      
      const webpStat = fs.statSync(webpPath);
      totalWebp += webpStat.size;
      count++;

      console.log(`[${count}] ${path.relative(path.join(PROJECT_ROOT, 'public'), webpPath)} (${meta.width}x${meta.height}) - ${(originalStat.size/1024/1024).toFixed(2)}MB -> ${(webpStat.size/1024).toFixed(1)}KB`);

      // If founder, also produce .jpg
      if (name === 'sr-kumar') {
        const jpgPath = path.join(dir, `${name}.jpg`);
        await sharp(file)
          .jpeg({ quality: 88 })
          .toFile(jpgPath);
        console.log(`   -> Also generated sr-kumar.jpg`);
      }
    }
  }

  console.log('\n--- CONVERSION SUMMARY ---');
  console.log(`Total images converted: ${count}`);
  console.log(`Original PNG total size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized WebP total size: ${(totalWebp / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Savings: ${((1 - totalWebp / totalOriginal) * 100).toFixed(1)}%`);
}

convert().catch(err => {
  console.error('Error during conversion:', err);
  process.exit(1);
});
