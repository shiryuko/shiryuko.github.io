export const site = {
	name: 'Portfolio',
	nav: [
		{ label: 'About', href: '/#about' },
		{ label: 'Experience', href: '/#experience' },
		{ label: 'Projects', href: '/#projects' },
	],
	social: [
		{ label: 'GitHub', href: 'https://github.com/shiryuko', icon: 'github' },
		{ label: 'LinkedIn', href: 'https://google.com', icon: 'linkedin' },
	],
} as const;

export type SocialIconName = (typeof site.social)[number]['icon'];
export type SocialLink = (typeof site.social)[number];
