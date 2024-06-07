<template>
  <div class="sm:mt-24 mt-20 sm:mb-10">
    <div v-if="loading" class="sm:mt-20 sm:mb-8 mb-5 sm:text-center">
      <p>Loading Products.....</p>
    </div>
    <div
      v-else
      class="sm:grid sm:grid-cols-3 space-y-6 sm:space-y-0 sm:gap-16 sm:px-0 px-2"
    >
      <router-link
        v-for="product in products"
        :key="product.id"
        :to="`/products/${product.id}`"
        class="flex flex-col sm:shadow-md bg-gray-200 cursor-pointer sm:p-6 p-2 rounded-3xl"
      >
        <img
          class="sm:w-full sm:h-[320px] h-[300px] w-full mb-5 sm:mb-0 self-center object-cover"
          :src="product.image"
          alt=""
        />
        <h2 class="text-black mt-auto sm:text-xl sm:pt-2 sm:p-0 p-2">
          {{ product.title }}
        </h2>
      </router-link>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      loading: true,
      products: [],
    };
  },
  async created() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      this.products = response.data;
      console.log(this.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  },
};
</script>
  