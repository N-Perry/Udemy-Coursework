<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "Nick";
  let age = 24;

  let description;
  let imageUrl;
  let jobTitle;

  $: uppercaseName = name.toUpperCase();

  function incrementAge() {
    age += 1;
  }

  function changeName() {
    name = "Nicholas";
  }

  function nameInput(event) {
    name = event.target.value;
  }
</script>

<h1>Hello {uppercaseName}, my age is {age}</h1>
<button on:click={incrementAge}>Change Age</button>
<!-- <input type="text" value={name} on:input={nameInput} /> -->
<input type="text" bind:value={name} />
<input type="text" bind:value={jobTitle} />
<textarea
  name="descriptionInput"
  id="descriptionInput"
  cols="30"
  rows="5"
  bind:value={description}
/>
<input type="text" bind:value={imageUrl} />
<ContactCard userName={name} {description} {imageUrl} {jobTitle} />

<style>
  h1 {
    color: purple;
  }
</style>
