<template>
  <div class="mt-24">
    <div v-if="loading" class="mt-20 text-center">
      <p>Loading Products.....</p>
    </div>
    <div v-else class="grid grid-cols-3 gap-16">
      <router-link
        v-for="product in products"
        :key="product.id"
        :to="`/products/${product.id}`"
        class="flex flex-col shadow-md bg-gray-100 cursor-pointer p-6 rounded-3xl"
      >
        <img
          class="w-full h-[320px] self-center object-cover"
          :src="product.image"
          alt=""
        />
        <h2 class="text-black mt-auto text-xl pt-2">{{ product.title }}</h2>
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
  