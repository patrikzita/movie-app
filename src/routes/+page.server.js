import axios from 'axios';
/* 
TODO: získat data z TMDB
*/
/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: import.meta.env.VITE_MOVIE_API
		}
	};
	const data = await axios
		.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
		.then((response) => response.data.results);

	return {
		popular: data
	};
}
