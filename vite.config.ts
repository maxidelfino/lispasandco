import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          forms: ["react-hook-form", "@hookform/resolvers", "joi"],
          icons: ["lucide-react"],
          email: ["emailjs-com"],
        },
      },
    },
  },
  // optimizeDeps: {
  //   exclude: ['lucide-react'],
  // },
});
