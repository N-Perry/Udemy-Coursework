<script>
  import Product from "./Product.svelte";

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

<style>
  h1 {
    color: purple;
  }
</style>
