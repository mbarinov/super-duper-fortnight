import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  external: ["react"],
  treeshake: true,
  tsconfig: "tsconfig.json",
  splitting: true,
  sourcemap: true,
});
