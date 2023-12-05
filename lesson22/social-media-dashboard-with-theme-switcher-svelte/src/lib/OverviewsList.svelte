<script lang="ts">
  import SupportersItem from "./SupportersItem.svelte";
  import type { Overview, Supporter } from "../types";
  import OverviewsItem from "./OverviewsItem.svelte";

  export let overviews: Overview[] = [];
</script>

<ul>
  {#each overviews as overview (overview.id)}
    <li><OverviewsItem {overview} /></li>
  {/each}
</ul>

<style>
  ul {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  }
</style>
