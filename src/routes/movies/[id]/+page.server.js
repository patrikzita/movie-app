import axios from 'axios';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: import.meta.env.VITE_MOVIE_API
		}
	};
	const details = await axios
		.get(`https://api.themoviedb.org/3/movie/${params.id}`, options)
		.then((response) => response.data);
	const videos = await axios
		.get(`https://api.themoviedb.org/3/movie/${params.id}/videos`, options)
		.then((response) => response.data.results);

	return {
		details: {
			...details,
			videos: videos
		}
	};
}
