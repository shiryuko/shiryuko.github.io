export const site = {
	name: 'shiryuko',
	title: 'Carla\'s portfolio',
	description: 'My works as a Multimedia Engineer.',
	image: '/images/sharecard.png',
	nav: [
		{ label: 'About', href: '/#about' },
		{ label: 'Experience', href: '/#experience' },
		{ label: 'Projects', href: '/#projects' },
	],
	social: [
		{ label: 'GitHub', href: 'https://github.com/shiryuko', icon: 'github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/carla-macia-diez-246746194', icon: 'linkedin' },
	],
} as const;

export type SocialIconName = (typeof site.social)[number]['icon'];
export type SocialLink = (typeof site.social)[number];
