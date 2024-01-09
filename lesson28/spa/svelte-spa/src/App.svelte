<script lang="ts">
    import Router, {link} from 'svelte-spa-router'
    import Welcome from './lib/Welcome.svelte';
    import Home from './lib/Home.svelte';
    import About from './lib/About.svelte';

    const routes = {
        '/': Welcome,
        '/home': Home,
        '/about': About,
    }
</script>

<header>
    <nav>
        <a href="/" use:link>Welcome</a>
        <a href="/home" use:link>Home</a>
        <a href="/about" use:link>About</a>
    </nav>
</header>

<main>
    <Router {routes}/>
</main>

