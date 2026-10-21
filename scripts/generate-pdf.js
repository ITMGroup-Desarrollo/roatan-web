import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

// URL base de tu servidor local (Astro por defecto usa el puerto 4321)
const BASE_URL = 'http://localhost:4321'; 

// Lista de landings del sitio que deseas exportar a PDF
const pages = [
  { name: 'home-es', url: '/es/home/' },
  { name: 'home-en', url: '/en/home/' },
  { name: 'faqs-es', url: '/es/faqs/' },
  { name: 'discover-beyond-es', url: '/es/discover-beyond/' },
  { name: 'port-experience-es', url: '/es/port-experience/' },
  { name: 'contact-es', url: '/es/contact/' }
];

async function generatePDFs() {
  // Crear carpeta pdfs si no existe
  const pdfsDir = path.resolve('pdfs');
  if (!fs.existsSync(pdfsDir)) {
    fs.mkdirSync(pdfsDir);
  }

  console.log('Iniciando generador de PDFs...');
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new'
    });
    const page = await browser.newPage();

    // Establecer un tamaño de pantalla adecuado para la captura
    await page.setViewport({ width: 1920, height: 1080 });

    for (const item of pages) {
      const fullUrl = `${BASE_URL}${item.url}`;
      console.log(`Navegando a: ${fullUrl}`);
      
      try {
        // Navegar e indicar que espere hasta que no haya más de 2 conexiones de red activas
        await page.goto(fullUrl, { waitUntil: 'networkidle2', timeout: 30000 });
        
        // Simular visualización en pantalla (para evitar que use estilos de impresión "print" que quitan fondos)
        await page.emulateMediaType('screen');

        const pdfPath = path.join(pdfsDir, `${item.name}.pdf`);
        
        // Generar PDF
        await page.pdf({
          path: pdfPath,
          format: 'A4',
          printBackground: true, // Mantiene colores de fondo e imágenes
          margin: {
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
          }
        });
        
        console.log(`✓ PDF generado con éxito: ${pdfPath}`);
      } catch (err) {
        console.error(`✗ Error al procesar la ruta ${item.url}:`, err.message);
      }
    }
  } catch (error) {
    console.error('Error general:', error.message);
    console.log('\nTIP: Si no tienes Puppeteer instalado, ejecuta: npm install puppeteer --save-dev');
  } finally {
    if (browser) {
      await browser.close();
    }
    console.log('¡Proceso finalizado!');
  }
}

generatePDFs();
