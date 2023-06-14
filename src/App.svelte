<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  // import viteLogo from "/vite.svg";
  import Router, { link } from "svelte-spa-router";
  import { routes } from "./router.ts";
</script>

<main class="flex justify-center flex-col items-center">
  <div class="grid grid-flow-col gap-[20px] top-[20px]">
    <a href="https://www.svelte.cn/docs" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
    <a href="https://daisyui.com/" target="_blank" rel="noreferrer">
      <span class="lowercase text-primary daisy">daisy</span>
      <span class="uppercase text-base-content daisy">UI</span>
    </a>
    <a href="https://www.tailwindcss.cn/" target="_blank">
      <span class="daisy text-base-content lowercase">tailwindcss</span>
    </a>
  </div>

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
    /* font-size: 28px; */
    height: 3em;
  }
  .daisy {
    font-size: 28px;
  }
</style>
