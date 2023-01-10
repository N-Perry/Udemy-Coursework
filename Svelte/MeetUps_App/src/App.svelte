<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";

  let title = "";
  let subtitle = "";
  let description = "";
  let address = "";
  let contactEmail = "";
  let imageUrl = "";

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description:
        "In this meetup, we will have some experts that teach you how to code!",
      imageUrl:
        "https://imgs.search.brave.com/-cpbUIT6oXZ5dAZudcw7qSohHBRWyblA67-42JGDNds/rs:fit:597:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/eldrNlhVVWxWQTh5/WHJOUDh1MjNRSGFG/NCZwaWQ9QXBp",
      address: "27 Nerd Rd, 32523 New York",
      contactEmail: "code@test.com",
    },
    {
      id: "m2",
      title: "Swim Together",
      subtitle: "Let's go swimming!",
      description:
        "We will simply swim a little bit, maybe a little butterfly stroke",
      imageUrl:
        "https://imgs.search.brave.com/-cpbUIT6oXZ5dAZudcw7qSohHBRWyblA67-42JGDNds/rs:fit:597:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/eldrNlhVVWxWQTh5/WHJOUDh1MjNRSGFG/NCZwaWQ9QXBp",
      address: "33 Water Ln, 44444 Maine",
      contactEmail: "swim@test.com",
    },
  ];

  function addMeetup() {
    const newMeetup = {
      id: Math.random().toString,
      title,
      subtitle,
      description,
      imageUrl,
      address,
      contactEmail,
    };

    meetups = [newMeetup, ...meetups];
  }
</script>

<Header />
<main>
  <form on:submit|preventDefault={addMeetup}>
    <TextInput
      type="text"
      id="title"
      label="Title"
      value={title}
      on:input={(event) => (title = event.target.value)}
    />
    <TextInput
      type="text"
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      on:input={(event) => (subtitle = event.target.value)}
    />
    <TextInput
      type="text"
      id="address"
      label="Address"
      value={address}
      on:input={(event) => (address = event.target.value)}
    />
    <TextInput
      type="text"
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
    <Button type="submit" caption="Save" />
  </form>
  <MeetupGrid {meetups} />
</main>

<style>
  main {
    margin-top: 5rem;
  }

  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>
