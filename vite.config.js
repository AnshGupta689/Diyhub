import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      three: "three",
    },
  },
  publicDir: "public", // Static assets directory
  server: {
    allowedHosts: [
      "d5e9-2409-40c0-107b-d5d8-81ef-8d3c-9f51-3153.ngrok-free.app", // Replace with your ngrok URL
    ],
  },
});
