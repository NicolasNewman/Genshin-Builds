<script lang="ts">
	import type { IBuild } from '../../types/build';
	import Artifact from './Artifact.svelte';
	export let build: IBuild;

	const artifacts = build.artifacts;
	const { circlet, flower, goblet, plume, sands } = artifacts;
</script>

<div class="flex items-center">
	<div class="w-[155px] mr-2">
		{#if circlet}
			<Artifact artifact={circlet} slot="circlet" />
		{/if}
		{#if goblet}
			<Artifact artifact={goblet} slot="goblet" />
		{/if}
		{#if sands}
			<Artifact artifact={sands} slot="sands" />
		{/if}
	</div>
	<div class="w-[155px]">
		{#if flower}
			<Artifact artifact={flower} slot="flower" />
		{/if}
		{#if plume}
			<Artifact artifact={plume} slot="plume" />
		{/if}
	</div>
</div>

<style>
	.info {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
	}
</style>
