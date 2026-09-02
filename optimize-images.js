/*
  COMANDO PARA OTIMIZAR IMAGENS

  Pastas processadas:
  - src/assets
  - src/assets/works
  - src/assets/works/doelivros

  Comando:
  node optimize-images.js
*/

import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

const SOURCE_ROOT = "src/assets";
const OUTPUT_ROOT = "src/assets_optimized";

const foldersToProcess = [
  "src/assets",
  // "src/assets/works",
  // "src/assets/works/doelivros",
];

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function processFolder(folder) {
  const items = fs.readdirSync(folder);

  for (const item of items) {
    const fullPath = path.join(folder, item);

    let stats;

    try {
      stats = fs.statSync(fullPath);
    } catch {
      continue;
    }

    // Se for pasta, processa recursivamente
    if (stats.isDirectory()) {
      await processFolder(fullPath);
      continue;
    }

    // Só processa PNG, JPG e JPEG
    if (!/\.(png|jpg|jpeg)$/i.test(item)) {
      continue;
    }

    // Caminho relativo em relação a src/assets
    const relativePath = path.relative(SOURCE_ROOT, folder);

    // Pasta de saída
    const outputFolder = path.join(
      OUTPUT_ROOT,
      relativePath
    );

    ensureDirSync(outputFolder);

    // Nome sem extensão
    const baseName = path.parse(item).name;

    // Arquivo final
    const outputFile = path.join(
      outputFolder,
      `${baseName}.webp`
    );

    try {
      console.log(`\nProcessando: ${fullPath}`);

      await sharp(fullPath)
        .webp({
          quality: 80,
          effort: 6,
        })
        .toFile(outputFile);

      console.log(
        `✅ Convertido: ${fullPath} → ${outputFile}`
      );
    } catch (error) {
      console.error(`❌ Erro ao converter: ${fullPath}`);
      console.error(error.message);
    }
  }
}

async function main() {
  try {
    console.log("🚀 Iniciando otimização de imagens...\n");

    for (const folder of foldersToProcess) {
      if (!fs.existsSync(folder)) {
        console.warn(`⚠️ Pasta não encontrada: ${folder}`);
        continue;
      }

      await processFolder(folder);
    }

    console.log("\n🎉 Otimização concluída!");
    console.log(`📁 Arquivos salvos em: ${OUTPUT_ROOT}`);
  } catch (error) {
    console.error("\n❌ Erro geral:");
    console.error(error);
  }
}

main();