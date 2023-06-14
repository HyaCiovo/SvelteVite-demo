<script lang="ts">
  import { count } from "../../store";
  let toast: boolean = false;
  const reset = () => {
    count.set(0);
    toast = true;
    setTimeout(() => {
      toast = false;
    }, 1500);
  };
</script>

<h1>Test Page</h1>
<button on:click={reset} class="mt-[20px]">Reset</button>
{#if toast}
  <div class="toast toast-top toast-center">
    <div class="alert alert-info">
      <span>The Count has been reset!</span>
    </div>
  </div>
{/if}
