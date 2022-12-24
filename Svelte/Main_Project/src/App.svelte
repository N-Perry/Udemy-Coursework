<script>
  let name = "Nick";
  let age = 24;

  $: uppercaseName = name.toUpperCase();

  function incrementAge() {
    age += 1;
  }

  function changeName() {
    name = "Nicholas";
  }
</script>

<h1>Hello {name}, my age is {age}</h1>
<button on:click={incrementAge}>Change Age</button>
<button on:click={changeName}>Change Name</button>

<style>
  h1 {
    color: purple;
  }
</style>
