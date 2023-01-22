<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import Button from "./UI/Button.svelte";

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
      isFavorite: false,
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
      isFavorite: false,
    },
  ];

  let editMode = null;

  function addMeetup(event) {
    const { title, subtitle, description, imageUrl, address, contactEmail } =
      event.detail;

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
    editMode = null;
  }

  function toggleFavorite(event) {
    const id = event.detail;
    const updatedMeetup = { ...meetups.find((m) => m.id === id) };
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    const index = meetups.findIndex((m) => m.id === id);
    const updatedMeetups = [...meetups];
    updatedMeetups[index] = updatedMeetup;
    meetups = updatedMeetups;
  }
</script>

<Header />
<main>
  <div class="meetup-controls">
    <Button caption="New Meetup" on:click={() => (editMode = "add")} />
  </div>
  {#if editMode === "add"}
    <EditMeetup on:save={addMeetup} />
  {/if}
  <MeetupGrid {meetups} on:togglefavorite={toggleFavorite} />
</main>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }
</style>
