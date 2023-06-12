<script>
	/** @type {App.Movie[]} **/
	export let movies;
	import MovieCard from './MovieCard.svelte';
</script>

<h1 class="text-center sm:text-left text-3xl my-6 font-bold">Popular Movies</h1>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
	{#each movies as movie}
		<MovieCard {movie} />
	{/each}
</div>
