<script lang="ts">
	import { getAcensionLevel, seperateCamelCase } from 'shared';
	import type { IBuild } from '../../types/build';
	export let build: IBuild;

	const weapon = build.weapon;
</script>

<div class="relative h-full z-10">
	<div class="info flex justify-between flex-col h-full text-lg">
		<div class="flex items-center mt-4">
			<img class="w-16 h-16" src="/weapons/{weapon?.weapon}.png" alt="Weapon Icon" />
			<div class="flex flex-col items-center">
				<div class="text-center">{seperateCamelCase(weapon?.weapon ?? '')}</div>
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
	</div>
</div>
