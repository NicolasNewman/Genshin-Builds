<script lang="ts">
	import { base } from '$app/paths';
	import { getAcensionLevel, truncateName } from 'shared';
	import type { IBuild } from '../../types/build';
	export let build: IBuild;

	const { character, ascension, constelation, level, talent } = build.character;
</script>

<div id="container" class="relative h-full">
	<div class="info absolute z-10 flex justify-between flex-col h-full text-lg">
		<div class="m-1">
			<div class="text-2xl">{truncateName(character)}</div>
			<div>Lvl. {level}/<span class="text-sm">{getAcensionLevel(ascension)}</span></div>
		</div>
		<div class="m-1">
			<div>C{constelation}</div>
			<div>Auto: {talent.auto}</div>
			<div>Skill: {talent.skill}</div>
			<div>Burst: {talent.burst}</div>
		</div>
	</div>
	<div
		id="character-image"
		class="absolute -z-1 top-0 left-0 w-[150%] translate-x-[-17%] h-full bg-cover bg-center brightness-90"
		style="background-image: url({base}/characters/{character}.png);"
	/>
</div>

<style>
	.info {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
	}

	#character-image {
		mask-image: linear-gradient(to right, rgb(0, 0, 0) 70%, rgba(0, 0, 0, 0));
	}
</style>
