import { build } from "esbuild";

await build({
	entryPoints: ["src/stdio.ts"],
	bundle: true,
	platform: "node",
	target: "node20",
	format: "esm",
	outfile: "dist/stdio.mjs",
});
