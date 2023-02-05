import { writable } from "svelte/store";

const meetups = writable([
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
]);

const customMeetups = {
  subscribe: meetups.subscribe,
  addMeetup: (meetupData) => {
    const newMeetup = {
      ...meetupData,
    };
    meetups.update((existingItems) => {
      return [newMeetup, ...existingItems];
    });
  },
  updateMeetup: (id, meetupData) => {
    meetups.update((existingItems) => {
      const meetupIndex = existingItems.findIndex((i) => i.id === id);
      const updatedMeetup = { ...existingItems[meetupIndex], ...meetupData };
      const updatedMeetups = [...existingItems];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    });
  },
  removeMeetup: (id) => {
    meetups.update((existingItems) => {
      return existingItems.filter((item) => item.id !== id);
    });
  },
  toggleFavorite: (id) => {
    meetups.update((existingItems) => {
      const updatedMeetup = { ...existingItems.find((m) => m.id === id) };
      updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
      const index = existingItems.findIndex((m) => m.id === id);
      const updatedMeetups = [...existingItems];
      updatedMeetups[index] = updatedMeetup;
      return updatedMeetups;
    });
  },
};
export default customMeetups;
