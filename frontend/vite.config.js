import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "frontend", // Set the root directory to 'frontend'
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "http://localhost:5000",
      "/uploads/": "http://localhost:5000",
    },
  },
  build: {
    outDir: "../dist", // Specify the output directory for the build
    rollupOptions: {
      input: "frontend/index.html", // Ensure that the entry point is the correct path to index.html
    },
  },
});
