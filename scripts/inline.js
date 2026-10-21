import fs from 'fs';
import path from 'path';

// Directorio de salida del build de Astro
const distDir = path.resolve('dist');

function inlineFiles(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`El directorio no existe: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      inlineFiles(filePath);
    } else if (file.endsWith('.html')) {
      let html = fs.readFileSync(filePath, 'utf8');

      // 1. Buscar y reemplazar enlaces a CSS local
      // Ejemplo: <link rel="stylesheet" href="/_astro/index.css" />
      const cssRegex = /<link[^>]+rel=["']stylesheet["'][^>]+href=["']\/([^"']+)["'][^>]*>/g;
      html = html.replace(cssRegex, (match, cssPath) => {
        const absoluteCssPath = path.join(distDir, cssPath.split('?')[0]);
        if (fs.existsSync(absoluteCssPath)) {
          const cssContent = fs.readFileSync(absoluteCssPath, 'utf8');
          console.log(`Incrustando CSS: ${cssPath}`);
          return `<style>${cssContent}</style>`;
        }
        return match;
      });

      // 2. Buscar y reemplazar enlaces a JS local
      // Ejemplo: <script type="module" src="/_astro/hoisted.js"></script>
      const jsRegex = /<script[^>]+src=["']\/([^"']+)["'][^>]*><\/script>/g;
      html = html.replace(jsRegex, (match, jsPath) => {
        const absoluteJsPath = path.join(distDir, jsPath.split('?')[0]);
        if (fs.existsSync(absoluteJsPath)) {
          const jsContent = fs.readFileSync(absoluteJsPath, 'utf8');
          console.log(`Incrustando JS: ${jsPath}`);
          return `<script type="module">${jsContent}</script>`;
        }
        return match;
      });

      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`✓ Procesado con éxito: ${path.relative(distDir, filePath)}`);
    }
  }
}

console.log('Iniciando proceso de inlining...');
inlineFiles(distDir);
console.log('¡Proceso completado!');
