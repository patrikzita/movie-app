<script>
	import '../index.css';
	import Navbar from '../components/home/Navbar.svelte';
</script>

<svelte:head>
	<title>Movie App</title>
	<!-- 
		TODO: ADD Favicon for dark mode.
	 -->
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href="/apple-touch-icon.png"
		media="(prefers-color-scheme: light)"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="/favicon-32x32.png"
		media="(prefers-color-scheme: light)"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="/favicon-16x16.png"
		media="(prefers-color-scheme: light)"
	/>
	<link rel="manifest" href="/site.webmanifest" media="(prefers-color-scheme: light)" />
</svelte:head>

<Navbar />
<slot />
