<script>
  import { onMount } from "svelte";
  import IconSun from "./IconSun.svelte";
  import IconMoon from "./IconMoon.svelte";

  let checked =
    window?.matchMedia("(prefers-color-scheme: dark)")?.matches ?? false;

  $: {
    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  onMount(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    window?.matchMedia("(prefers-color-scheme: dark)")?.addEventListener(
      "change",
      ({ matches }) => {
        checked = matches;
      },
      { signal },
    );

    return () => {
      controller?.abort();
    };
  });
</script>

<label class="cursor-pointer">
  <input type="checkbox" name="theme" class="peer/dark hidden" bind:checked />
  <i class="hidden items-center space-x-4 peer-checked/dark:flex">
    <span
      class="text-[0.8125rem] font-bold leading-normal tracking-[0.15625rem]"
      >LIGHT</span
    >
    <i class="h-5 w-5">
      <IconSun />
    </i>
  </i>
  <i class="flex items-center space-x-4 peer-checked/dark:hidden">
    <span
      class="text-[0.8125rem] font-bold leading-normal tracking-[0.15625rem]"
      >DARK</span
    >
    <i class="h-5 w-5">
      <IconMoon />
    </i>
  </i>
</label>
