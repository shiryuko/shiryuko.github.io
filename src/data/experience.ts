export interface ExperienceItem {
	name: string;
	duration: string;
	description: string;
	myWork: string;
}

export const experience: ExperienceItem[] = [
	{
		name: 'Systems, Servers & Solutions - Project manager',
		duration: 'Jan 2023 — Present',
		description:
			'Full-service digital agency focused on building scalable web products for startups and mid-size companies. The team works across design systems, frontend architecture, and performance optimization for high-traffic marketing sites.',
		myWork:
			'Led frontend development for three client platforms, introduced a component library in React, and reduced average page load time by 35% through code splitting and image optimization.',
	},{
		name: 'Systems, Servers & Solutions - Frontend developer',
		duration: 'Aug 2020 — Present',
		description:
			'Full-service digital agency focused on building scalable web products for startups and mid-size companies. The team works across design systems, frontend architecture, and performance optimization for high-traffic marketing sites.',
		myWork:
			'Led frontend development for three client platforms, introduced a component library in React, and reduced average page load time by 35% through code splitting and image optimization.',
	},
	{
		name: 'CPCRetroDev - Staff member',
		duration: '2019 — 2024',
		description:
			'',
		myWork:
			'Designed and elaborated posters and cassette covers for the event and competition. Created assets for social media and website. Designed thumbnails, certificates and promotional material.',
	},
	{
		name: 'Baviux - Game artist intern',
		duration: '2018 — 2019',
		description:
			'',
		myWork:
			'Delivered five client websites end-to-end, set up CI/CD pipelines for static deployments, and published two open-source UI kits that accumulated 500+ GitHub stars combined.',
	},
];
