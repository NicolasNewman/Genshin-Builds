<script lang="ts">
	import Button from '@smui/button/src/Button.svelte';
</script>

<footer class="p-20 flex  flex-col sm:flex-row justify-evenly bg-black sticky left-0">
	<div class="flex items-center justify-center mb-5 sm:mb-0">
		<div class="text-5xl text-center">Genshin<br />Builds</div>
	</div>
	<div class="flex flex-col  mb-5 sm:mb-0">
		<Button variant="outlined" class="my-2">Share your build</Button>
		<Button variant="outlined" class="my-2">Save to image</Button>
		<Button variant="outlined" class="my-2">New build</Button>
	</div>
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
