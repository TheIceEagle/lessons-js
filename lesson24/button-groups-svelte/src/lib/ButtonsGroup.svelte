<script lang="ts">
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher<{
        set: "red" | "green" | "blue";
    }>();
</script>

<button on:click={() => dispatch("set", "red")}>red</button>
<button on:click={() => dispatch("set", "green")}>green</button>
<button on:click={() => dispatch("set", "blue")}>blue</button>
