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
							<div
								class="stat-icon lg"
								style="mask-image: url({base}/icons/{artifact.mainstat}.svg)"
							/>
						{:else if artifact.type === 'flower'}
							<div class="stat-icon lg" style="mask-image: url({base}/icons/hp.svg)" />
						{:else}
							<div class="stat-icon lg" style="mask-image: url({base}/icons/atk.svg)" />
						{/if}

						<div class="flex">
							<div class="text-sm p-1 m-1 rounded bg-white/[.2] w-fit">+{artifact.level}</div>
						</div>
					</div>
				</div>
				<div class="text-sm flex flex-col w-full">
					{#if artifact.substatOne}
						<div class="flex justify-between">
							<div
								class="stat-icon"
								style="mask-image: url({base}/icons/{artifact.substatOne}.svg)"
							/>
							<span>{artifact.substatOneRoll}{artifact.substatOne?.includes('_') ? '%' : ''}</span>
						</div>
					{/if}
					{#if artifact.substatTwo}
						<div class="flex justify-between">
							<div
								class="stat-icon"
								style="mask-image: url({base}/icons/{artifact.substatTwo}.svg)"
							/>
							<span>{artifact.substatTwoRoll}{artifact.substatTwo?.includes('_') ? '%' : ''}</span>
						</div>
					{/if}
					{#if artifact.substatThree}
						<div class="flex justify-between">
							<div
								class="stat-icon"
								style="mask-image: url({base}/icons/{artifact.substatThree}.svg)"
							/>
							<span
								>{artifact.substatThreeRoll}{artifact.substatThree?.includes('_') ? '%' : ''}</span
							>
						</div>
					{/if}
					{#if artifact.substatFour}
						<div class="flex justify-between">
							<div
								class="stat-icon"
								style="mask-image: url({base}/icons/{artifact.substatFour}.svg)"
							/>
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
	.stat-icon {
		width: 16px;
		height: 16px;
		background-color: white;
		mask-size: contain;
		mask-position: center;
		mask-repeat: no-repeat;
		display: inline-block;
	}

	.stat-icon.lg {
		width: 24px;
		height: 24px;
	}
</style>
