<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";
  import LoadingSpinner from "./UI/LoadingSpinner.svelte";
  import MeetupDetail from "./Meetups/MeetupDetail.svelte";

  import meetups from "./Meetups/meetups-store";

  let editMode = null;
  let editedId;
  let page = "overview";
  let pageData = {};
  let isLoading = true;

  fetch("https://meetups-svlte-default-rtdb.firebaseio.com/meetups.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Fetching meetups failed, please try again later!");
      }
      return res.json();
    })
    .then((data) => {
      const loadedMeetups = [];
      for (const key in data) {
        loadedMeetups.push({ ...data[key], id: key });
      }
      setTimeout(() => {
        isLoading = false;
        meetups.setMeetups(loadedMeetups);
      }, 1000);
    })
    .catch((err) => {
      isLoading = false;
      console.log(err);
    });

  function savedMeetup(event) {
    editMode = null;
    editedId = null;
  }

  function cancelEdit() {
    editMode = null;
    editedId = null;
  }

  function showDetails(event) {
    page = "details";
    pageData.id = event.detail;
  }

  function closeDetails() {
    page = "overview";
    pageData = {};
  }

  function startEdit(event) {
    editMode = "edit";
    editedId = event.detail;
  }
</script>

<Header />
<main>
  {#if page === "overview"}
    {#if editMode === "edit"}
      <EditMeetup id={editedId} on:save={savedMeetup} on:cancel={cancelEdit} />
    {/if}
    {#if isLoading}
      <LoadingSpinner />
    {:else}
      <MeetupGrid
        meetups={$meetups}
        on:showdetails={showDetails}
        on:edit={startEdit}
        on:add={() => (editMode = "edit")}
      />
    {/if}
  {:else}
    <MeetupDetail id={pageData.id} on:close={closeDetails} />
  {/if}
</main>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }
</style>
