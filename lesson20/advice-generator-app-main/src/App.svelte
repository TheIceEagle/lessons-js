<script lang="ts">
  import { onMount } from "svelte";
  import { fetchAdvice } from "./services";

  let advice = "";

  async function newAdvice() {
    try {
      advice = await fetchAdvice();
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  }

  onMount(async function () {
    await newAdvice();
  });
</script>

<article>
  <h3>ADVICE #117</h3>
  <p>
    “{advice}”
  </p>
  <div class="break">
    <hr />
    <svg
      fill="none"
      height="16"
      viewBox="0 0 20 16"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="currentColor" height="16" rx="3" width="6" />
      <rect fill="currentColor" height="16" rx="3" width="6" x="14" />
    </svg>
    <hr />
  </div>
  <button type="button" on:click={newAdvice}>
    <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
        fill="currentColor"
      />
    </svg>
  </button>
</article>

<style>
  article {
    position: relative;
    padding: clamp(2.5rem, 2.3261rem + 0.8696vw, 3rem)
      clamp(1.5rem, 0.9783rem + 2.6087vw, 3rem)
      clamp(4.5rem, 4.3261rem + 0.8696vw, 5rem)
      clamp(1.5rem, 0.9783rem + 2.6087vw, 3rem);
    max-width: 33.75rem;
    background-color: var(--bg-primary-color);
    border-radius: clamp(0.625rem, 0.5163rem + 0.5435vw, 0.9375rem);
    box-shadow: 1.875rem 3.125rem 5rem 0 hsla(0, 0%, 0%, 0.1);
  }

  h3 {
    margin-bottom: 1.5rem;
    color: var(--accent-color);
    text-align: center;
    font-size: clamp(0.6875rem, 0.644rem + 0.2174vw, 0.8125rem);
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: clamp(0.2188rem, 0.2079rem + 0.0543vw, 0.25rem);
  }

  p {
    margin-bottom: clamp(2rem, 1.6522rem + 1.7391vw, 3rem);
    text-align: center;
    font-size: clamp(1.5rem, 1.413rem + 0.4348vw, 1.75rem);
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: clamp(-0.0187rem, -0.0154rem + -0.0043vw, -0.0162rem);
  }

  .break {
    display: flex;

    & hr {
      flex: 1 1 auto;
      color: var(--line-color);
    }

    & svg {
      margin: 0 1rem;
    }
  }

  button {
    position: absolute;
    top: 100%;
    right: 50%;
    transform: translateY(-50%) translateX(50%);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: var(--accent-color);

    &:hover,
    &:focus {
      box-shadow: 0 0 20px 2px var(--accent-color);
    }

    & svg {
      color: var(--figure-color);
    }
  }
</style>
