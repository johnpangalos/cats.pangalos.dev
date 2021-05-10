import { writable } from "svelte/store";
import type { Cat } from "./types";
export const alerts = {
  40: "20: Meeeeoooooow!",
  60: "40: Empty that litter box and keep going.",
  80: "60: Here's a little bit of cat nip for you, GOOD CAT!",
  100: "80: Pounce! Got cha!",
  120: "100: Cat-grats on making it to 100!",
  220: "200: Infitity is still way off but you got this.",
  320: "300: Use all your nine lives looking at more cats!",
  420: "400: Just a few more forevers and you've reached the bottom.",
  520: "500: Don't give up, all these cats love you!",
  1020: "1000: Don't you think you've had enought cats? No you haven't.",
};

function createAlerts() {
  const { subscribe, set, update } = writable<Record<number, string>>({});

  return {
    subscribe,
    add: (key) => {
      if (alerts[key] === undefined) return;
      update((curr) => {
        return {
          ...curr,
          [key]: alerts[key],
        };
      });
    },
    remove: (key: number) =>
      update((curr) => {
        const { [key]: _, ...rest } = curr;
        return rest;
      }),
  };
}

export const alertList = createAlerts();

export const cats = writable<Cat[]>([]);
