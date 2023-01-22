<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from "./Toggle.svelte";

  let val = "Nick";
  let selectedOption = 1;
  let price = 0;
  let agreed;
  let favColor = "red";

  $: console.log(val);
  $: console.log(agreed);
  $: console.log(favColor);
</script>

<h1>Bindings & Forms</h1>

<CustomInput bind:val />

<Toggle bind:chosenOption={selectedOption} />

<input
  type="number"
  value={price}
  on:input={(event) => console.log(event.target.value)}
/>

<label>
  <input type="checkbox" bind:checked={agreed} />
  Agree to terms?
</label>

<h1>Favorite color?</h1>
<label>
  <input type="radio" name="color" value="red" bind:group={favColor} />
  Red
</label>
<label>
  <input type="radio" name="color" value="green" bind:group={favColor} />
  Green
</label>
<label>
  <input type="radio" name="color" value="blue" bind:group={favColor} />
  Blue
</label>
