<template>
    <div>
        <div class="grid grid-cols-4 gap-7 p-5 mt-12">
      <router-link
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
      </router-link>
    </div>
    </div>
</template>

<script setup>

const { $axios } = useNuxtApp();

const { id } = useRoute().params.id;
const products = ref({});

const getProductById = async () => {
  try {
    const { data } = await $axios.get(`/products/${id}`);
    products.value = data;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

onMounted(() => {
  getProductById();
});
   
</script>
