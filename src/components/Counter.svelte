<script lang="ts">
  import { count } from "../store";

  let countValue: number;

  count.subscribe((v) => {
    countValue = v;
  });

  const increment = () => {
    count.update((v) => v + 1);
  };
  const decrement = () => {
    count.update((v) => v - 1);
  };
</script>

<div class="flex items-center mt-[10px] w-[300px] justify-between btn-group">
  <button on:click={decrement} class="btn btn-primary w-[60px]"> - </button>
  <div class="text-[30px] w-[70px]">{countValue}</div>
  <button on:click={increment} class="btn btn-primary w-[60px]"> + </button>
</div>
