import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import jsconfigPaths from "vite-jsconfig-paths";

export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/components"),
      layout: path.resolve(__dirname, "src/layout"),
    },
  },
});
