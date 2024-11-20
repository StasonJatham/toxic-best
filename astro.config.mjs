// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';



// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({

			favicon: 'favicon.jpg',
			lastUpdated: true,
			title: 'John',
			logo: {
				src: './src/assets/500_boss_with_back.webp',
			},
			social: {
				github: 'https://github.com/withastro/starlight',
				linkedin: 'https://www.linkedin.com/company/astroinc',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Disclaimer', slug: 'guides/disclaimer' },
						{ label: 'Mitmachen', slug: 'guides/mitmachen' },
						{ label: 'Nutzen', slug: 'guides/nutzen' },
						{ label: 'Richtig Prompten', slug: 'guides/prompts' },
					],
				},
				{
					label: 'Toxische Prompts',
					autogenerate: { directory: 'toxische-prompts' },
				},
				{
					label: 'Produktive Prompts',
					badge: { text: 'Neu!', variant: 'success' },
					autogenerate: { directory: 'produktive_prompts' },
				},
			],
		}),
	],
});
