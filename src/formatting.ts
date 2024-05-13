export function capitalizeFirstLetter(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function padTwoDigits(num: number) {
	return num.toString().padStart(2, "0");
}

export function getFormattedDate(date: Date) {
	const year = padTwoDigits(date.getFullYear());
	const month = padTwoDigits(date.getMonth() + 1);
	const day = padTwoDigits(date.getDate());
	const hour = padTwoDigits(date.getHours());
	const minutes = padTwoDigits(date.getMinutes());
	const seconds = padTwoDigits(date.getSeconds());
	return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
}
