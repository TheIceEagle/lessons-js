<script lang="ts">
  import DarkModeSwitch from "./lib/DarkModeSwitch.svelte";
</script>

<header>
  <div class="header-container">
    <section class="title">
      <h1>Social Media Dashboard</h1>
      <h3>Total Followers: 23,004</h3>
    </section>
    <section class="dark-switch">
      <DarkModeSwitch />
    </section>
  </div>
</header>

<main></main>

<style>
  header {
    padding: 2.25rem 1.5rem 5.25rem 1.5rem;
    border-radius: 0 0 1.25rem 1.25rem;
    background-color: var(--bg-secondary-color);
  }

  .header-container {
    container: header / inline-size;
    max-width: var(--container-max-width);
    margin-left: auto;
    margin-right: auto;
  }

  .title {
    margin-bottom: 1rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-primary-color);

    & h1 {
      margin-bottom: 0.25rem;
      color: var(--text-primary-color);
      font-size: clamp(1.5rem, 1.3974rem + 0.5038cqw, 1.75rem);
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    & h3 {
      color: var(--text-secondary-color);
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
</style>
