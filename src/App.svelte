<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  // import viteLogo from "/vite.svg";
  import Router, { link } from "svelte-spa-router";
  import { routes } from "./router.ts";
</script>

<main class="flex justify-center flex-col items-center">
  <a href="https://www.svelte.cn/docs" target="_blank" rel="noreferrer">
    <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  </a>
  <div class="flex w-[100%] justify-center">
    <a href="/" use:link>Home</a> /
    <a href="/about" use:link>About</a> /
    <a href="/test" use:link>Test</a>
  </div>
  <h1>Svelte Demo</h1>

  <div class="card">
    <Router {routes} />
  </div>
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
</style>
