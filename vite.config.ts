import path from "node:path";

import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  base: "/portfolio/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },

    tsconfigPaths: true,
  },

  plugins: [
    tailwindcss(),

    tanstackStart({
      spa: {
        enabled: true,
      },

      server: {
        entry: "server",
      },
    }),

    viteReact(),
  ],
});