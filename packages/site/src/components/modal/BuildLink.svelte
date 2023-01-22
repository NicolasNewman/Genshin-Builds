<script lang="ts">
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Button, { Label } from '@smui/button';
	import { base } from '$app/paths';

	export let open = false;
	export let build: string;
</script>

<Dialog bind:open aria-labelledby="simple-title" aria-describedby="simple-content">
	<Title id="simple-title">Dialog Title</Title>
	<Content id="simple-content">
		<p>{build}</p>
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
				window.location.href = `${base}/${build}`;
			}}
		>
			<Label>Take me there</Label>
		</Button>
	</Actions>
</Dialog>
