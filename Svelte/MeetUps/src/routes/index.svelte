<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import MeetupItem from '$lib/components/Meetups';
	import MeetupFilter from '$lib/component/Meetups';
	import Button from '$lib/components/UI';
	import EditMeetup from '$lib/components/Meetups';
	import LoadingSpinner from '$lib/components/UI';

	export let meetups;

	let editMode = null;
	let editedId;
	let isLoading;

	const dispatch = createEventDispatcher();

	let favsOnly = false;

	$: filteredMeetups = favsOnly ? meetups.filter((meetup) => meetup.isFavorite) : meetups;

	onMount(() => {
		fetch('https://meetups-svlte-default-rtdb.firebaseio.com/meetups.json')
			.then((res) => {
				if (!res.ok) {
					throw new Error('Fetching meetups failed, please try again later!');
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
					meetups.setMeetups(loadedMeetups.reverse());
				}, 1000);
			})
			.catch((err) => {
				error = err;
				isLoading = false;
				console.log(err);
			});
	});

	function setFilter(event) {
		favsOnly = event.detail === 1;
	}

	function savedMeetup(event) {
		editMode = null;
		editedId = null;
	}

	function cancelEdit() {
		editMode = null;
		editedId = null;
	}

	function startEdit(event) {
		editMode = 'edit';
		editedId = event.detail;
	}
</script>

<svelte:head>
	<title>All Meetups</title>
</svelte:head>

{#if editMode === 'edit'}
	<EditMeetup id={editedId} on:save={savedMeetup} on:cancel={cancelEdit} />
{/if}
{#if isLoading}
	<LoadingSpinner />
{:else}
	<section id="meetup-controls">
		<MeetupFilter on:select={setFilter} />

		<Button on:click={() => dispatch('add')}>New Meetup</Button>
	</section>
	{#if filteredMeetups.length === 0}
		<p id="no-meetups">No meetups found, you can start adding some</p>
	{/if}
	<section id="meetups">
		{#each filteredMeetups as meetup (meetup.id)}
			<div transition:scale animate:flip={{ duration: 300 }}>
				<MeetupItem
					id={meetup.id}
					title={meetup.title}
					subtitle={meetup.subtitle}
					description={meetup.description}
					imageUrl={meetup.imageUrl}
					address={meetup.address}
					isFav={meetup.isFavorite}
					email={meetup.contactEmail}
					on:showdetails
					on:edit
				/>
			</div>
		{/each}
	</section>
{/if}

<style>
	#meetups {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
	}

	#no-meetups {
		margin: 1rem;
	}

	#meetup-controls {
		display: flex;
		justify-content: space-between;
		margin: 1rem;
	}

	@media (min-width: 768px) {
		#meetups {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
