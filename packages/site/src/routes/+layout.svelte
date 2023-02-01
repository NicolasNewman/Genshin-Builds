<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	import '../app.scss';
	import Footer from '../components/Footer.svelte';
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

<div class="app w-screen h-screen overflow-scroll">
	<slot />
	<Footer path={$page.url.href} />
</div>

<style lang="scss">
	@use '../app.scss';
	:global(body) {
		margin: 0;
	}

	.app {
		background-image: url(/bg.jpg);
		background-size: cover;
	}

	:global(:root) {
		--Cryo: linear-gradient(180deg, #{app.$cryo-dark} 50%, #{app.$cryo} 100%);
		--Electro: linear-gradient(180deg, #{app.$electro-dark} 50%, #{app.$electro} 100%);
		--Geo: linear-gradient(180deg, #{app.$geo-dark} 50%, #{app.$geo} 100%);
		--Dendro: linear-gradient(180deg, #{app.$dendro-dark} 50%, #{app.$dendro} 100%);
		--Pyro: linear-gradient(180deg, #{app.$pyro-dark} 50%, #{app.$pyro} 100%);
		--Hydro: linear-gradient(180deg, #{app.$hydro-dark} 50%, #{app.$hydro} 100%);
		--Anemo: linear-gradient(180deg, #{app.$anemo-dark} 50%, #{app.$anemo} 100%);
	}
</style>
