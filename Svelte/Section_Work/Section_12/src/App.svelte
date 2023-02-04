<script>
  import { writable } from "svelte/store";
  import { tweened } from "svelte/motion";
  import { cubicIn } from "svelte/easing";
  import { fade, fly, slide, scale } from "svelte/transition";

  import Spring from "./Spring.svelte";

  let boxInput = "";
  let showToggle = false;

  const progress = tweened(0, {
    delay: 0,
    duration: 700,
    easing: cubicIn,
  });

  setTimeout(() => {
    progress.set(0.5);
  }, 1500);

  let boxes = [];

  function addBox() {
    boxes = [...boxes, boxInput];
  }

  function discard(value) {
    boxes = boxes.filter((el) => el !== value);
  }
</script>

<!-- <progress value={$progress} /> -->
<!-- <Spring /> -->

<button on:click={() => (showToggle = !showToggle)}>Toggle</button>

{#if showToggle}
  <p in:fade out:fly={{ x: 300, y: 100 }}>Can you see me?</p>
{/if}

<hr />

<input type="text" bind:value={boxInput} />
<button on:click={addBox}>Add</button>
{#if showToggle}
  {#each boxes as box (box)}
    <div
      transition:fly|local={{ easing: cubicIn, x: 300, y: 0 }}
      on:click={discard.bind(this, box)}
      on:introstart={() => console.log("Adding element starts")}
      on:introend={() => console.log("Adding element ends")}
      on:outrostart={() => console.log("Removing element starts")}
      on:outroend={() => console.log("Removing element starts")}
    >
      {box}
    </div>
  {/each}
{/if}

<style>
  div {
    width: 10rem;
    height: 10rem;
    background: #ccc;
    margin: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  }
</style>
