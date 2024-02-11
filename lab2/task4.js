const fs = require('fs');
const path = require('path');

const lab2Path = 'lab2';

const srcPath = path.join(lab2Path, 'src');
const distPath = path.join(lab2Path, 'dist');
fs.mkdirSync(srcPath, { recursive: true });
fs.mkdirSync(distPath, { recursive: true });

const files = fs.readdirSync(lab2Path);

files.forEach(file => {
    const sourcePath = path.join(lab2Path, file);
    const destSrcPath = path.join(srcPath, file);
    const destDistPath = path.join(distPath, file);
    const fileExtension = path.extname(file);
    if (fs.statSync(sourcePath).isFile()) {
        if (fileExtension === '.js') {
            fs.copyFileSync(sourcePath, destSrcPath);
        } else {
            fs.copyFileSync(sourcePath, destDistPath);
        }
    }
});

console.log('Файлы скопированы в папки src и dist внутри папки lab2.');
