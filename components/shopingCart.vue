<template>
  <div class="mt-20">
    <div class="flex justify-end">
      <div
        class="w-[340px] max-w-sm bg-white border border-gray-300 shadow-md rounded-xl p-6"
      >
        <h2 class="text-[42px] text-center font-semibold mb-4">Your Cart</h2>
        <hr class="mb-5 border-2 border-red-600" />
        <div class="flex justify-between">
          <div class="cart mb-4">
            <img src="" alt="img" class="w-full h-48 object-cover rounded-lg" />
          </div>
          <div class="items-center mb-4">
            <p class="text-xl font-medium">Title</p>
            <span class="text-lg text-gray-600 font-[600] mt-3">$ price</span>
            <div class="text-lg font-medium">Total</div>
          </div>
        </div>
        <button
          class="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
</script>
