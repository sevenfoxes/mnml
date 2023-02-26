import { build } from "esbuild";
import { eslintPlugin } from "esbuild-plugin-eslinter";
import devServer from "esbuild-plugin-dev-server";
import { copy } from "esbuild-plugin-copy";
import { clean } from "esbuild-plugin-clean";

build({
  logLevel: "info",
  loader: {
    ".js": "jsx",
  },
  format: "esm",
  entryPoints: ["src/index.js"],
  metafile: true,
  bundle: true,
  sourcemap: "external",
  outdir: "./dist",
  splitting: true,
  chunkNames: "[name].[hash]",
  plugins: [
    devServer({ public: "./dist", port: 8080 }),
    copy({
      resolveFrom: "cwd",
      assets: {
        from: ["./src/images/*"],
        to: ["./dist/images"],
      },
    }),
    eslintPlugin(),
    clean(),
  ],
}).catch(() => process.exit(1));
