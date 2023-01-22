<script lang="ts">
	import type { SlotKey } from '../../types/good';
	import type { IArtifact, IBuild } from '../../types/build';
	import { StatToName } from '$lib/build';
	import { base } from '$app/paths';
	export let slot: SlotKey;
	export let artifact: IArtifact<typeof slot>;
	console.log(artifact);
	console.log(slot);
</script>

{#if artifact.set !== undefined}
	<div class="relative z-10 my-2">
		<div class="info flex justify-between flex-col h-full text-lg">
			<div class="flex">
				<div class="relative w-20 h-20 mr-2">
					<img
						class="w-full h-full absolute -z-10"
						src="{base}/artifacts/{artifact.set ?? ''}_{slot}.png"
						alt="Artifact Set Icon"
					/>
					<div class="h-full flex flex-col justify-around items-end">
						{#if artifact.type === 'sands' || artifact.type === 'goblet' || artifact.type === 'circlet'}
							<div>{StatToName[artifact.mainstat]}</div>
						{:else if artifact.type === 'flower'}
							<div>HP</div>
						{:else}
							<div>ATK</div>
						{/if}
						<div class="flex">
							<div class="text-sm p-1 m-1 rounded bg-white/[.2] w-fit">+{artifact.level}</div>
						</div>
					</div>
				</div>
				<div class="text-sm grid grid-cols-2 grid-rows-2 gap-x-4">
					{#if artifact.substatOne}
						<div>
							<div>{StatToName[artifact.substatOne]}</div>
							<div>{artifact.substatOneRoll}</div>
						</div>
					{/if}
					{#if artifact.substatTwo}
						<div>
							<div>{StatToName[artifact.substatTwo]}</div>
							<div>{artifact.substatTwoRoll}</div>
						</div>
					{/if}
					{#if artifact.substatThree}
						<div>
							<div>{StatToName[artifact.substatThree]}</div>
							<div>{artifact.substatThreeRoll}</div>
						</div>
					{/if}
					{#if artifact.substatFour}
						<div>
							<div>{StatToName[artifact.substatFour]}</div>
							<div>{artifact.substatFourRoll}</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.info {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
	}
</style>
