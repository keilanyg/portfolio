/*
  COMANDO PARA OTIMIZAR IMAGENS

  - CAMINHO PARA A PASTA:
  const foldersToProcess = [
    'src/assets',
    'src/assets/works',
    'src/assets/works/doelivros'
  ];

  - COMANDO NO TERMINAL:
  node optimize-images.js
*/

import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import path from "node:path";
import fs from "node:fs";

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const foldersToProcess = ["src/assets"];

async function processFolder(folder, outputRoot = "src/assets_optimized") {
  const items = fs.readdirSync(folder);

  for (const item of items) {
    const fullPath = path.join(folder, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      await processFolder(fullPath, outputRoot);
      continue;
    }

    if (!/\.(png|jpg|jpeg)$/i.test(item)) {
      continue;
    }

    const relativePath = path.relative("src/assets", folder);
    const outputFolder = path.join(outputRoot, relativePath);

    ensureDirSync(outputFolder);

    const baseName = path.parse(item).name;
    const outputFile = path.join(outputFolder, `${baseName}.webp`);

    try {
      console.log(`Processando: ${fullPath}`);

      const buffer = fs.readFileSync(fullPath);

      const webpBuffer = await imagemin.buffer(buffer, {
        plugins: [
          imageminWebp({
            quality: 80,
          }),
        ],
      });

      fs.writeFileSync(outputFile, webpBuffer);

      console.log(`✅ Convertido: ${fullPath} → ${outputFile}`);
    } catch (error) {
      console.error(`❌ Erro ao converter: ${fullPath}`);

      if (error?.stderr) {
        console.error(error.stderr);
      } else {
        console.error(error);
      }

      // continua processando as próximas imagens
      continue;
    }
  }
}

(async () => {
  try {
    for (const folder of foldersToProcess) {
      await processFolder(folder);
    }

    console.log("\n🎉 Todas as imagens válidas foram convertidas!");
  } catch (error) {
    console.error("Erro geral:", error);
  }
})();