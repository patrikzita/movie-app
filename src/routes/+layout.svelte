<script>
	import '../index.css';
	import Navbar from '../components/home/Navbar.svelte';
</script>

<svelte:head>
	<title>Movie App | Find your favorite movie</title>
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href="/favicon/light/apple-touch-icon.png"
		media="(prefers-color-scheme: light)"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="/favicon/light/favicon-32x32.png"
		media="(prefers-color-scheme: light)"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="/favicon/light/favicon-16x16.png"
		media="(prefers-color-scheme: light)"
	/>
	<link
		rel="manifest"
		href="/favicon/light/site.webmanifest"
		media="(prefers-color-scheme: light)"
	/>
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href="/favicon/dark/apple-touch-icon.png"
		media="(prefers-color-scheme: dark)"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="/favicon/dark/favicon-32x32.png"
		media="(prefers-color-scheme: dark)"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="/favicon/dark/favicon-16x16.png"
		media="(prefers-color-scheme: dark)"
	/>
	<link rel="manifest" href="/favicon/dark/site.webmanifest" media="(prefers-color-scheme: dark)" />
</svelte:head>

<Navbar />
<slot />
