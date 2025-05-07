import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "RohitUI",
      fileName: (format) => `rohit-ui.${format}.js`,
    },
    rollupOptions: {
      // External libraries that should not be bundled
      external: ["react", "react-dom", "styled-components"],
      output: {
        // Global variables to use in UMD build for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
  },
  // For development, use the example app
  server: {
    open: true,
  },
});
