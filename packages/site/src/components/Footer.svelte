<script lang="ts">
	import Button from '@smui/button/src/Button.svelte';
	import { goto } from '$app/navigation';
	import Dom2Image from 'dom-to-image';

	export let path: string;

	const home = () => {
		goto('/');
	};

	const share = () => {
		navigator.clipboard.writeText(path);
	};

	const save = async () => {
		const element = document.querySelector('#card-container');
		if (element) {
			const url = await Dom2Image.toJpeg(element, {});
			const link = document.createElement('a');
			link.download = 'my-image-name.jpeg';
			link.href = url;
			link.click();
		}
	};
</script>

<footer class="p-20 flex  flex-col sm:flex-row justify-evenly bg-black sticky left-0">
	<div class="flex items-center justify-center mb-5 sm:mb-0">
		<div class="text-5xl text-center">Genshin<br />Builds</div>
	</div>
	{#if path !== '/'}
		<div class="flex flex-col  mb-5 sm:mb-0">
			<Button on:click={share} variant="outlined" class="my-2">Copy share link</Button>
			<Button on:click={save} variant="outlined" class="my-2">Save to image</Button>
			<Button on:click={home} variant="outlined" class="my-2">New build</Button>
		</div>
	{/if}
	<div class="flex flex-col justify-center">
		<div class="text-center">Created by: Nicolas Newman</div>
		<div class="flex justify-around mt-3">
			<a href="https://github.com/NicolasNewman">
				<i class="text-white fa-brands fa-2x fa-github" />
			</a>
			<a href="https://www.linkedin.com/in/nicolas-newman/"
				><i class="text-white fa-brands fa-2x fa-linkedin" />
			</a>
			<a href="https://twitter.com/NicolasNewman_">
				<i class="text-white fa-brands fa-2x fa-twitter" />
			</a>
		</div>
	</div>
</footer>
