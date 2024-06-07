<template>
  <div class="pb-5 sm:hidden block">
    <ul
      class="block text-[#535251] text-[15px] mt-20 px-3 p-3 text-center space-y-2 font-[500]"
    >
      <li class="font-semibold">
        <nuxt-link to="/feed">Home</nuxt-link>
      </li>
      <li class="font-semibold">
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li class="font-semibold">
        <nuxt-link to="/pricing">Pricing</nuxt-link>
      </li>
      <li class="font-semibold">
        <nuxt-link to="/products/product">Products</nuxt-link>
      </li>
      <li class="font-semibold">
        <nuxt-link to="#">Blog</nuxt-link>
      </li>
    </ul>

    <button
      class="flex justify-center text-center bg-[#ff4f00] m-auto text-white text-[13px] rounded-full px-4 py-2.5"
    >
      <nuxt-link
        to="#"
        aria-label="Get Started"
        title="Get Started"
        class="flex items-center"
      >
        <span>Get Started</span>
        <img
          src="https://framerusercontent.com/images/QDgxMHJz2vKvFSMvhZpA6xplIBM.svg"
          alt=""
          class="ml-1 w-4 h-4"
          style="object-fit: cover; border-radius: inherit"
        />
      </nuxt-link>
    </button>
  </div>
</template>
    
<script setup>
const isShowMobileNav = ref(false);
</script>
    