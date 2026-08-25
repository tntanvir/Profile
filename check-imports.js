const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('.next')) {
        results = results.concat(walk(file));
      }
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(process.cwd());
let hasError = false;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const importRegex = /from\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    if (importPath.startsWith('.') || importPath.startsWith('@/')) {
      let resolvedPath;
      if (importPath.startsWith('@/')) {
        resolvedPath = path.join(process.cwd(), importPath.substring(2));
      } else {
        resolvedPath = path.join(path.dirname(file), importPath);
      }
      
      // Try resolving with common extensions
      const exts = ['', '.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.tsx', '/index.js', '/index.jsx'];
      let found = false;
      let actualFoundPath = '';
      for (const ext of exts) {
        if (fs.existsSync(resolvedPath + ext)) {
            found = true;
            actualFoundPath = resolvedPath + ext;
            break;
        }
      }
      
      if (!found) {
        console.error(`ERROR: File not found for import "${importPath}" in ${file}`);
        hasError = true;
      } else {
        // Check case sensitivity
        const dirName = path.dirname(actualFoundPath);
        const baseName = path.basename(actualFoundPath);
        const actualFiles = fs.readdirSync(dirName);
        if (!actualFiles.includes(baseName)) {
            console.error(`ERROR: Case mismatch for import "${importPath}" in ${file}. Expected ${baseName} but it might be different casing.`);
            hasError = true;
        }
      }
    }
  }
});

if (!hasError) {
  console.log("All local imports resolve with correct case.");
}
