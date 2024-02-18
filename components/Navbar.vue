<template>
  <div>
    <nav
      class="bg-blue-600 text-white text-lg p-2 fixed top-0 left-0 right-0 w[100%]"
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
      <div class="flex px-5 items-center">
        <ul class="px-5">
          <NuxtLink to="/home">Home</NuxtLink>
        </ul>
        <ul class="px-5">
          <NuxtLink to="/about">About</NuxtLink>
        </ul>
        <ul class="px-5">
          <NuxtLink to="/products">Products</NuxtLink>
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