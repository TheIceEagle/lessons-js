<script lang="ts">
  const FEET_PER_METER = 3.28084;
  const LBS_PER_KG = 2.204623;

  let type = "metric";
  let height = 0;
  let weight = 0;

  function updateType(type: string) {
    if (type === "imperial") {
      height = height * FEET_PER_METER;
      weight = weight * LBS_PER_KG;
    } else {
      height = height / FEET_PER_METER;
      weight = weight / LBS_PER_KG;
    }
  }

  $: updateType(type)

  $: bmi = (() => {
    if (type === "imperial") {
      return ((weight) / (height * height)) * 703
    } else {
      return (weight) / (height * height)
    }
  })()
</script>

<main>
  <form class="form">
    <label>
      <input type="radio" name="type" value="metric" bind:group={type} />
      <span>Metric</span>
    </label>
    <label>
      <input type="radio" name="type" value="imperial" bind:group={type} />
      <span>Imperial</span>
    </label>
    <label>
      <span>Height</span>
      <input type="number" name="height" bind:value={height}/>
      {#if type === 'imperial'}
        <span>ft</span>
      {:else}
        <span>m</span>
      {/if}
    </label>
    <label>
      <span>Weight</span>
      <input type="number" name="weight" bind:value={weight}/>
      {#if type === 'imperial'}
        <span>lbs</span>
      {:else}
        <span>kg</span>
      {/if}
    </label>
    <label>
      <output>{bmi}</output>
    </label>
  </form>
</main>

<style>
  .form {
    display: flex;
    flex-direction: column;
  }
</style>
