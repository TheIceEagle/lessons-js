<script lang="ts">
  import Search from "./Search.svelte";
  import DataDisplay from "./DataDisplay.svelte";

  export let user = "";

  async function fetchGithubUser(user: string) {
    try {
      const headers = new Headers();
      headers.set("Accept", "application/vnd.github+json");
      headers.set("Authorization", `Bearer ${import.meta.env.VITE_TOKEN}`);
      headers.set("X-GitHub-Api-Version", "2022-11-28");

      const response = await fetch(`https://api.github.com/users/${user}`, {
        headers,
      });

      if (!response.ok) {
        const text = await response.text();
        const err = new Error(
          `error ${response.status}:${response.statusText} with message ${text}`,
        );
        await Promise.reject(err);
      }

      const json = await response.json();
      console.log("json", json);
    } catch (err) {
      console.log(err);
    }
  }

  $: fetchGithubUser(user);
</script>

<main
  class="mx-6 mb-20 md:mx-[auto] md:mb-[14.75rem] md:max-w-[35.8125rem] lg:mb-[9.0625rem] lg:max-w-[45.625rem]"
>
  <Search />
  <DataDisplay />
</main>
