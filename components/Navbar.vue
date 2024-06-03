<template>
  <div>
    <nav
      class="bg-black text-white py-0 text-lg fixed top-0 left-0 right-0 w-[100%]"
    >
      <div class="flex justify-between m-auto w-[1300px]">
        <div>
          <nuxt-link to="/">
            <img
              class="rounded-full"
              src="https://masterbundles.com/wp-content/uploads/2022/12/shopping-logo-158.jpg"
              jsaction="VQAsE"
              style="max-width: 1100px; height: 50px; margin: 0px; width: 50px"
              alt="Shopping Cart Logo Design - MasterBundles"
              jsname="kn3ccd"
              aria-hidden="false"
            />
          </nuxt-link>
        </div>
        <div class="flex items-center text-[16px] font-[600]">
          <ul
            class="px-5 transition-all font-[500] duration-300 ease-in-out hover:text-yellow-400"
          >
            <NuxtLink to="/about">About</NuxtLink>
          </ul>

          <ul
            class="px-5 transition-all font-[500] duration-300 ease-in-out hover:text-yellow-400"
          >
            <NuxtLink to="/products/product">Products</NuxtLink>
          </ul>
          <ul
            class="px-5 transition-all font-[500] duration-300 ease-in-out hover:text-yellow-400"
          >
            <NuxtLink to="/pricing">Pricing</NuxtLink>
          </ul>
          <ul
            class="px-5 transition-all font-[500] duration-300 ease-in-out hover:text-yellow-400"
          >
            <NuxtLink to="#">Blog</NuxtLink>
          </ul>
        </div>
        <div class="flex justify-center items-center space-x-4">
          <nuxt-link v-if="isAuthenticated" to="/signin">
            <button
              class="bg-white text-black p-1 rounded-lg"
              @click="handleSignIn"
            >
              Sign In
            </button>
          </nuxt-link>
          <button
            v-if="!isAuthenticated"
            class="bg-white text-black p-1 rounded-lg"
            @click="handleSignOut"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isAuthenticated = ref(false);

const handleSignIn = () => {
  isAuthenticated.value = true;
};

const handleSignOut = () => {
  isAuthenticated.value = false;
};
</script>
  
  