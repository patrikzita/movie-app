<script>
	import { formatDate } from '../utils/dateUtils';

	/** @type {App.Movie} **/
	export let movie;
</script>

<div class="flex flex-col items-center rounded-lg bg-gray-200 mx-6 md:mx-0">
	<a data-sveltekit-preload-data="hover" href={`/movies/${movie.id}`}>
		<img
			class="w-100 object-cover rounded-t-lg"
			src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
			alt={movie.title}
		/>
	</a>
	<div class="my-5 w-full rounded-b-lg px-3">
		<h2 class="text-lg font-semibold">{movie.title}</h2>
		<p class="text-sm">{formatDate(new Date(movie.release_date))}</p>
	</div>
</div>
