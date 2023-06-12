import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Converts a rating from a scale of 1-10 to a percentage.
 *
 * @param {number} rating - The rating to convert, expected to be in the range 1-10.
 * @returns {number} The rating converted to a percentage, in the range 0-100, formatted as a string with one decimal place.
 */
export const convertRatingToPercentage = (rating) => {
	return Number(((rating / 10) * 100).toFixed(1));
};

/**
 * Assigns a TailwindCSS background color class based on rating.
 *
 * @param {number} rating - The rating to base the color assignment on.
 * @returns {string} The TailwindCSS background color class.
 */
export const assignRatingColor = (rating) => {
	if (rating >= 95) return 'bg-green-600';
	if (rating >= 90) return 'bg-green-500';
	if (rating >= 85) return 'bg-green-500';
	if (rating >= 80) return 'bg-green-500';
	if (rating >= 75) return 'bg-green-500';
	if (rating >= 70) return 'bg-yellow-400';
	if (rating >= 65) return 'bg-yellow-300';
	if (rating >= 60) return 'bg-yellow-200';
	return 'bg-red-500';
};

/**
 * This function uses clsx and tailwind-merge to handle class names.
 * @param {import('clsx').ClassValue[]} inputs
 * @returns
 */
export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
