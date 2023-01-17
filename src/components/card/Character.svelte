<script lang="ts">
	import { getAcensionLevel } from '$lib/helper';
	import type { IBuild } from '../../types/build';
    export let build: IBuild;

    const {character, ascension, constelation, level, talent} = build.character;
</script>

<div class="relative h-full z-10">
    <div class="info flex justify-between flex-col h-full text-lg">
        <div class="m-1">
            <div class="text-2xl">{character}</div>
            <div>Lvl. {level}/<span class="text-sm">{getAcensionLevel(ascension)}</span></div>
        </div>
        <div class="m-1">
            <div>C{constelation}</div>
            <div>Auto: {talent.auto}</div>
            <div>Skill: {talent.skill}</div>        
            <div>Burst: {talent.burst}</div>
        </div>
    </div>
    <div class="absolute top-0 left-0 -z-10 w-full h-full bg-cover bg-center brightness-75" style="background-image: url(/characters/{character}.png)"></div>
</div>

<style>
    .info {
        text-shadow: 1px 1px 2px rgba(0,0,0,0.9);
    }
</style>