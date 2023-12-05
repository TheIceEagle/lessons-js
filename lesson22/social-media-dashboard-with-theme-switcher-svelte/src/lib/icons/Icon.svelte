<script lang="ts">
  import type { ComponentType } from "svelte";
  import type { Platforms } from "../../types";
  import Facebook from "./Facebook.svelte";
  import Instagram from "./Instagram.svelte";
  import Twitter from "./Twitter.svelte";
  import YouTube from "./YouTube.svelte";

  const iconsMap: Record<Platforms, ComponentType> = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    youtube: YouTube,
  };

  export let icon: Platforms;
</script>

<svelte:component this={iconsMap[icon]} />
