<script lang="ts">
  import Input from "./Input.svelte";
  import IconPerson from "./IconPerson.svelte";

  export let value: number | null;
</script>

<div>
  <label for="">Number of People</label>
  <Input bind:value><IconPerson /></Input>
</div>
