const fs = require('fs');
const path = require('path');

// Target directory containing SVGs
const svgsDir = path.join(__dirname, '../public/svgs');

// Get color from command line arguments or default to #f7fd04
let targetColor = process.argv[2] || '#14C38E';

// Ensure valid hex format
if (!targetColor.startsWith('#')) {
  targetColor = '#' + targetColor;
}

// Previous accent / primary colors used in unDraw SVGs
const sourceColors = [
  '#f7fd04',
  '#00FFAB',
  '#F97316',
  '#FF8400',
  '#6C63FF',
  '#6c63ff',
  '#f97316',
  '#ff8400',
  '#00ffab'
];

if (!fs.existsSync(svgsDir)) {
  console.error(`Error: Directory not found: ${svgsDir}`);
  process.exit(1);
}

const files = fs.readdirSync(svgsDir).filter(file => file.endsWith('.svg'));

console.log(`\n🎨 Updating ${files.length} SVGs to theme color: ${targetColor}...\n`);

let totalReplacements = 0;
let modifiedFilesCount = 0;

files.forEach(file => {
  const filePath = path.join(svgsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let fileReplacements = 0;

  sourceColors.forEach(color => {
    const regex = new RegExp(color, 'gi');
    const matches = content.match(regex);
    if (matches) {
      fileReplacements += matches.length;
      content = content.replace(regex, targetColor);
    }
  });

  if (fileReplacements > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalReplacements += fileReplacements;
    modifiedFilesCount++;
    console.log(`✓ ${file} (${fileReplacements} replacements)`);
  }
});

console.log(`\n✨ Successfully updated ${modifiedFilesCount} files with ${totalReplacements} color replacements to ${targetColor}!\n`);
