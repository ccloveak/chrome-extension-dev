import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://stackoverflow.com/questions/73947942/referenceerror-dirname-is-not-defined-in-es-module-scope-building-script
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: "/",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
});
