<script lang="ts">
  import { onMount } from "svelte";
  import Switch from "./Switch.svelte";

  let isDark =
    window?.matchMedia("(prefers-color-scheme: dark)")?.matches ?? false;

  $: {
    if (isDark) {
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
        isDark = matches;
      },
      { signal },
    );

    return () => {
      controller?.abort();
    };
  });
</script>

<label class="switch" for="switch">
  <span class="text">Dark Mode</span>
  <span class="switch-container">
    <Switch bind:checked={isDark} rotated={true} id="switch" />
  </span>
</label>

<style>
  .switch {
    --slider-size: 75;
    --slider-color: var(--element-primary-color);
    --unchecked-color: var(--void-color);
    --checked-color: var(--active-color);

    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &:hover {
      --unchecked-color: var(--active-color);

      & > .text {
        color: var(--text-hover-secondary-color);
      }
    }
  }

  .text {
    color: var(--text-secondary-color);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
  }

  .switch-container {
    display: inline-block;
    width: 3rem;
    height: 1.5rem;
    margin-left: 1rem;
  }
</style>
