<script lang="ts">
	import { base } from '$app/paths';
	import { computeBuildStats, JoinedStatToName } from '$lib/build';
	import { getAcensionLevel, getEntries, seperateCamelCase, truncateWeapon } from 'shared';
	import type { IBuild } from '../../types/build';
	export let build: IBuild;

	const weapon = build.weapon;
	// const { circlet, flower, goblet, plume, sands } = build.artifacts;
	const stats = computeBuildStats(build);
</script>

<div class="relative h-full z-10 ml-4">
	<div class="info flex flex-col h-full text-lg">
		<div class="flex items-center mt-3">
			<img class="w-16 h-16" src="{base}/weapons/{weapon?.weapon}.png" alt="Weapon Icon" />
			<div class="flex flex-col items-center">
				<div class="text-center stat">
					{seperateCamelCase(truncateWeapon(weapon?.weapon ?? ''))}
				</div>
				<div class="flex">
					<div class="text-sm p-1 m-1 rounded bg-white/[.2]">
						Lvl. {weapon?.level}/<span class="text-xs"
							>{getAcensionLevel(weapon?.ascension ?? 0)}</span
						>
					</div>
					<div class="text-sm p-1 m-1 rounded bg-white/[.2]">R{weapon?.refinement}</div>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-x-3 mt-1">
			{#each getEntries(stats) as stat}
				{#if stat[1] > 0}
					{@const isPercent = stat[0].includes('_')}
					<div class="stat">
						<i class="icon-{stat[0]}">
							<span class="path1" /><span class="path2" />
						</i>
						{isPercent ? stat[1].toFixed(1) : stat[1].toLocaleString('en-us')}{isPercent ? '%' : ''}
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.stat-icon {
		width: 16px;
		height: 16px;
		background-color: white;
		mask-size: contain;
		mask-position: center;
		mask-repeat: no-repeat;
		display: inline-block;
	}

	.stat {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
	}
</style>
