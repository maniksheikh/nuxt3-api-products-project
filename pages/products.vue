<template>
    <div>
      <div v-if="loading" class="mt-20 text-center">
        <p>Loading Products.....</p>
      </div>
      <div v-else class="grid grid-cols-4 gap-7 p-5 mt-12">
        <router-link
          v-for="product in products"
          :key="product.id"
          :to="`${product.id}`"
          class="flex flex-col shadow-md bg-gray-100 cursor-pointer p-6 rounded-md"
        >
          <img class="w-[720px] h-[320px] self-center object-cover" :src="product.image" alt="">
          <h2 class="text-black mt-auto text-xl pt-2">{{ product.title }}</h2>
          <h3 class="text-black mt-auto text-xl pt-2">$ {{ product.price }}</h3>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        loading: true,
        products: [],
      };
    },
    async created() {
      const productId = this.$route.params.id
      try {
        const response = await axios.get('https://fakestoreapi.com/products/${productId}');
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      }
    },
  };
  </script>
  