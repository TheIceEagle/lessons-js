<script lang="ts">
  import type { FormEventHandler } from "svelte/elements";
  import { navigate } from "svelte-routing";
  import IconSearch from "./IconSearch.svelte";

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const { currentTarget } = event;

    const formData = new FormData(currentTarget);

    navigate(`/${formData.get("search")}`);
  };

  export let user = "";
</script>

<form
  class="mb-4 flex w-full cursor-pointer items-center gap-2 rounded-2xl bg-bg-secondary shadow-xl md:mb-6"
  on:submit={submitHandler}
>
  <div class="relative flex flex-auto items-center">
    <i
      class="inline-block h-[1.25rem] pl-4 pr-2 text-active md:h-[1.5rem] md:pl-8 md:pr-6"
    >
      <IconSearch />
    </i>

    <div class="flex-auto overflow-hidden">
      <input
        class="w-full bg-transparent text-sm text-txt-main caret-active placeholder:text-txt focus:outline-none md:text-lg"
        type="search"
        name="search"
        placeholder="Search GitHub username…"
      />
    </div>

    <p
      class="bg-bg-secondary pl-2 text-sm font-bold text-txt-error md:text-base"
    >
      No results
    </p>
  </div>

  <button
    class="my-2 mr-[0.4375rem] rounded-[0.625rem] bg-active px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-active-hover md:my-[0.59375rem] md:mr-[0.625rem] md:px-6 md:text-base"
    type="submit"
  >
    Search
  </button>
</form>
