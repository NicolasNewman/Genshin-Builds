<script lang="ts">
	import Checkbox from '@smui/checkbox';
	import { Label } from '@smui/common';
	import SegmentedButton, { Segment } from '@smui/segmented-button';
	import FormField from '@smui/form-field';
	import Button from '@smui/button';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';

	import { createEventDispatcher } from 'svelte';
	import { truncateName } from 'shared';
	import type { CharacterSelectFieldData } from '../../types/ui';
	import type { CharacterSelectEvent } from '../../types/events';

	export let open = false;
	export let characters: CharacterSelectFieldData[] = [];
	characters = characters.sort((a, b) => a.key.localeCompare(b.key));

	const dispatch = createEventDispatcher<CharacterSelectEvent>();

	let selected: 'Builds' | 'Inventory' | '' = '';

	$: title = selected === '' ? 'Select Mode' : 'Select Characters';
	$: if (selected === 'Inventory') {
		dispatch('inv');
	}

	function build() {
		dispatch(
			'build',
			characters.filter((character) => character.checked)
		);
	}
</script>

<Dialog bind:open aria-labelledby="simple-title" aria-describedby="simple-content">
	<Title id="simple-title">{title}</Title>
	<Content id="simple-content">
		{#if selected === ''}
			<SegmentedButton segments={['Builds', 'Inventory']} let:segment singleSelect bind:selected>
				<Segment {segment}>
					<Label>{segment}</Label>
				</Segment>
			</SegmentedButton>
		{/if}
		{#if selected === 'Builds'}
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
		{/if}
	</Content>
	<Actions>
		<Button>
			<Label>Cancel</Label>
		</Button>
		{#if selected === 'Builds'}
			<Button on:click={build}>
				<Label>Confirm</Label>
			</Button>
		{/if}
	</Actions>
</Dialog>
