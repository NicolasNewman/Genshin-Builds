<script lang="ts">
	import { decode } from '$lib/encode';
    import type {PageData} from './$types'

    export let data: PageData;


    let builds = decode(data.build);
    console.log(builds);
</script>

<div>{data.build}</div>