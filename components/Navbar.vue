<template>
  <div>
    <nav class="bg-black text-white z-50 w-[100%] py-1 fixed top-0 left-0 right-0">
      <div class="flex relative justify-between items-center sm:m-auto sm:w-[1300px] py-1 sm:px-0 px-1">
        <div>
          <nuxt-link to="/feed">
            <img class="rounded-full h-[45px] w-[45px]"
              src="https://masterbundles.com/wp-content/uploads/2022/12/shopping-logo-158.jpg" jsaction="VQAsE"
              alt="Shopping Cart Logo Design - MasterBundles" jsname="kn3ccd" aria-hidden="false" />
          </nuxt-link>
        </div>
        <div class="sm:flex items-center hidden sm:text-[16px] font-[500]">
          <ul class="px-5 transition-all duration-300 ease-in-out hover:text-yellow-400">
            <NuxtLink to="/feed">Home</NuxtLink>
          </ul>
          <ul class="px-5 transition-all duration-300 ease-in-out hover:text-yellow-400">
            <NuxtLink to="/about">About</NuxtLink>
          </ul>

          <ul class="px-5 transition-all duration-300 ease-in-out hover:text-yellow-400">
            <NuxtLink to="/products/product">Products</NuxtLink>
          </ul>
          <ul class="px-5 transition-all duration-300 ease-in-out hover:text-yellow-400">
            <NuxtLink to="/pricing">Pricing</NuxtLink>
          </ul>
          <ul class="px-5 transition-all duration-300 ease-in-out hover:text-yellow-400">
            <NuxtLink to="/testimonials">Testimonials</NuxtLink>
          </ul>
        </div>
        <div class="cursor-pointer sm:hidden block">
          <img class="bg-white rounded-full sm:w-[40px] sm:h-[40px] h-[25px] w-[25px]"
            @click="isShowMobileNav = !isShowMobileNav" decoding="async"
            src="https://framerusercontent.com/images/dG1Azogn9b3q4VAzzfU8jvuvqo.svg" alt="" style="
              display: block;
              border-radius: inherit;
              object-position: center center;
              object-fit: cover;
              image-rendering: auto;
            " />
        </div>
        <div class="flex justify-center items-center">
          <nuxt-link to="">
            <svg @click="isshopingCartshow = !isshopingCartshow"
              class="cursor-pointer rounded-full sm:w-[42px] sm:h-[42px] h-[30px] w-[30px]"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="white"
                d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </nav>
    <div class="absolute sm:top-0 sm:right-0 right-4">
      <shopingCart v-if="isshopingCartshow" :product-data="selectedProduct" @remove-item="handleRemoveItem" />
    </div>
    <div class="mt-14">
      <MobileNavbar v-show="isShowMobileNav"></MobileNavbar>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isShowMobileNav = ref(false);
const isshopingCartshow = ref(false);
const selectedProduct = ref(null);

onMounted(() => {
  window.addEventListener('update-cart', (event) => {
    selectedProduct.value = event.detail;
    isshopingCartshow.value = true;
  });
});

onUnmounted(() => {
  window.removeEventListener('update-cart', (event) => {
    selectedProduct.value = event.detail;
    isshopingCartshow.value = true;
  });
});

const handleRemoveItem = () => {
  isshopingCartshow.value = false;
};
</script>