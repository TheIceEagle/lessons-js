<script>
  import DarkModeSwitch from "./DarkModeSwitch.svelte";
</script>

<header>
  <div class="outer-container">
    <div class="inner-container">
      <hgroup class="title">
        <h1>Social Media Dashboard</h1>
        <h2>Total Followers: 23,004</h2>
      </hgroup>
      <DarkModeSwitch />
    </div>
  </div>
</header>

<style>
  header {
    padding: 2.25rem 1.5rem clamp(5.25rem, 3.4537rem + 8.8161vw, 9.625rem)
      1.5rem;
    border-radius: 0 0 1.25rem 1.25rem;
    background-color: var(--bg-secondary-color);
  }

  .outer-container {
    container: header / inline-size;
    max-width: var(--container-max-width);
    margin-left: auto;
    margin-right: auto;
  }

  .inner-container {
    display: flex;
    flex-direction: column;
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

    & h2 {
      color: var(--text-secondary-color);
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  @container header (width > 30rem) {
    .inner-container {
      flex-direction: row;
      align-items: center;
    }

    .title {
      flex: 1 1 auto;
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
  }
</style>
