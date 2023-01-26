<script>
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";
  import { createEventDispatcher } from "svelte";
  import { isEmpty, isValidEmail } from "../helpers/validation";
  import meetups from "./meetups-store";

  let title = "";
  let subtitle = "";
  let description = "";
  let address = "";
  let contactEmail = "";
  let imageUrl = "";

  const dispatch = createEventDispatcher();

  $: titleValid = !isEmpty(title);
  $: subtitleValid = !isEmpty(subtitle);
  $: descriptionValid = !isEmpty(description);
  $: addressValid = !isEmpty(address);
  $: emailValid = isValidEmail(contactEmail);
  $: imageUrlValid = !isEmpty(imageUrl);
  $: formIsValid =
    titleValid &&
    subtitleValid &&
    descriptionValid &&
    addressValid &&
    emailValid &&
    imageUrlValid;

  function submitForm() {
    const meetupData = {
      title,
      subtitle,
      description,
      imageUrl,
      address,
      contactEmail,
    };

    meetups.addMeetup(meetupData);
    dispatch("save");
  }

  function cancel() {
    dispatch("cancel");
  }
</script>

<Modal title="Edit Meetup Data" on:cancel>
  <form on:submit|preventDefault={submitForm}>
    <TextInput
      id="title"
      label="Title"
      value={title}
      valid={titleValid}
      validityMessage={"Please enter a valid title."}
      on:input={(event) => (title = event.target.value)}
    />
    <TextInput
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      valid={subtitleValid}
      validityMessage={"Please enter a valid subtitle."}
      on:input={(event) => (subtitle = event.target.value)}
    />
    <TextInput
      id="address"
      label="Address"
      value={address}
      valid={addressValid}
      validityMessage={"Please enter a valid address."}
      on:input={(event) => (address = event.target.value)}
    />
    <TextInput
      id="imageUrl"
      label="Image URL"
      value={imageUrl}
      valid={imageUrlValid}
      validityMessage={"Please enter a valid image URL."}
      on:input={(event) => (imageUrl = event.target.value)}
    />
    <TextInput
      type="email"
      id="email"
      label="E-Mail"
      value={contactEmail}
      valid={emailValid}
      validityMessage={"Please enter a valid E-Mail."}
      on:input={(event) => (contactEmail = event.target.value)}
    />
    <TextInput
      controlType="textarea"
      id="description"
      label="Description"
      valid={descriptionValid}
      validityMessage={"Please enter a valid description."}
      bind:value={description}
    />
  </form>
  <div slot="footer">
    <Button type="submit" mode="outline" on:click={cancel}>Cancel</Button>
    <Button type="submit" on:click={submitForm} disabled={!formIsValid}
      >Save</Button
    >
  </div>
</Modal>

<style>
  form {
    width: 100%;
  }
</style>
