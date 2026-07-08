export interface AboutContent {
	heading: string;
	paragraphs: string[];
	photoAlt: string;
	photoPlaceholder: string;
}

export const about: AboutContent = {
	heading: "Hi, I'm Carla",
	paragraphs: [
		"I build thoughtful, performant web experiences with a strong focus on accessibility and clean architecture. Over the past few years I've worked across agencies, startups, and personal projects — always trying to bridge the gap between design intent and production-ready code.",
		"My toolkit includes modern JavaScript frameworks, design systems, and performance tooling. I'm especially interested in component-driven development, static site generation, and creating interfaces that feel fast and effortless to use. When I'm not coding, I contribute to open source and experiment with new tools to stay sharp.",
	],
	photoAlt: 'Profile photo placeholder',
	photoPlaceholder: 'Your photo',
};
