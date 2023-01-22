<script lang="ts">
	import Checkbox from '@smui/checkbox';
	import FormField from '@smui/form-field';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Button, { Label } from '@smui/button';

	import { createEventDispatcher } from 'svelte';
	import { truncateName } from 'shared';
	import type { CharacterSelectFieldData } from '../../types/ui';

	export let open = false;
	export let characters: CharacterSelectFieldData[] = [];

	const dispatch = createEventDispatcher<{ modalConfirm: CharacterSelectFieldData[] }>();
	function confirm() {
		dispatch(
			'modalConfirm',
			characters.filter((character) => character.checked)
		);
	}
</script>

<Dialog bind:open aria-labelledby="simple-title" aria-describedby="simple-content">
	<Title id="simple-title">Dialog Title</Title>
	<Content id="simple-content">
		<LayoutGrid>
			{#each characters as character}
				<Cell>
					<FormField align="start">
						<Checkbox bind:checked={character.checked} />
						<span slot="label">{truncateName(character.key)}</span>
					</FormField>
				</Cell>
			{/each}
		</LayoutGrid>
	</Content>
	<Actions>
		<Button>
			<Label>Cancel</Label>
		</Button>
		<Button on:click={confirm}>
			<Label>Confirm</Label>
		</Button>
	</Actions>
</Dialog>
