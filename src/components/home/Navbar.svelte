<script>
	import FaHome from 'svelte-icons/fa/FaHome.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	const links = [
		{
			icon: FaGithub,
			href: 'https://github.com/patrikzita'
		},
		{
			icon: FaLinkedin,
			href: 'https://www.linkedin.com/in/patrik-zita-7b6438254/'
		}
	];
</script>

<nav
	class="sticky top-0 flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
>
	<div class="flex w-full flex-wrap items-center justify-between px-6 md:px-16">
		<a
			class="my-1 mr-2 h-6 w-6 flex items-center text-neutral-900 hover:text-neutral-600 focus:text-neutral-600lg:mb-0 lg:mt-0"
			href="/"
		>
			<FaHome />
		</a>

		<div class="flex gap-2">
			{#each links as link (link.href)}
				<a
					class="my-1 mr-2 h-6 w-6 flex items-center hover:text-neutral-600 text-neutral-900 focus:text-neutral-600 lg:mb-0 lg:mt-0"
					href={link.href}
					target="_blank"
				>
					<svelte:component this={link.icon} />
				</a>
			{/each}
		</div>
	</div>
</nav>
