<script lang="ts">
  import Logo from "./lib/Logo.svelte";
  import Calculator from "./lib/Calculator.svelte";
</script>

<header class="header">
  <Logo />
</header>
<main class="main">
  <Calculator />
</main>

<style>
  .header {
    color: var(--logo-color);
    padding: clamp(3.125rem, -1.7345rem + 20.7339vw, 10.1875rem) 0
      clamp(2.5rem, 0.4358rem + 8.8073vw, 5.5rem) 0;
    text-align: center;
  }

  .main {
    max-width: 57.5rem;
    margin: 0 auto auto auto;
    padding: 2rem;
    border-radius: 1.5625rem;
    background-color: var(--box-bg-color);
    box-shadow: 0 2rem 2.6875rem 0 var(--box-shadow-color);
  }
</style>
