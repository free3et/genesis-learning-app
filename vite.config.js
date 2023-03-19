import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/genesis-learning-app/",
  plugins: [react()],
  proxy: {
    "/api": {
      target: "https://api.wisey.app/",
      changeOrigin: true,
      secure: false,
    },
  },
});
