<script lang="ts">
    import type {ComponentEvents} from "svelte";
    import svelteLogo from './assets/svelte.svg'
    import viteLogo from '/vite.svg'
    import ButtonsGroup from "./lib/ButtonsGroup.svelte";

    let color = "";

    function setColor(event: ComponentEvents<ButtonsGroup>['set']) {
        color = event.detail
    }
</script>

<main>
    <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
            <img alt="Vite Logo" class="logo" src={viteLogo}/>
        </a>
        <a href="https://svelte.dev" rel="noreferrer" target="_blank">
            <img alt="Svelte Logo" class="logo svelte" src={svelteLogo}/>
        </a>
    </div>
    <h1>Vite + Svelte</h1>

    <div class="card">
        <div class={`box${color && ` ${color}`}`}></div>
        <ButtonsGroup on:set={setColor}/>
    </div>

    <p>
        Check out <a href="https://github.com/sveltejs/kit#readme" rel="noreferrer" target="_blank">SvelteKit</a>, the
        official Svelte app framework powered by Vite!
    </p>

    <p class="read-the-docs">
        Click on the Vite and Svelte logos to learn more
    </p>
</main>

<style>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }

    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }

    .logo.svelte:hover {
        filter: drop-shadow(0 0 2em #ff3e00aa);
    }

    .read-the-docs {
        color: #888;
    }

    .box {
        width: 200px;
        height: 200px;
        border: 1px solid black;

        &.red {
            background-color: tomato;
        }

        &.green {
            background-color: yellowgreen;
        }

        &.blue {
            background-color: royalblue;
        }
    }
</style>
