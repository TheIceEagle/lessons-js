<script lang="ts">
  import { Route, Router } from "svelte-routing";
  import Header from "./lib/Header.svelte";
  import Main from "./lib/Main.svelte";

  export let url = "";
</script>

<Header />
<Router {url}>
  <Route path="/*user" let:params>
    <Main user={params.user} />
  </Route>
</Router>
