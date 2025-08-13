import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminPngquant from 'imagemin-pngquant';
import path from 'path';
import fs from 'fs';

/*
  COMANDO PARA OTIMIZAR IMAGENS

  - CAMINHO PARA A PASTA:
  const foldersToProcess = [
  'src/assets',
  'src/assets/works',
  'src/assets/works/doelivros'

  - COMANDO NO TERMINAL:
  node optimize-images.js
];
*/


// Função para criar pastas recursivamente
function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Pastas que você quer processar
const foldersToProcess = [
  'src/assets/DoeLeitura',

];

async function processFolder(folder, outputRoot = 'src/assets_optimized') {
  const items = fs.readdirSync(folder);
  for (const item of items) {
    const fullPath = path.join(folder, item);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      await processFolder(fullPath, outputRoot); // recursivo para subpastas
    } else if (/\.(png|jpg|jpeg)$/i.test(item)) {
      const relativePath = path.relative('src/assets', folder);
      const outputFolder = path.join(outputRoot, relativePath);
      ensureDirSync(outputFolder);
      await imagemin([fullPath], {
        destination: outputFolder,
        plugins: [
          imageminPngquant({ quality: [0.6, 0.8] }),
          imageminWebp({ quality: 80 })
        ]
      });
      console.log(`Convertido: ${fullPath} → ${outputFolder}`);
    }
  }
}

(async () => {
  for (const folder of foldersToProcess) {
    await processFolder(folder);
  }
  console.log('Todas as imagens das pastas especificadas foram otimizadas!');
})();
