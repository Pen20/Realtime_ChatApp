import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  Base: process.env.VITE_BASE_PATH || "/Realtime_ChatApp/tree/main",
});
