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

<Modal content="<h1>Hi!</h1>">
  <h1 slot="header">Test!</h1>
  <p>this works!</p>
  <button slot="footer">Confirm</button>
</Modal>

<style>
  h1 {
    color: purple;
  }
</style>
