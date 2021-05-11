<script lang="ts">
  import { onMount, beforeUpdate } from "svelte";
  import type { Cat } from "./types";
  import Image from "./lib/Image.svelte";
  import Alert from "./lib/Alert.svelte";
  import Intro from "./lib/Intro.svelte";
  import { alerts, alertList, cats } from "./stores";
  const CAT_API = "https://api.thecatapi.com/v1/images/search";
  const API_KEY = import.meta.env.API_KEY as string;
  let loading = true;

  let page = 0;
  let options = {
    root: document.getElementById("scrollArea"),
    rootMargin: "0px",
    threshold: 0.5,
  };
  let observer = new IntersectionObserver(handleIntersection, options);

  async function getNext() {
    const blob = await fetch(`${CAT_API}?limit=20&size=small&page=${page}`, {
      headers: {
        "x-api-key": API_KEY,
      },
    });
    const data = (await blob.json()) as Cat[];
    cats.update((curr) => [...curr, ...data]);
    page = page + 1;
    loading = false;
  }

  function handleIntersection(event: IntersectionObserverEntry[]): void {
    if (loading === true) return;
    const [entries] = event;
    loading = true;
    if (!entries.isIntersecting) {
      loading = false;
      return;
    }
    getNext().catch((error) => {
      loading = false;
      console.error(error);
    });
  }

  onMount(async () => {
    try {
      await getNext();
      observer.observe(document.querySelector("#end"));
    } catch (error) {
      loading = false;
      console.error(error);
    }
  });
  cats.subscribe(() => {
    alertList.add($cats.length);
  });
</script>

<div class="relative h-screen w-full">
  <div
    class="w-full flex flex-col bg-red-700 items-center pt-6 uppercase font-sans min-h-full"
  >
    <h1 class="text-xl md:text-3xl font-display py-10 text-white">
      cats.pangalos.dev
    </h1>
    <Intro />
    <div class="pt-6 space-y-4">
      {#each $cats as cat}
        <Image {cat} />
      {/each}

      <div id="end" />
      {#if loading}
        <div class="pt-10">
          <div class="animate-spin text-white text-3xl font-bold">
            Loading...
          </div>
        </div>
      {/if}
    </div>
  </div>
  <div class="fixed bottom-0 w-full pb-2">
    <div class="mx-auto max-w-xl w-full space-y-2">
      {#each Object.entries($alertList) as [key, alrt]}
        <Alert {key}>{alrt}</Alert>
      {/each}
    </div>
  </div>
</div>
