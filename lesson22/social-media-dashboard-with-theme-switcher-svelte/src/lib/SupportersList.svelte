<script lang="ts">
    import SupportersItem from "./SupportersItem.svelte";
    import type {Supporter} from "../types";

    export let list: Supporter[] = [];
</script>

<ul>
    {#each list as supporter (supporter.id)}
        <li>
            <SupportersItem {supporter}/>
        </li>
    {/each}
</ul>

<style>
    ul {
        display: grid;
        grid-gap: 1.5rem;
        grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    }
</style>
