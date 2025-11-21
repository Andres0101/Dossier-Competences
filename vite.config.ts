import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			components: path.resolve(__dirname, './src/components'),
			assets: path.resolve(__dirname, './src/assets'),
			src: path.resolve(__dirname, './src'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
                    @use "./src/_colors.scss" as *;
                    @use "./src/_mixin.scss" as *;
                    @use "./src/_typography.scss" as *;
                    @use "./src/_utilities.scss" as *;
                    @use "./src/_variables.scss" as *;
                `,
			},
		},
	},
	plugins: [
		react(),
		svgr({
			include: '**/*.svg?react',
			svgrOptions: {
				memo: true,
				svgo: false,
			},
		}),
	],
});
