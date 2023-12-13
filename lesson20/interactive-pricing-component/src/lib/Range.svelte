<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";

  export let props: Omit<HTMLInputAttributes, "contenteditable"> = {};
</script>

<div class="container">
  <input {...props} type="range" value="25" min="0" max="100" step="1" />
</div>

<style>
  /*input[type="range"] {*/
  /*  margin: 0;*/
  /*  appearance: none;*/
  /*  background: transparent;*/
  /*  cursor: pointer;*/
  /*}*/

  .container {
    width: 66.6666%;
    margin-left: auto;
    margin-right: auto;
  }

  input[type="range"] {
    --hue: 223;
    --white: hsl(0, 0%, 100%);
    --lt-gray: hsl(var(--hue), 10%, 95%);
    --primary0: hsl(var(--hue), 90%, 95%);
    --primary1: hsl(var(--hue), 90%, 90%);
    --primary3: hsl(var(--hue), 90%, 50%);
    --primary4: hsl(var(--hue), 90%, 30%);
    --primary5: hsl(var(--hue), 90%, 10%);
    --trans-dur: 0.3s;
    --percent: 50%;
    background-color: var(--void-color);
    background-image: linear-gradient(var(--accent-color), var(--accent-color));
    background-size: var(--percent) 100%;
    background-repeat: no-repeat;
    border-radius: 0.25em;
    display: block;
    margin: 0.5em 0;
    width: calc(100%);
    height: 0.5em;
    transition: background-color var(--trans-dur);
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    &:focus {
      outline: transparent;
    }

    /* WebKit */
    &::-webkit-slider-thumb {
      background-color: var(--white);
      border: 0;
      border-radius: 50%;
      box-shadow: 0 0.125em 0.5em hsl(0, 0%, 0%, 0.3);
      width: 1.5em;
      height: 1.5em;
      transition: background-color 0.15s linear;
      -webkit-appearance: none;
      appearance: none;
    }
    &:focus::-webkit-slider-thumb,
    &::-webkit-slider-thumb:hover {
      background-color: var(--lt-gray);
    }

    /* Firefox */
    &::-moz-range-thumb {
      background-color: var(--white);
      border: 0;
      border-radius: 50%;
      box-shadow: 0 0.125em 0.5em hsl(0, 0%, 0%, 0.3);
      width: 1.5em;
      height: 1.5em;
      transition: background-color 0.15s linear;
    }
    &:focus::-moz-range-thumb,
    &::-moz-range-thumb:hover {
      background-color: var(--lt-gray);
    }

    @supports selector(:focus-visible) {
      /* WebKit */
      &:focus::-webkit-slider-thumb {
        background-color: var(--white);
      }
      &:focus-visible::-webkit-slider-thumb,
      &::-webkit-slider-thumb:hover {
        background-color: var(--lt-gray);
      }

      /* Firefox */
      &:focus::-moz-range-thumb {
        background-color: var(--white);
      }
      &:focus-visible::-moz-range-thumb,
      &::-moz-range-thumb:hover {
        background-color: var(--lt-gray);
      }
    }
  }
</style>
