// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
	namespace App {
		interface Movie {
			title: string;
			backdrop_path: string;
			release_date: string;
			genre_ids: number[];
			id: number;
			origin_country: string[];
			original_language: string;
			original_title: string;
			overview: string;
			popularity: number;
			poster_path: string;
			vote_average: number;
			vote_count: number;
			video: boolean;
			adult: boolean;
		}
		
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
