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

import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import path from "node:path";
import fs from "node:fs";

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

const foldersToProcess = ["src/assets/"];

async function processFolder(folder, outputRoot = "src/assets_optimized") {
  const items = fs.readdirSync(folder);

  for (const item of items) {
    const fullPath = path.join(folder, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      await processFolder(fullPath, outputRoot);
    } else if (/\.(png|jpg|jpeg)$/i.test(item)) {
      const relativePath = path.relative("src/assets", folder);
      const outputFolder = path.join(outputRoot, relativePath);
      ensureDirSync(outputFolder);

      const baseName = path.parse(item).name;
      const outputFile = path.join(outputFolder, `${baseName}.webp`);

      // Lê a imagem original
      const buffer = fs.readFileSync(fullPath);

      // Converte para webp
      const webpBuffer = await imagemin.buffer(buffer, {
        plugins: [imageminWebp({ quality: 80 })],
      });

      // Salva o arquivo webp
      fs.writeFileSync(outputFile, webpBuffer);

      console.log(`Convertido: ${fullPath} → ${outputFile}`);
    }
  }
}

(async () => {
  for (const folder of foldersToProcess) await processFolder(folder);
  console.log("Todas as imagens foram convertidas para WEBP!");
})();
