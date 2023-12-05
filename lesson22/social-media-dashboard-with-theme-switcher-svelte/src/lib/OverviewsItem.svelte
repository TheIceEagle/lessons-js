<script lang="ts">
  import Icon from "./icons/Icon.svelte";
  import { formatNumber } from "../utils";
  import type { Overview } from "../types";

  export let overview: Overview;

  let isGrowing = overview.diff >= 0;
</script>

<article>
  <section class="info">
    <span>{overview.name}</span>
    <figure>
      <Icon icon={overview.platform} />
    </figure>
  </section>
  <section class="data">
    <data class="amount" value={overview.amount}>
      {formatNumber(overview.amount)}
    </data>
    <div class="diff" class:up={isGrowing} class:down={!isGrowing}>
      {#if isGrowing}
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
          <path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" />
        </svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
          <path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z" />
        </svg>
      {/if}
      <data value={overview.diff}>{overview.diff}</data>
    </div>
  </section>
</article>

<style>
  article {
    padding: 1.625rem 2rem 1.5rem 1.5rem;
    background-color: var(--bg-primary-color);
    border-radius: 0.3125rem;
    cursor: pointer;

    &:hover {
      background-color: var(--bg-primary-hover-color);
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    & span {
      color: var(--text-secondary-color);
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    & figure {
      width: 1.25rem;
      margin-right: 0.5rem;
    }
  }

  .data {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .amount {
      color: var(--text-primary-color);
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    & .diff {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-primary-color);
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
  }
</style>
