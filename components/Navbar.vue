<template>
  <div>
    <nav
      class="bg-black text-white py-1 text-lg fixed top-0 left-0 right-0 w-[100%]"
    >
      <div class="flex justify-between font-sans m-auto w-[1300px]">
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
        <div class="flex items-center">
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
            <NuxtLink to="/faqs">Faqs</NuxtLink>
          </ul>
        </div>
        <div class="flex space-x-4">
          <div class="flex items-center">
            <ul
              class="px-4 py-1 border bg-white font-semibold text-black rounded-md hover:text-blue-600"
            >
              <NuxtLink to="/signin">Sign Up</NuxtLink>
            </ul>
          </div>
          <!-- <button
            id="toggleDark"
            @click="toggleDark"
            class="tex-medium font-serif px-4 py-0 bg-blue-400 rounded-md hover:bg-blue-700"
          >
            Dark Mode
          </button> -->
        </div>
      </div>
    </nav>
  </div>
</template>
  
  <script>
// document.addEventListener("DOMContentLoaded", () => {
//   const toggleDark = document.getElementById("toggleDark");
//   toggleDark.addEventListener("click", function () {
//     if (document.documentElement.classList.includes("dark")) {
//       document.documentElement.classList.remove("dark");
//     } else {
//       document.documentElement.classList.add("dark");
//     }
//     alert("click");
//   });
// });
</script>
  
  