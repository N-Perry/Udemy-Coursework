<script>
  import Product from "./Product.svelte";

  function appAddToCart(event) {
    console.log(event);
  }

  function appDeleteProduct(event) {
    console.log(event);
  }
</script>

<Product
  productTitle="A Book..."
  on:add-to-cart={appAddToCart}
  on:delete={appDeleteProduct}
/>

<style>
  h1 {
    color: purple;
  }
</style>
