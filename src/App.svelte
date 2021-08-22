<script>
  let arr = [];
  let text = [];
  let active = false;

  function addItem() {
    arr = [...arr, text];
    text = "";
  }

  function removeItem(i) {
    arr.splice(i, 1);
    arr = arr;
  }
</script>

<main>
  <h1>Todo List</h1>
  <input type="text" bind:value={text} />

  <button on:click={addItem}>เพิ่มรายการ</button>
  <ul>
    {#each arr as value, i}
      <li>
        <span class:active on:click={() => (active = !active)}>{value}</span>
        <button on:click={() => removeItem(i)}>ลบ</button>
      </li>
    {/each}
  </ul>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
