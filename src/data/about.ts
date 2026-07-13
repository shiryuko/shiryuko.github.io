export interface AboutContent {
	heading: string;
	paragraphs: string[];
	photoAlt: string;
	photoPlaceholder: string;
}

export const about: AboutContent = {
	heading: 'Hi, I\'m Carla!',
	paragraphs: [
		'I\'m a Multimedia Engineer from the University of Alicante with 6+ years of experience building interactive web-based 3D applications.',
		'Passionate about both technology and digital art, I enjoy combining programming with creativity to create engaging user experiences.',
		'My interests span frontend development, browser-based 3D graphics, game development, and digital design. I\'ve also gained experience leading development teams and delivering complex projects from concept to production.',
	],
	photoAlt: 'Profile photo placeholder',
	photoPlaceholder: 'Your photo',
};
