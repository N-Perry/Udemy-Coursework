<script>
  export let userInput;

  $: isImportant = userInput.includes("!");
</script>

<h1 class:important={isImportant}>{userInput}</h1>

<style>
  .important {
    color: red;
  }
</style>
