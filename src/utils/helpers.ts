export function isMobile(userAgent: string): boolean {
	const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
	return regex.test(userAgent)
}
