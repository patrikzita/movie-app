/**
 * Format to Date
 * @param {Date} date
 * @returns {string}
 */
export const formatDate = (date) => {
	const formatter = new Intl.DateTimeFormat('en', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
	return formatter.format(date);
};
/**
 * From YYYY-MM-DD to YYYY
 * @param {Date} date
 * @returns {string}
 */
export const getYear = (date) => {
	const formatter = new Intl.DateTimeFormat('en', {
		year: 'numeric'
	});
	return formatter.format(date);
};
