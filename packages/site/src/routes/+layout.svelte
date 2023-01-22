<script>
	import { base } from '$app/paths';
	import '../app.css';
</script>

<svelte:head>
	<!-- SMUI Styles -->
	<link rel="stylesheet" href="{base}/smui.css" media="(prefers-color-scheme: light)" />
	<link
		rel="stylesheet"
		href="{base}/smui-dark.css"
		media="screen and (prefers-color-scheme: dark)"
	/>
</svelte:head>
<slot />

<style>
	:global(body) {
		margin: 0;
		width: 100vw;
		height: 100vh;
		background-image: url(/bg.jpg);
		background-size: cover;
	}
</style>
