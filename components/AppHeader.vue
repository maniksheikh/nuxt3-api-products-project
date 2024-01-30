<template>
    <div>
      <div class="bg-blue-600 text-white p-4 flex justify-between text-lg fixed top-0 left-0 right-0 w[100%]">
        <div>
          <NuxtLink to="/">Home</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/">About</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/products">Products</NuxtLink>
        </div>
      </div>
      <div class="text-center py-20 bg-gray-300">
          <h1 class="text-lg">Hello Manik, Here is Home Page</h1>
          <img class="h-[800px] m-auto w-[40%] flex items-center justify-center object-cover pt-10 rounded-md" src="../assets/20240114071423_IMG_1336.JPG">
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" scoped>
  </style>