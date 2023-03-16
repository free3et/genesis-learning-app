import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/genesis-learning-app/",
  plugins: [react()],
  proxy: {
    "/api": {
      target:
        "https://api.wisey.app/api/v1/core/preview-courses?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMWZkNjYwNS1hZTkwLTQyNTYtYTZiOS05ZGFiODFkZGQyMjciLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4MzAzMDYsImV4cCI6MTY3OTczMDMwNn0.cAx4PZyr9puPdLDZ92A79gKkzdazyFtOYEuvvJqOaeE",
      changeOrigin: true,
      //secure: false,
    },
  },
});
