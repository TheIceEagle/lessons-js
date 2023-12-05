<script lang="ts">
  import Icon from "./icons/Icon.svelte";
  import { formatNumber } from "../utils";
  import type { Supporter } from "../types";

  export let supporter: Supporter;

  let isGrowing = supporter.diff >= 0;
</script>

<article class={supporter.platform}>
  <header>
    <figure>
      <Icon icon={supporter.platform} />
    </figure>
    <span>{supporter.user}</span>
  </header>
  <main>
    <data value={supporter.amount}>{formatNumber(supporter.amount)}</data>
    <span>{supporter.label}</span>
  </main>
  <footer class:up={isGrowing} class:down={!isGrowing}>
    {#if isGrowing}
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
        <path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" />
      </svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
        <path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z" />
      </svg>
    {/if}
    <data value={supporter.diff}>{supporter.diff}</data>
    <span>Today</span>
  </footer>
</article>

<style>
  article {
    --border-size: 0.25rem;

    position: relative;
    padding: 1.75rem 0 1.5rem 0;
    background-clip: padding-box; /* !importanté */
    border-radius: 0.3125rem;
    background-color: var(--bg-primary-color);
    border-top: solid var(--border-size) transparent; /* !importanté */
    cursor: pointer;

    &.facebook {
      --color: var(--facebook-color);
    }

    &.instagram {
      --color: var(--instagram-color);
    }

    &.twitter {
      --color: var(--twitter-color);
    }

    &.youtube {
      --color: var(--youtube-color);
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin-top: calc(var(--border-size) * -1); /* !importanté */
      border-radius: inherit; /* !importanté */
      background: var(--color);
    }

    &:hover {
      background-color: var(--bg-primary-hover-color);
    }
  }

  header {
    margin-bottom: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;

    & figure {
      width: 1.25rem;
      margin-right: 0.5rem;
    }

    & span {
      color: var(--text-secondary-color);
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5625rem;

    & data {
      color: var(--text-primary-color);
      text-align: center;
      font-size: 3.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 3rem;
      letter-spacing: -0.125rem;
      margin-bottom: 0.5625rem;
    }

    & span {
      color: var(--text-secondary-color);
      text-align: center;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.3125rem;
      text-transform: uppercase;
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &.up {
      color: var(--success-color);
    }

    &.down {
      color: var(--error-color);
    }

    & > *:not(last-child) {
      margin-left: 0.25rem;
    }
  }
</style>
