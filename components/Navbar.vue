<template>
  <div>
    <nav
      class="bg-black text-white text-lg p-2 fixed top-0 left-0 right-0 w[100%]"
    > 
    <div class=" flex justify-between m-auto w-[1500px]">
      <div>
        <nuxt-link to="/">
          <img class="rounded-full"
            src="https://masterbundles.com/wp-content/uploads/2022/12/shopping-logo-158.jpg"
            jsaction="VQAsE"
            style="max-width: 1100px; height: 45px; margin: 0px; width: 45px"
            alt="Shopping Cart Logo Design - MasterBundles"
            jsname="kn3ccd"
            aria-hidden="false"
          />
        </nuxt-link>
      </div>
      <div class="flex items-center">
        <ul class="px-7 transition-all duration-300 ease-in-out hover:text-blue-400 hover:scale-105 ">
          <NuxtLink to="/about">About</NuxtLink>
        </ul>
        <ul class="px-7 transition-all duration-300 ease-in-out hover:text-blue-400 hover:scale-105">
          <NuxtLink to="/blog">Blog</NuxtLink>
        </ul>
        <ul class="px-7 transition-all duration-300 ease-in-out hover:text-blue-400 hover:scale-105">
          <NuxtLink to="/products/product">Products</NuxtLink>
        </ul>
      </div>
      <div class="flex items-center">
        <ul class="px-6 p-1 border bg-white font-bold text-black  rounded-full transition-all duration-1000 ease-in-out hover:text-blue-600 hover:scale-105">
          <NuxtLink to="/signin">Sign Up</NuxtLink>
        </ul>
      </div>
    </div>
    </nav>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style lang="scss" scoped>
</style>