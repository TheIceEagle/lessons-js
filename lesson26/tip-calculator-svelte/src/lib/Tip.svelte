<script lang="ts">
  export let value: string | null;
</script>

<div>
  <label for="">Select Tip %</label>
  <div>
    <input
      bind:group={value}
      type="radio"
      name="percent"
      id="percent-5"
      value="5"
    />
    <label for="percent-5">5%</label>
    <input
      bind:group={value}
      type="radio"
      name="percent"
      id="percent-10"
      value="10"
    />
    <label for="percent-10">10%</label>
    <input
      bind:group={value}
      type="radio"
      name="percent"
      id="percent-15"
      value="15"
    />
    <label for="percent-15">15%</label>
    <input
      bind:group={value}
      type="radio"
      name="percent"
      id="percent-25"
      value="25"
    />
    <label for="percent-25">25%</label>
    <input
      bind:group={value}
      type="radio"
      name="percent"
      id="percent-50"
      value="50"
    />
    <label for="percent-50">50%</label>
    <input type="number" name="customPercent" placeholder="Custom" />
  </div>
</div>
