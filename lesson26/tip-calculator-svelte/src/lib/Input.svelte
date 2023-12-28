<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";

  interface $$Props extends Omit<HTMLInputAttributes, "class" | "value"> {
    value: number;
  }
  export let value: number;
</script>

<div class="container">
  <figure class="icon"><slot /></figure>
  <input type="number" {...$$restProps} bind:value class="input" />
</div>

<style>
  .container {
    display: flex;
    border-radius: 0.3125rem;
  }
</style>
