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

<svelte:head>
  <title>Todo List</title>
  <meta name="robots" content="noindex nofollow" />
  <html lang="en" />
</svelte:head>
<main>
  <!-- Create By Joker Banny -->
  <div class="min-h-screen bg-gray-900">
    <div
      class="lg:flex pr-6 items-center lg:text-left w-full justify-center  text-center"
    >
      <div class="">
        <h1 class="text-white text-4xl text-center mt-5">
          <p style="color: #0ED3CF;">TODO</p>
        </h1>
        <div
          class="flex p-2 items-center lg:max-w-lg mt-6 px-2 border rounded-lg border-opacity-20"
        >
          <input
            bind:value={text}
            class="bg-gray-900 outline-none text-white w-full ml-4"
            type="text"
            placeholder=""
          />
          <button class="bg-gray-900" on:click={addItem}>
            <div
              style="background-color: #0ED3CF;"
              class="p-3 rounded-lg cursor-pointer"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/plus-math.png"
              />
            </div>
          </button>
        </div>
        {#if arr.length > 0}
          <ul class="flex flex-col bg-gray-300 p-4">
            {#each arr as value, i}
              <li class="border-gray-400 flex flex-row mb-2">
                <div
                  class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium">{value}</div>
                  </div>
                  <button
                    on:click={() => removeItem(i)}
                    class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center"
                  >
                    <img
                      src="https://img.icons8.com/flat-round/30/000000/delete-sign.png"
                    />
                  </button>
                </div>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  </div>

  <!-- <button on:click={addItem}>เพิ่ม d</button> -->
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
