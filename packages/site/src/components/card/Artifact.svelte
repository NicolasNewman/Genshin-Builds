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
				<div class="relative min-w-[5rem] h-20 mr-2">
					<img
						class="w-full h-full absolute -z-10"
						src="{base}/artifacts/{artifact.set ?? ''}_{slot}.png"
						alt="Artifact Set Icon"
					/>
					<div class="h-full flex flex-col justify-around items-end">
						{#if artifact.type === 'sands' || artifact.type === 'goblet' || artifact.type === 'circlet'}
							<i class="icon-{artifact.mainstat} lg" />
						{:else if artifact.type === 'flower'}
							<i class="icon-hp lg" />
						{:else}
							<i class="icon-atk lg" />
						{/if}

						<div class="flex">
							<div class="text-sm p-1 m-1 rounded bg-white/[.2] w-fit">+{artifact.level}</div>
						</div>
					</div>
				</div>
				<div class="text-sm flex flex-col w-full">
					{#if artifact.substatOne}
						<div class="flex justify-between">
							<i class="icon-{artifact.substatOne}" />
							<span>{artifact.substatOneRoll}{artifact.substatOne?.includes('_') ? '%' : ''}</span>
						</div>
					{/if}
					{#if artifact.substatTwo}
						<div class="flex justify-between">
							<i class="icon-{artifact.substatTwo}" />

							<span>{artifact.substatTwoRoll}{artifact.substatTwo?.includes('_') ? '%' : ''}</span>
						</div>
					{/if}
					{#if artifact.substatThree}
						<div class="flex justify-between">
							<i class="icon-{artifact.substatThree}" />
							<span
								>{artifact.substatThreeRoll}{artifact.substatThree?.includes('_') ? '%' : ''}</span
							>
						</div>
					{/if}
					{#if artifact.substatFour}
						<div class="flex justify-between">
							<i class="icon-{artifact.substatFour}" />

							<span>{artifact.substatFourRoll}{artifact.substatFour?.includes('_') ? '%' : ''}</span
							>
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
	[class^='icon-'] {
		font-size: 16px;
		display: inline-block;
	}

	[class^='icon-'].lg {
		font-size: 24px;
	}
</style>
