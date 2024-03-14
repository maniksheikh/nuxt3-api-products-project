<template>
  <div>
    <nav
      class="bg-black text-white text-lg p-2 fixed top-0 left-0 right-0 w[100%]"
    >
      <div class="flex justify-between m-auto w-[1500px]">
        <div>
          <nuxt-link to="/">
            <img
              class="rounded-full"
              src="https://masterbundles.com/wp-content/uploads/2022/12/shopping-logo-158.jpg"
              jsaction="VQAsE"
              style="max-width: 1100px; height: 46px; margin: 0px; width: 46px"
              alt="Shopping Cart Logo Design - MasterBundles"
              jsname="kn3ccd"
              aria-hidden="false"
            />
          </nuxt-link>
        </div>
        <div class="flex items-center">
          <ul
            class="px-7 transition-all font-semibold duration-300 ease-in-out hover:text-yellow-400 "
          >
            <NuxtLink to="/about">About</NuxtLink>
          </ul>
          <ul
            class="px-7 transition-all font-semibold duration-300 ease-in-out hover:text-yellow-400 "
          >
            <NuxtLink to="/">Blogs</NuxtLink>
          </ul>
          <ul
            class="px-7 transition-all font-semibold duration-300 ease-in-out hover:text-yellow-400 "
          >
            <NuxtLink to="/products/product">Products</NuxtLink>
          </ul>
        </div>
        <div class="flex items-center">
          <ul
            class="px-3 py-1  border bg-white font-semibold text-black rounded-md hover:text-blue-600"
          >
            <NuxtLink to="/signin">Sign Up</NuxtLink>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
  
  <script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const isDarkMode = ref(false);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      applyDarkMode(isDarkMode.value);
      localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
      console.log('Hello Manik');
    }; 

    const applyDarkMode = (dark) => {
      const htmlElement = document.documentElement;
      htmlElement.classList.toggle("dark", dark);
    };

    onMounted(() => {
      const currentTheme = localStorage.getItem("theme") || "light";
      isDarkMode.value = currentTheme === "dark";
      applyDarkMode(isDarkMode.value);
    });

    return {
      toggleDarkMode,
    };
  },
};
</script>
  
  