<script lang="ts">
	import Paper, { Content } from '@smui/paper';
	import { characterInfo } from 'shared';
	import type { IBuild } from '../../types/build';
	import Artifacts from './Artifacts.svelte';
	import Character from './Character.svelte';
	import Stats from './Stats.svelte';
	export let build: IBuild;
</script>

<div class="paper-container overflow-hidden w-[740px] h-[276px]">
	<div
		class="flex min-h-full paper smui-paper smui-paper--raised smui-paper--elevation-z1 smui-paper--rounded"
		style="background: var(--{characterInfo[build.character.character].element})"
	>
		<div class="w-[200px] min-h-full">
			<Character {build} />
		</div>
		<div class="w-[200px] min-h-full">
			<Stats {build} />
		</div>
		<div class="w-[340px] min-h-full">
			<Artifacts {build} />
		</div>
	</div>
</div>

<style>
	.paper-container {
		font-family: 'Noto Serif', serif;
	}

	.paper {
		padding: 0 !important;
	}
</style>
