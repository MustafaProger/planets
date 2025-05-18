import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
	root: "src",
	base: "./",
	build: {
		outDir: "../dist",
		rollupOptions: {
			output: {
				entryFileNames: "js/[name].js",
				chunkFileNames: "js/[name].js",
				assetFileNames: (assetInfo) => {
					if (assetInfo.name && assetInfo.name.endsWith(".css")) {
						return "styles/[name][extname]";
					}
					if (
						assetInfo.name &&
						/\.(png|jpe?g|svg|gif|webp|ico)$/.test(assetInfo.name)
					) {
						return "img/[name][extname]";
					}
					if (
						assetInfo.name &&
						/\.(woff2?|ttf|eot|otf)$/.test(assetInfo.name)
					) {
						return "fonts/[name][extname]";
					}
					return "assets/[name][extname]";
				},
			},
		},
	},
	plugins: [
		viteStaticCopy({
			targets: [
				{ src: "img/*", dest: "img" },
				{ src: "fonts", dest: "fonts" },
				{ src: "styles", dest: "styles" },
			],
		}),
	],
});
