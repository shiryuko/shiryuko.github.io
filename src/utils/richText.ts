export function formatRichText(text: string): string {
	return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}
