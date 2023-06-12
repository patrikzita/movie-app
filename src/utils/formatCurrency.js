const CURRENCY_FORMATTER = new Intl.NumberFormat('en', {
	currency: 'USD',
	style: 'currency',
	maximumFractionDigits: 0
});
/**
 * Function returns formated currency
 * @param {number} num
 * @returns
 */
export const formatCurrency = (num) => {
	return CURRENCY_FORMATTER.format(num);
};
