<script lang="ts">
  import { link } from "svelte-routing";
  import DarkSwitch from "./DarkSwitch.svelte";
</script>

<header
  class="hover:text-txt-hover mx-6 mb-9 mt-8 flex items-center justify-between md:mx-[auto] md:mt-[8.75rem] md:max-w-[35.8125rem] lg:mt-[9rem] lg:max-w-[45.625rem]"
>
  <figure class="text-txt-main text-[1.625rem] font-bold leading-normal">
    <a href="/" use:link>devfinder</a>
  </figure>
  <DarkSwitch />
</header>
