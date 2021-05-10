<script lang="ts">
  import { alertList } from "../stores";
  export let key;
</script>

<div
  class="flex w-full px-4 py-2 border-4 border-black bg-white items-center text-lg"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5 hover:bg-green-200 cursor-pointer"
    viewBox="0 0 20 20"
    on:click={() => {
      alertList.remove(key);
    }}
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clip-rule="evenodd"
    />
  </svg>
  <div class="pb-0.5 pl-3">
    <slot />
  </div>
</div>
