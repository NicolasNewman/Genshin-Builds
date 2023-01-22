<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';
	import { decode } from '$lib/encode';
	import Card from '../../components/card/Card.svelte';
    import type {PageData} from './$types'

    export let data: PageData;


    let builds = decode(data.build);
    console.log(builds);
</script>

<div>
    {#each builds as build}
            <Card build={build}/>
    {/each}
</div>