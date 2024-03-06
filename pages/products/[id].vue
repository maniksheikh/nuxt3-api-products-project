<template>
  <div class="mt-20">
    <div class="p-5 mt-12">
      <div
        v-if="product"
        class="max-w-lg bg-white border border-gray-200  m-auto rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg h-[400px] m-auto" :src="product.image" />
        </a>
        <br>
        <hr class="border border-gray-200">
        <div class="p-5">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ product.title }}
          </h5>
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white"
          >
            $ {{ product.price }}
          </h5>
          <h5
            class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
             {{ product.category }}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
           {{ product.description }}
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy Now
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const { id } = useRoute().params;
const product = ref(null);

const fetchData = async () => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    product.value = data;
    console.log(product.value);
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

onMounted(() => {
  fetchData();
});

function trucateDesciption(desciption, wordsCount) {
  if (desciption) {
    let words = desciption.split(" ");
    if (words.length > wordsCount) {
      words = words.slice(0, wordsCount);
      return words.join(" ") + "...";
    }
    return desciption;
  }
  return "";
}
</script>
