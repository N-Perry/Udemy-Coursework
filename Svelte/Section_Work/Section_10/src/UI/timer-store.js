import { readable } from "svelte/store";

let count = 0;

export const timer = readable(0, (set) => {
  const interval = setInterval(() => {
    set(++count);
  }, 10000);

  return () => {
    clearInterval(interval);
  };
});
