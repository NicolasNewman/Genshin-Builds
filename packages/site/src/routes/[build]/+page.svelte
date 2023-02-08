<script lang="ts">
	import { decode } from '$lib/encode/';
	import Card from '../../components/card/Card.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let builds = decode(data.build);

	const singleCol = builds.length <= 1;
	const dynamicGrid = singleCol ? 'grid-cols-1 w-fit mx-auto' : 'grid-cols-1 2xl:grid-cols-2';
	const dynamicContainer = singleCol ? 'flex items-center' : '';
	console.log(builds);
</script>

<div class="min-h-[55.05%] {dynamicContainer}">
	<div
		id="card-container"
		class="grid {dynamicGrid} justify-items-start md:justify-items-center gap-y-8 py-4"
	>
		{#each builds as build}
			<Card {build} />
		{/each}
	</div>
</div>
