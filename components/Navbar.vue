<template>
  <div>
    <nav
      class="bg-black text-white py-0 text-lg fixed top-0 left-0 right-0 max-w-[100%]"
    >
      <div
        class="flex justify-between items-center mx-auto max-w-[1100px] sm:max-w-[100%] sm:px-2"
      >
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
        <div class="flex sm:none items-center text-[16px] font-[500]">
          <ul
            class="px-5 transition-all duration-300 ease-in-out hover:text-yellow-400"
          >
            <NuxtLink to="/">Home</NuxtLink>
          </ul>
          <ul
            class="px-5 transition-all duration-300 ease-in-out hover:text-yellow-400"
          >
            <NuxtLink to="/about">About</NuxtLink>
          </ul>

          <ul
            class="px-5 transition-all duration-300 ease-in-out hover:text-yellow-400"
          >
            <NuxtLink to="/products/product">Products</NuxtLink>
          </ul>
          <ul
            class="px-5 transition-all duration-300 ease-in-out hover:text-yellow-400"
          >
            <NuxtLink to="/pricing">Pricing</NuxtLink>
          </ul>
          <ul
            class="px-5 transition-all duration-300 ease-in-out hover:text-yellow-400"
          >
            <NuxtLink to="#">Blog</NuxtLink>
          </ul>
        </div>

        <div class="cursor-pointer hidden sm:block">
          <img
            class="bg-white"
            @click="isShowMobileNav = !isShowMobileNav"
            decoding="async"
            src="https://framerusercontent.com/images/dG1Azogn9b3q4VAzzfU8jvuvqo.svg"
            alt=""
            style="
              display: block;
              width: 1.6em;
              height: 1.6em;
              border-radius: inherit;
              object-position: center center;
              object-fit: cover;
              image-rendering: auto;
            "
          />
        </div>

        <div class="flex justify-center items-center">
          <nuxt-link to="">
            <svg
              class="cursor-pointer rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </nav>
    <div class="mt-14">
      <MobileNavbar v-show="isShowMobileNav"></MobileNavbar>
    </div>
  </div>
</template>

<script setup>
const isShowMobileNav = ref(false);
</script>
  
  