<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	console.log("data", data)
</script>

<h1>This is foo page</h1>

<ul>
	{#each data.results as pokemon}
		<li>{pokemon.name}</li>
	{/each}
</ul>
