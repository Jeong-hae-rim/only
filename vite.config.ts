import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "hoyeol x daeman only festival LOVE PUNCH",
        short_name: "hodam LOVE PUNCH",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/pwa-512x512.png",
            type: "image/png",
            sizes: "512x512",
          },
          {
            src: "/maskable-icon-512x512.png",
            type: "image/png",
            sizes: "512x512",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
