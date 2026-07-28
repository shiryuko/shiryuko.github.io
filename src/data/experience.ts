export interface ExperienceItem {
	name: string;
	duration: string;
	description: string;
	myWork: string;
}

export const experience: ExperienceItem[] = [
	{
		name: 'Systems, Servers & Solutions - Technical Project Manager',
		duration: 'Jan 2023 — Present',
		description:
			'IT Consulting company developing real-time 3D browser-based digital twin applications for terminal logistics companies, powered by live telemetry data to improve real-world operational efficiency.',
		myWork:
			'Coordinated the project from deployment to delivery, using **Confluence** for functionality documentation, **managing development teams**, **client meetings**, **budgets**, **Jira** support processes, and technical documentation to ensure successful project execution. Created and maintained Test and Production server environments, and **deployed applications** using custom tools to ensure reliable project delivery.',
	},{
		name: 'Systems, Servers & Solutions - Frontend developer',
		duration: 'Aug 2020 — Jan 2023',
		description:
			'IT Consulting company developing real-time 3D browser-based digital twin applications for terminal logistics companies, powered by live telemetry data to improve real-world operational efficiency.',
		myWork:
			'Developed and maintained frontend applications using **HTML**, **CSS**, **Unity**, and **WebGL**. Collaborated on **bug fixing** across the frontend and backend (**Java**), performed SQL queries for debugging and testing, and worked with **Git** for version control in an agile development environment.',
	},
	{
		name: 'CPCRetroDev - Staff member',
		duration: '2019 — 2023',
		description:
			'Yearly game creation contest of the University of Alicante for Amstrad CPC 464 development.',
		myWork:
			'Designed and elaborated posters and cassette covers for the event and competition. Created assets for social media and website. Designed thumbnails, certificates and promotional material.',
	},
	{
		name: 'Baviux - Game artist intern',
		duration: 'Nov 2019 — Feb 2020',
		description:
			'Game development studio focused on creating casual mobile games.',
		myWork:
			'Created the entire visual identity for a game, including logos, characters, enemies, backgrounds and animations using **Adobe Photoshop and Illustrator**. Prepared every asset to be integrated into **Unity** game engine.',
	},
];
