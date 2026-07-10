export type ProjectCategory = 'professional' | 'academic' | 'personal';

export type ProjectLinkType = 'github' | 'youtube' | 'external';

export interface ProjectLink {
	type: ProjectLinkType;
	label: string;
	href: string;
}

export interface ProjectGalleryImage {
	src: string;
	alt: string;
	caption?: string;
}

export interface Project {
	slug: string;
	title: string;
	summary: string;
	coverImage: string;
	category: ProjectCategory;
	tags: string[];
	content: string;
	links?: ProjectLink[];
	myWork: string[];
	gallery?: ProjectGalleryImage[];
}

export const projectCategoryLabels: Record<ProjectCategory, string> = {
	professional: 'Professional',
	academic: 'Academic',
	personal: 'Personal',
};

export const projectCategoryStyles: Record<ProjectCategory, string> = {
	professional: 'bg-red-500/90 text-white',
	academic: 'bg-indigo-500/90 text-white',
	personal: 'bg-emerald-500/90 text-white',
};

export const projects: Project[] = [
	{
		slug: 'touch-and-brush',
		title: 'Touch & Brush',
		summary:
			'A Nintendo DS homebrew game featuring custom gesture recognition and touchscreen-based gameplay.',
		coverImage: '/images/projects/design-system-hub.svg',
		category: 'academic',
		tags: ['C++', 'Devkitpro'],
		content:
			'Touch & Brush is a **mental agility homebrew game** for the **Nintendo DS**, developed in C++ using the DevkitPro toolchain as my **final degree project for a Bachelor\'s degree in Multimedia Engineering**.\n\nThe game challenges players to draw specific patterns on the touchscreen to defeat enemies. Each level introduces new enemy types, each with unique behaviors and attack patterns, requiring players to quickly recognize and reproduce the correct gestures before being defeated.',
		links: [
			{ type: 'github', label: 'GitHub', href: 'https://github.com/shiryuko/touch_and_brush' },
			{ type: 'youtube', label: 'Gameplay', href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
			{ type: 'external', label: 'Project report', href: 'https://rua.ua.es/entities/publication/b92d9ec4-edc1-4f8b-82f7-016480a4d176' },
		],
		myWork: [
			'Developed the entire game in **C++** using the **DevkitPro** toolchain.',
			'Designed and implemented a **custom gesture recognition algorithm** to accurately identify player-drawn patterns.',
			'Worked within the Nintendo DS **hardware constraints**, gaining hands-on experience with handheld game development.',
			'Created all **graphics**, **artwork**, **UI elements**, and **animations** from scratch.',
			'Designed and implemented the **gameplay mechanics**, **enemy behaviors**, and **level progression**.'
		],
		gallery: [
			{
				src: '/images/projects/design-system-hub.svg',
				alt: 'Design System Hub component overview',
				caption: 'Component library overview',
			},
			{
				src: '/images/projects/design-system-hub.svg',
				alt: 'Design System Hub documentation layout',
				caption: 'Documentation layout',
			},
			{
				src: '/images/projects/design-system-hub.svg',
				alt: 'Design System Hub token explorer',
				caption: 'Design token explorer',
			},
		],
	},
	{
		slug: 'bubble-shooting-robots',
		title: 'Bubble Shooting Robots',
		summary:
			'Creation of an entire visual identity for a casual arcade mobile game.',
		coverImage: '/images/projects/bsr-banner.png',
		category: 'professional',
		tags: ['Unity','Photoshop', 'Illustrator'],
		content:
			'Bubble Shooting Robots is a **casual arcade mobile game for Android and iOS** developed during my **internship at Baviux**. The goal of the project was to create a **simple yet highly addictive mobile experience built around a single satisfying mechanic**: trapping enemies inside bubbles and popping them.\n\n The game combines accessible one-touch gameplay with a colorful minimalist art style and a free-to-play model supported by **ad-based monetization**, making it ideal for short and engaging play sessions.',
		links: [
			{ type: 'external', label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.baviux.bubblerobots' },
			{ type: 'external', label: 'Apple Store', href: 'https://apps.apple.com/es/app/bubble-shooting-robots/id1576352005' },
		],
		myWork: [
			'Designed the entire visual identity of the game using **Adobe Illustrator**.',
			'Created **6 themed backgrounds**, **40+ playable character skins**, **30+ enemy designs**, and **6 boss characters**.',
			'Designed all **UI elements**, the game logo, application icons, and promotional artwork used for marketing.',
			'Produced all **2D animations** and prepared every asset for integration into Unity.',
			'Designed assets using **limited color palettes** to achieve a vibrant, cohesive visual style while keeping production efficient.',
			'Simplified **shapes and visual details** to maximize readability on small mobile screens without sacrificing personality.',
			'Created artwork with **multiple screen resolutions and aspect ratios** in mind to ensure a consistent experience across devices.',
		],
		gallery: [
			{
				src: '/images/projects/bsr-g1.png',
				alt: 'Game screenshots',
				caption: 'Game screenshots',
			},
			{
				src: '/images/projects/bsr-g2.png',
				alt: 'Game icons design',
				caption: 'Game icons design',
			},
			{
				src: '/images/projects/bsr-g3.png',
				alt: 'Game screenshots',
				caption: 'Game screenshots',
			},
		],
	},
	{
		slug: 'frostyland',
		title: 'Frostyland',
		summary:
			'RPG action-adventure game developed as part of an PBL initiative with custom 3D Engine.',
		coverImage: '/images/projects/portfolio-analytics.svg',
		category: 'academic',
		tags: ['C++', 'GLSL', 'Blender', 'Photoshop', 'After Effects', 'Scrum'],
		content:
			'Frostyland is a **3D action-adventure RPG game** developed over eight months by a team of five students from the University of Alicante as part of a **Project-Based Learning (PBL) initiative**. Built entirely from scratch in **C++**, the project features a **proprietary 3D engine** with support for both Windows and Linux.\n\n The game combines exploration, combat, and character progression within an original fantasy world, featuring entirely **custom-made 2D and 3D assets, animations, visual effects, and promotional materials**. The project provided valuable experience in multidisciplinary game development, requiring close collaboration between programming, art, and design throughout the entire production cycle.',
		links: [
			{ type: 'github', label: 'GitHub', href: 'https://github.com/shiryuko/frostyland_abp' },
			{ type: 'youtube', label: 'Gameplay', href: 'https://www.youtube.com/watch?v=7gKsnNusrOk' },
		],
		myWork: [
			'**Scrum Master** for a multi-disciplinary team of 5 students.',
			'Contributed to the development of **gameplay mechanics** and **user interface** such as score and menus systems.',
			'**Development of the project\'s custom 3D engine**',
			'**Designed, created and animated the game\'s main characters and enemies as 2D assets.**',
			'Modeled a variety of **3D environmental assets** and **props** used throughout the game.',
			'Created the game\'s **promotional artwork** and **marketing videos**.'
		],
		gallery: [
			{
				src: '/images/projects/portfolio-analytics.svg',
				alt: 'Portfolio Analytics dashboard overview',
				caption: 'Analytics dashboard',
			},
			{
				src: '/images/projects/portfolio-analytics.svg',
				alt: 'Portfolio Analytics visitor heatmap',
				caption: 'Visitor heatmap',
			},
			{
				src: '/images/projects/portfolio-analytics.svg',
				alt: 'Portfolio Analytics referral breakdown',
				caption: 'Referral breakdown',
			},
		],
	},
	{
		slug: 'redsea',
		title: 'Redsea',
		summary:
			'Retro single-player shoot \'em up game developed fully in Assembly for Amstrad CPC.',
		coverImage: '/images/projects/portfolio-analytics.svg',
		category: 'academic',
		tags: ['Assembly', 'CPCTelera'],
		content:
			'Redsea is a **singleplayer shoot \'em up retro game** that was developed by three students at the University of Alicante in 2018 for the well known AmstradCPC game creation contest: **CPCRetroDev**.\n\n The game was developed in less than 3 months and it\'s **entirely programmed in assembly Z80 language** using the **CPCTelera game engine**, which for us meant as a high valuable project, as we had to adjust to the little hardware limitations of the machine.\n\n Redsea ended up in 12th position out of 41 participants in the contest.',
		links: [
			{ type: 'github', label: 'GitHub', href: 'https://github.com/shiryuko/redsea' },
			{ type: 'external', label: 'itch.io', href: 'https://shiryuko.itch.io/redsea' },
		],
		myWork: [
			'**Project manager**',
			'Developed the **entities manager system** for the game.',
			'Co-developed the **game architecture** and **rendering**.',
			'Contributed to the **programming of the gameplay mechanics** such as collision detection, player lives and scores.',
			'**Sprites and animations** artist.',
		],
		gallery: [
			{
				src: '/images/projects/portfolio-analytics.svg',
				alt: 'Portfolio Analytics dashboard overview',
				caption: 'Analytics dashboard',
			},
			{
				src: '/images/projects/portfolio-analytics.svg',
				alt: 'Portfolio Analytics visitor heatmap',
				caption: 'Visitor heatmap',
			},
			{
				src: '/images/projects/portfolio-analytics.svg',
				alt: 'Portfolio Analytics referral breakdown',
				caption: 'Referral breakdown',
			},
		],
	},
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}
