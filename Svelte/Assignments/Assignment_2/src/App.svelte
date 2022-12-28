<script>
  let userPassword = "";
  let passwordList = [];

  $: tooShort = userPassword.length < 5;
  $: tooLong = userPassword.length > 10;

  function addPassword() {
    passwordList = [
      ...passwordList,
      {
        id: Math.random(),
        userPassword,
      },
    ];
  }

  function deletePassword(i) {
    passwordList = [...passwordList.slice(0, i), ...passwordList.slice(i + 1)];
  }
</script>

<h1>Assignment</h1>

<p>Solve these tasks.</p>

<ol>
  <li>Add a password input field and save the user input in a variable.</li>
  <li>
    Output "Too short" if the password is shorter than 5 characters and "Too
    long" if it's longer than 10.
  </li>
  <li>
    Output the password in a paragraph tag if it's between these boundaries.
  </li>
  <li>Add a button and let the user add the passwords to an array.</li>
  <li>Output the array values (= passwords) in a unordered list (ul tag).</li>
  <li>Bonus: If a password is clicked, remove it from the list.</li>
</ol>

<input type="text" bind:value={userPassword} />
{#if userPassword === ""}
  <p>Please enter a password:</p>
{:else if tooShort}
  <p>Too short</p>
{:else if tooLong}
  <p>Too long</p>
{:else}
  <p>{userPassword}</p>
{/if}

<button on:click={addPassword}>Add To Array</button>
<ul>
  {#each passwordList as password, index (password.id)}
    <li class="passwordItem" on:click={() => deletePassword(index)}>
      {password.userPassword}
    </li>
  {/each}
</ul>

<style>
  .passwordItem:hover {
    cursor: pointer;
  }
</style>
