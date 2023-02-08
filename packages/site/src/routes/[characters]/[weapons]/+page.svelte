<script lang="ts">
	import { decode } from '$lib/encode/';
	import type { PageData } from './$types';
	export let data: PageData;

	let builds = decode(data.characters, data.weapons);
</script>

<div class="min-h-[55.05%]">Hello</div>
