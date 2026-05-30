import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    babel({ presets: [reactCompilerPreset()] }),
    react(),
    tailwindcss(),
    {
      name: "inline-css",
      transformIndexHtml(html, ctx) {
        if (!ctx.bundle) return html;
        let newHtml = html;
        for (const [fileName, file] of Object.entries(ctx.bundle)) {
          if (fileName.endsWith(".css") && "source" in file) {
            const cssContent = file.source.toString();
            const cleanFileName = fileName.split("/").pop();
            const linkRegex = new RegExp(`<link[^>]*href="[^"]*${cleanFileName}"[^>]*>`, "g");
            newHtml = newHtml.replace(linkRegex, `<style>${cssContent}</style>`);
          }
        }
        return newHtml;
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: true,
    cssMinify: true,
    sourcemap: false,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Put react core and third party modules in separate chunks for aggressive caching
          if (id.includes("node_modules")) {
            const normalizedId = id.replaceAll("\\", "/");
            if (normalizedId.includes("/node_modules/lenis/")) {
              return "lenis";
            }
            if (id.includes("react-dom") || id.includes("react-helmet-async") || id.includes("react-router-dom")) {
              return "vendor-react";
            }
            if (id.includes("react")) {
              return "vendor-react-core";
            }
            return "vendor";
          }
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
    // Inline small assets to reduce number of HTTP requests
    assetsInlineLimit: 4096,
  },
});
