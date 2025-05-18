import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					const ext = assetInfo.name.split(".").pop();

					if (/\.(png|jpg|jpeg|svg|gif)$/i.test(assetInfo.name)) {
						if (assetInfo.name.includes("img/planets/")) {
							return "img/planets/[name][extname]";
						}
						if (assetInfo.name.includes("img/arrow/")) {
							return "img/arrow/[name][extname]";
						}
						if (assetInfo.name.includes("img/logo")) {
							return "img/logo/[name][extname]";
						}
						return "img/[name][extname]";
					}

					if (ext === "ttf") {
						return "fonts/[name][extname]";
					}

					return "assets/[name][extname]";
				},
			},
		},
	},
});
