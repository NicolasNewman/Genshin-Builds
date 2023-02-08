<script lang="ts">
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Button, { Label } from '@smui/button';
	import { base } from '$app/paths';
	import { isBuildEncode, type EncodedBuild } from '$lib/encode/';

	export let open = false;
	export let build: EncodedBuild;
</script>

<Dialog bind:open aria-labelledby="simple-title" aria-describedby="simple-content">
	<Title id="simple-title">Dialog Title</Title>
	<Content id="simple-content">
		{#if isBuildEncode(build)}
			<p>{build}</p>
		{:else}
			<p>{build.characters ?? ''}/{build.weapons ?? ''}</p>
		{/if}
	</Content>
	<Actions>
		<Button>
			<Label>Close</Label>
		</Button>
		<Button>
			<Label>Copy to Clipboard</Label>
		</Button>
		<Button
			on:click={() => {
				if (isBuildEncode(build)) {
					window.location.href = `${base}/${build}`;
				} else {
					window.location.href = `${base}/${build.characters ?? ''}/${build.weapons ?? ''}`;
				}
			}}
		>
			<Label>Take me there</Label>
		</Button>
	</Actions>
</Dialog>
