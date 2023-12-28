<script lang="ts">
  import Input from "./Input.svelte";
  import IconDollar from "./IconDollar.svelte";

  export let value: number | null;
</script>

<section>
  <label for="">Bill</label>
  <Input bind:value><IconDollar /></Input>
</section>
