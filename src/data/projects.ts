export type ProjectCategory = 'professional' | 'academic' | 'personal';

export interface Project {
	slug: string;
	title: string;
	summary: string;
	coverImage: string;
	category: ProjectCategory;
	tags: string[];
	content: string;
}

export const projectCategoryLabels: Record<ProjectCategory, string> = {
	professional: 'Professional',
	academic: 'Academic',
	personal: 'Personal',
};

export const projects: Project[] = [
	{
		slug: 'design-system-hub',
		title: 'Design System Hub',
		summary:
			'A centralized documentation and component playground for a multi-product design system used across four applications.',
		coverImage: '/images/projects/design-system-hub.svg',
		category: 'professional',
		tags: ['Astro', 'React', 'Storybook'],
		content:
			'Design System Hub was built to solve fragmentation across product teams that each maintained slightly different UI patterns. The hub aggregates tokens, components, and usage guidelines in a single searchable interface.\n\nThe project includes live component previews, accessibility checklists, and versioned changelog entries. Teams can copy code snippets directly or browse Figma references linked to each component entry.',
	},
	{
		slug: 'taskflow-app',
		title: 'Taskflow App',
		summary:
			'A minimalist task manager with drag-and-drop boards, keyboard shortcuts, and offline-first sync.',
		coverImage: '/images/projects/taskflow-app.svg',
		category: 'personal',
		tags: ['TypeScript', 'IndexedDB', 'PWA'],
		content:
			'Taskflow started as a personal productivity experiment and evolved into a fully functional PWA. Users can organize tasks in kanban columns, filter by priority, and work offline with changes synced when connectivity returns.\n\nKey technical decisions included using IndexedDB for local persistence, optimistic UI updates, and a custom hook layer that abstracts sync conflicts between tabs and devices.',
	},
	{
		slug: 'portfolio-analytics',
		title: 'Portfolio Analytics',
		summary:
			'Privacy-friendly analytics dashboard for creative portfolios with real-time visitor insights and heatmaps.',
		coverImage: '/images/projects/portfolio-analytics.svg',
		category: 'academic',
		tags: ['Node.js', 'D3', 'PostgreSQL'],
		content:
			'Portfolio Analytics gives freelancers and agencies lightweight insight into how visitors interact with their work without relying on third-party trackers. The dashboard surfaces page views, referral sources, and scroll depth per project page.\n\nThe backend aggregates events in near real-time using a small Node service, while the frontend visualizes trends with D3 charts and exportable CSV reports for client presentations.',
	},
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}
