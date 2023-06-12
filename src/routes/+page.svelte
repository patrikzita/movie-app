<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import PopularMovies from '../components/PopularMovies.svelte';
</script>

<section class="container mx-auto py-10">
	<PopularMovies movies={data.popular} />
</section>
