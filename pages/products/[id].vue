<template>
  <div>
    <div class="grid grid-cols-4 gap-7 p-5 mt-12">
      <div
        v-for="product in products"
        :key="product.id"
        :to="`${product.id}`"
        class="flex flex-col shadow-md bg-gray-100 cursor-pointer p-6 rounded-lg"
      >
        <img
          class="w-[720px] h-[320px] self-center object-cover"
          :src="product.image"
          alt=""
        />
        <h2 class="text-black mt-auto text-xl pt-2">{{ product.title }}</h2>
        <h2 class="text-black mt-auto text-xl pt-2">{{ product.price }}</h2>
        <p class="text-black mt-auto text-xl pt-2">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script >
import { ref } from "vue";

export default {
  setup() {
    const { $axios } = useNuxtApp();
    const { id } = useRoute().params.id;
    const products = ref({});

    const fetchData = async () => {
      try {
        const { data } = await $axios.get(`https://fakestoreapi.com/products/${id}`);
        products.value = data;
        console.log(products.value);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData(); // Call the fetchData function

    return {
      products,
    };
  },
};
</script>
