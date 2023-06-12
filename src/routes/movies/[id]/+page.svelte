<script>
	import { formatDate, getYear } from '../../../utils/dateUtils';
	import { formatCurrency } from '../../../utils/formatCurrency';
	import { assignRatingColor, convertRatingToPercentage } from '../../../utils/utils';
	import { cn } from '../../../utils/utils';

	/**
	 * @type {import('./$types').PageData}
	 */
	export let data;
	let percentage = convertRatingToPercentage(data.details.vote_average);
	let colorClass = assignRatingColor(percentage);
	let video = data.details.videos[0];
	let showFullOverview = false;

	console.log(data);
</script>

<div class="bg-slate-400 p-0 md:py-16">
	<div class="md:container bg-white mx-auto p-8 md:rounded-3xl">
		<header class="my-4">
			<div class="flex justify-between">
				<h1 class="text-2xl font-semibold">{data.details.title}</h1>
				<div
					class={cn(
						'text-white rounded-lg flex justify-center items-center p-2 text-lg font-black md:hidden',
						colorClass
					)}
				>
					{percentage}%
				</div>
			</div>
			<div class="flex gap-3">
				<span class="after:content-['•'] after:ml-1"
					>{getYear(new Date(data.details.release_date))}</span
				>
				<div class="flex items-center gap-3">
					{#each data.details.production_countries as country}
						<img
							loading="lazy"
							width="20"
							src={`https://flagcdn.com/w20/${country.iso_3166_1.toLowerCase()}.png`}
							srcSet={`https://flagcdn.com/w40/${country.iso_3166_1.toLowerCase()}.png 2x`}
							alt=""
						/>
					{/each}
				</div>
			</div>
		</header>
		<div class="flex gap-6">
			<main class="w-full md:w-3/5">
				<div class="flex flex-col xss:flex-row gap-2 h-30vh">
					<div class="xss:w-1/3">
						<img
							class="h-full object-cover xss:rounded-l-lg"
							src={'https://image.tmdb.org/t/p/w500' + data.details.backdrop_path}
							alt=""
						/>
					</div>
					{#if video.site === 'YouTube'}
						<iframe
							class="xss:w-2/3 xss:rounded-r-lg"
							title={data.details.title}
							src={`https://www.youtube.com/embed/${video.key}`}
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						/>
					{/if}
				</div>
				<div class="mt-16 mb-4 xss:my-4">
					<div class="clamp pt-16 xss:pt-0" class:clamp-open={showFullOverview}>
						<p>{data.details.overview}</p>
					</div>
					<button
						class="text-blue-600 rounded cursor-pointer"
						on:click={() => (showFullOverview = !showFullOverview)}
					>
						{showFullOverview ? '- Less' : '+ More'}
					</button>
				</div>
				<div class="flex overflow-x-auto gap-4 no-scrollbar">
					{#each data.details.genres as genre}
						<span class="border px-3 py-1 rounded-3xl font-medium">{genre.name}</span>
					{/each}
				</div>
				<div class="py-6">
					<hr />
				</div>
				<div>
					<h2 class="text-xl font-semibold mb-4">Additional information</h2>
					<div class="flex flex-col gap-3">
						<div class="flex gap-4 font-light">
							<span>Run time:</span>
							<span>{data.details.runtime} min</span>
						</div>
						<div class="flex gap-4 font-light">
							<span>Original title:</span>
							<span>{data.details.original_title}</span>
						</div>
						<div class="flex gap-4 font-light">
							<span>Premiere:</span>
							<span>{formatDate(new Date(data.details.release_date))}</span>
						</div>
						<div class="flex gap-4 font-light">
							<span>Revenue:</span>
							<span>{formatCurrency(data.details.revenue)}</span>
						</div>
					</div>
				</div>
			</main>
			<aside class="hidden md:block md:w-2/5">
				<div
					class={cn(
						'text-white rounded-lg flex flex-col justify-center items-center p-3',
						colorClass
					)}
				>
					<div class="text-3xl font-black">
						{percentage}%
					</div>
					<p class="text-sm">Average review</p>
				</div>
			</aside>
		</div>
	</div>
</div>

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.clamp {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}

	.clamp-open {
		-webkit-line-clamp: unset;
	}
</style>
