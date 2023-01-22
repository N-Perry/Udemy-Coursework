<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from "./Toggle.svelte";

  let val = "Nick";
  let selectedOption = 1;
  let price = 0;
  let agreed;
  let favColor = ["red"];
  let singleFavColor = "red";

  $: console.log(val);
  $: console.log(agreed);
  $: console.log(favColor);
  $: console.log(singleFavColor);
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
  <input type="checkbox" name="color" value="red" bind:group={favColor} />
  Red
</label>
<label>
  <input type="checkbox" name="color" value="green" bind:group={favColor} />
  Green
</label>
<label>
  <input type="checkbox" name="color" value="blue" bind:group={favColor} />
  Blue
</label>

<select bind:value={singleFavColor}>
  <option value="green">Green</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
</select>
