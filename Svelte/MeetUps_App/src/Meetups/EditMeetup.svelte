<script>
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import { createEventDispatcher } from "svelte";

  let title = "";
  let subtitle = "";
  let description = "";
  let address = "";
  let contactEmail = "";
  let imageUrl = "";

  const dispatch = createEventDispatcher();

  function submitForm() {
    dispatch("save", {
      title,
      subtitle,
      description,
      address,
      contactEmail,
      imageUrl,
    });
  }
</script>

<form on:submit|preventDefault={submitForm}>
  <TextInput
    id="title"
    label="Title"
    value={title}
    on:input={(event) => (title = event.target.value)}
  />
  <TextInput
    id="subtitle"
    label="Subtitle"
    value={subtitle}
    on:input={(event) => (subtitle = event.target.value)}
  />
  <TextInput
    id="address"
    label="Address"
    value={address}
    on:input={(event) => (address = event.target.value)}
  />
  <TextInput
    id="imageUrl"
    label="Image URL"
    value={imageUrl}
    on:input={(event) => (imageUrl = event.target.value)}
  />
  <TextInput
    type="email"
    id="email"
    label="E-Mail"
    value={contactEmail}
    on:input={(event) => (contactEmail = event.target.value)}
  />
  <TextInput
    controlType="textarea"
    id="description"
    label="Description"
    value={description}
    on:input={(event) => (description = event.target.value)}
  />
  <Button type="submit">Save</Button>
</form>

<style>
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>
