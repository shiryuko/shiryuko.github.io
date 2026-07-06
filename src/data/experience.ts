export interface ExperienceItem {
	name: string;
	duration: string;
	description: string;
	myWork: string;
}

export const experience: ExperienceItem[] = [
	{
		name: 'Acme Digital Agency',
		duration: 'Jan 2023 — Present',
		description:
			'Full-service digital agency focused on building scalable web products for startups and mid-size companies. The team works across design systems, frontend architecture, and performance optimization for high-traffic marketing sites.',
		myWork:
			'Led frontend development for three client platforms, introduced a component library in React, and reduced average page load time by 35% through code splitting and image optimization.',
	},
	{
		name: 'NovaTech Solutions',
		duration: 'Jun 2021 — Dec 2022',
		description:
			'B2B SaaS company providing workflow automation tools for operations teams. Products integrate with third-party APIs and require reliable real-time data synchronization across multiple services.',
		myWork:
			'Built and maintained the customer dashboard, implemented role-based access control, and collaborated with backend engineers to design REST endpoints used by over 2,000 active users.',
	},
	{
		name: 'Freelance & Personal Projects',
		duration: '2019 — 2021',
		description:
			'Independent work for small businesses and personal learning projects spanning static sites, e-commerce prototypes, and open-source contributions. Focused on sharpening fundamentals in HTML, CSS, JavaScript, and modern frameworks.',
		myWork:
			'Delivered five client websites end-to-end, set up CI/CD pipelines for static deployments, and published two open-source UI kits that accumulated 500+ GitHub stars combined.',
	},
];
