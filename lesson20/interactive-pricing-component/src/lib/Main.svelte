<script lang="ts">
  import Range from "./Range.svelte";
</script>

<main>
  <form action="">
    <label for="fuel">Fuel level:</label>
    <Range name="" />
    <p>
      <span>$<output>16</output></span>
      <span>/<output>month</output></span>
    </p>
    <div>
      <label>
        <span>Monthly Billing</span>
        <input type="checkbox" name="" />
        <span>Yearly Billing</span>
      </label>
    </div>
  </form>
</main>

<style>
  main {
    border-radius: 0.5rem;
    box-shadow: 0 20px 30px -5px var(--main-shadow-color);
  }
</style>
