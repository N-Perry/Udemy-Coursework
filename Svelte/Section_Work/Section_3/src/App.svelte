<script>
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

  function appAddToCart(event) {
    console.log(event);
  }

  function appDeleteProduct(event) {
    console.log(event);
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
  >
    <h1 slot="header">Test!</h1>
    <p>this works!</p>
    <button slot="footer" on:click={() => (showModal = false)}>Confirm</button>
  </Modal>
{/if}

<style>
  h1 {
    color: purple;
  }
</style>
