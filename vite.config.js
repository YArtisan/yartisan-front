import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@atoms": fileURLToPath(
        new URL("./src/components/shared/atoms", import.meta.url)
      ),
      "@molecules": fileURLToPath(
        new URL("./src/components/shared/molecules", import.meta.url)
      ),
      "@organisms": fileURLToPath(
        new URL("./src/components/shared/organisms", import.meta.url)
      ),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
