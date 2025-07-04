<template>
  <div class="sm:mt-20 sm:w-[1200px] m-auto">
    <div class="sm:p-0 p-4 sm:mt-12 sm:mb-10 sm:px-0 px-2">
      <div v-if="product" class="sm:flex block sm:gap-20 sm:justify-between">
        <div
          class="sm:w-[50%] sm:p-5 w-full h-auto bg-gray-200 border border-gray-200 m-auto rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300"
          style="box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);">
          <a href="#">
            <img class="rounded-t-lg sm:w-[100%] sm:h-[440px] h-[300px] m-auto" :src="product.image"
              alt="Product Image" />
          </a>
        </div>
        <div class="sm:p-5 sm:w-[50%] p-2 sm:rounded-md  border border-gray-200">
          <h5
            class="sm:mb-2 mb-2 sm:p-2 p-1 sm:text-2xl text-[22px] font-[600] tracking-tight border border-gray-200 text-gray-900 dark:text-white">
            {{ product.title }}
          </h5>
          <h5
            class="sm:mb-2 mb-2 sm:p-2 p-1 sm:text-[30px] text-[30px] font-bold tracking-tight border border-gray-200 text-gray-500 dark:text-white">
            $ {{ product.price }}
          </h5>
          <h5
            class="sm:mb-2 mb-2 sm:text-xl uppercase text-[18px] sm:p-2 p-1 font-[600] tracking-tight border border-gray-200 text-gray-900 dark:text-white">
            {{ product.category }}
          </h5>
          <p
            class="sm:mb-3 mb-2 sm:text-[18px] text-[15px] sm:p-2 p-1 sm:font-normal text-gray-700 border border-gray-200 dark:text-gray-400">
            {{ product.description }}
          </p>
          <div class="flex justify-between items-center sm:mt-7 mt-3">
            <button @click="addToCart"
              class="inline-flex items-center px-3 py-2.5  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Buy Now
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
            <button @click="goBack"
              class="px-4 py-2 text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "nuxt/app";

const route = useRoute();
const router = useRouter();
const product = ref(null);
const errorMessage = ref(null);
const isCartVisible = ref(false);

const fetchData = async () => {
  try {
    const { id } = route.params;
    console.log("Fetching product with id:", id);
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    product.value = data;
    console.log("Product data fetched:", product.value);
  } catch (error) {
    errorMessage.value = "Error fetching product data. Please try again.";
    console.error("Error fetching product:", error);
  }
};

const addToCart = () => {
  const cartProduct = {
    id: product.value.id,
    title: product.value.title,
    price: product.value.price,
    image: product.value.image
  };
  const event = new CustomEvent('update-cart', {
    detail: cartProduct
  });
  window.dispatchEvent(event);

  isCartVisible.value = true;
};

const goBack = () => {
  router.back();
};

onMounted(() => {
  fetchData();
});
</script>
