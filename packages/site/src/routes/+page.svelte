<script lang="ts">
	import Textfield from '@smui/textfield';
	import Paper, { Content } from '@smui/paper';
	import { isIGOOD, type IGOOD } from '../types/good';
	import CharacterSelect from '../components/modal/CharacterSelect.svelte';
	import BuildLink from '../components/modal/BuildLink.svelte';
	import type { CharacterSelectFieldData } from '../types/ui';
	import { encode, type EncodedBuild } from '$lib/encode/';
	import type { CharacterSelectEvent } from '../types/events';

	let characterSelectOpen = false;
	let buildLinkOpen = false;
	let good: IGOOD | undefined = undefined;
	let build: EncodedBuild = '';
	let files: FileList;
	let characters: CharacterSelectFieldData[] = [];

	const reader = new FileReader();
	reader.onload = function () {
		const json = JSON.parse(this.result?.toString() || '{}');
		if (isIGOOD(json)) {
			good = json;
			good.characters = good.characters?.filter((character) => !character.key.includes('Traveler'));
			characters =
				json.characters?.map((character) => ({ key: character.key, checked: false })).sort() ?? [];
			if (characters.length > 0) {
				characterSelectOpen = true;
				console.log(characters);
			}
		}
	};

	$: if (files && files[0]) {
		reader.readAsText(files[0]);
	}

	function onBuildEvent(event: CustomEvent<CharacterSelectEvent['build']>) {
		if (good) {
			const selectedCharacters: { [key: string]: number } = {};
			event.detail.forEach((character) => (selectedCharacters[character.key] = 1));
			good.characters = good?.characters?.filter((character) => selectedCharacters[character.key]);
			build = encode(good, 'build');
			buildLinkOpen = true;
		}
	}

	function onInvEvent(event: CustomEvent<CharacterSelectEvent['inv']>) {
		if (good) {
			build = encode(good, 'inv');
			buildLinkOpen = true;
		}
	}
</script>

<div class="relative w-screen h-screen">
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
		<Paper>
			<Content>
				<p>Please upload your GOOD file below:</p>
				<Textfield bind:files label="" type="file" value="" />
				<div class="mt-4">
					See Genshin Optimizer for a description of the <a
						href="https://frzyc.github.io/genshin-optimizer/#/doc">GOOD</a
					>
					format, and available
					<a href="https://frzyc.github.io/genshin-optimizer/#/scanner">scanners</a> for obtaining the
					file you need to upload.
				</div>
			</Content>
		</Paper>
	</div>
</div>
<CharacterSelect
	open={characterSelectOpen}
	{characters}
	on:build={onBuildEvent}
	on:inv={onInvEvent}
/>
<BuildLink open={buildLinkOpen} {build} />
