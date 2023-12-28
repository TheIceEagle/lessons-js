<script lang="ts">
  export let tipPerPerson = 0;
  export let totalPerPerson = 0;
</script>

<section>
  <div>
    <label for="per-person">Tip Amount <span>/ person</span></label>
    <output id="per-person">${tipPerPerson}</output>
  </div>
  <div>
    <label for="total">Total <span>/ person</span></label>
    <output id="total">${totalPerPerson}</output>
  </div>
  <button type="reset">Reset</button>
</section>
