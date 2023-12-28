<script lang="ts">
  import Outputs from "./Outputs.svelte";
  import Bill from "./Bill.svelte";
  import Tip from "./Tip.svelte";
  import NumberOfPeople from "./NumberOfPeople.svelte";

  let totalBill: number | null;
  let tipsPercentage: string | null;
  let numberOfPeople: number | null;

  $: totalPerPerson =
    ((100 + Number(tipsPercentage || 0)) * (totalBill || 0)) /
    (100 * (numberOfPeople || 1));

  $: tipPerPerson =
    (Number(tipsPercentage || 0) * (totalBill || 0)) /
    (100 * (numberOfPeople || 1));
</script>

<form>
  <Bill bind:value={totalBill} />
  <Tip bind:value={tipsPercentage} />
  <NumberOfPeople bind:value={numberOfPeople} />
  <Outputs {tipPerPerson} {totalPerPerson} />
</form>
