<script>
  import { tick } from "svelte";
  import Product from "./Product.svelte";
  import Modal from "./Modal.svelte";

  let products = [
    {
      id: "p1",
      title: "A Book",
      price: 9.99,
      bestSeller: true,
    },
  ];

  let showModal = false;
  let closeable = false;
  let text = "this is some dummy text";

  function appAddToCart(event) {
    console.log(event);
  }

  function appDeleteProduct(event) {
    console.log(event);
  }

  function transform(event) {
    if (event.which !== 9) {
      return;
    }
    event.preventDefault();

    const selectionStart = event.target.selectionStart;
    const selectionEnd = event.target.selectionEnd;
    const value = event.target.value;
    console.log(selectionStart, selectionEnd);

    text =
      value.slice(0, selectionStart) +
      value.slice(selectionStart, selectionEnd).toUpperCase() +
      value.slice(selectionEnd);

    tick().then(() => {
      event.target.selectionStart = selectionStart;
      event.target.selectionEnd = selectionEnd;
    });
  }
</script>

{#each products as product}
  <Product
    {...product}
    on:add-to-cart={appAddToCart}
    on:delete={appDeleteProduct}
  />
{/each}

<button on:click={() => (showModal = true)}>Show Modal</button>

{#if showModal}
  <Modal
    content="<h1>Hi!</h1>"
    on:cancel={() => (showModal = false)}
    on:close={() => (showModal = false)}
    let:didAgree={closeable}
  >
    <h1 slot="header">Test!</h1>
    <p>this works!</p>
    <button
      slot="footer"
      on:click={() => (showModal = false)}
      disabled={!closeable}>Confirm</button
    >
  </Modal>
{/if}

<textarea rows="5" bind:value={text} on:keydown={transform} />

<style>
  h1 {
    color: purple;
  }
</style>
