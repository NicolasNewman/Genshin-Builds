<script lang="ts">
	import { decode } from '$lib/encode';
	import Card from '../../components/card/Card.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let builds = decode(data.build);
	console.log(builds);
</script>

<div
	id="card-container"
	class="grid grid-cols-1 2xl:grid-cols-2 justify-items-start md:justify-items-center gap-y-8 h-screen overflow-scroll py-4"
>
	{#each builds as build}
		<Card {build} />
	{/each}
</div>
