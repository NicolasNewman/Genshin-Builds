<script lang="ts">
    import Paper, { Content } from '@smui/paper';
	import type { IBuild } from '../../types/build';
	import Character from './Character.svelte';
    export let build: IBuild;
</script>

<div class="paper-container m-8 w-[600px] h-[300px]">
    <div class="flex min-h-full paper smui-paper smui-paper--raised smui-paper--elevation-z1 smui-paper--rounded">
            <div class="w-1/3 min-h-full">
                <Character build={build} />
            </div>
            <div class="w-1/3 min-h-full"></div>
            <div class="w-1/3 min-h-full"></div>
    </div>
</div>

<style>
    .paper-container {
        font-family: 'Noto Serif', serif;
    }

    .paper {
        padding: 0 !important;
    }
</style>