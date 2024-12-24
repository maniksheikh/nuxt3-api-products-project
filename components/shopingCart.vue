<template>
  <div class="sm:mt-20 mt-2">
    <div class="flex bg-white z-50 justify-end relative">
      <div class="sm:w-[340px] w-[350px] m-auto border border-gray-300 shadow-md rounded-xl p-6">
        <h2 class="text-[42px] text-center font-semibold mb-4">Your Cart</h2>
        <hr class="mb-5 border-2 border-red-600" />
        <div v-if="cartItems.length > 0">
          <div v-for="item in cartItems" :key="item.id" class="flex gap-5 items-center justify-between mb-4">
            <div class="cart w-[40%]">
              <img :src="item.image" :alt="item.title" class=" object-cover rounded-lg" />
            </div>
            <div class="items-center w-[60%]">
              <p class="font-medium text-[17px]">{{ item.title }}</p>
              <div class="flex items-center gap-2 mt-2 mb-2">
                <button @click="decreaseQuantity(item)" class="px-2 bg-gray-200 rounded">-</button>
                <span>{{ item.quantity }}</span>
                <button @click="increaseQuantity(item)" class="px-2 bg-gray-200 rounded">+</button>
              </div>
              <span class="text-lg text-gray-600 font-[600] mt-3 mb-2">$ {{ item.price }}</span>
              <div class="text-lg font-medium">Total: $ {{ (item.price * item.quantity).toFixed(2) }}</div>
            </div>
          </div>
          <div class="mt-4 text-xl text-center font-bold">
            Total Amount : $ {{ cartTotal.toFixed(2) }}
          </div>
        </div>

        <div v-else class="text-center text-gray-500">
          Your cart is empty
        </div>

        <button v-if="cartItems.length > 0" @click="clearCart"
          class="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 mt-4">
          Clear Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const cartItems = ref([]);

const props = defineProps({
  productData: {
    type: Object,
    required: true,
    default: () => ({})
  }
});

const emit = defineEmits(['remove-item']);

// Watch for new products being added
watch(() => props.productData, (newProduct) => {
  if (newProduct && newProduct.id) {
    const existingItem = cartItems.value.find(item => item.id === newProduct.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.value.push({
        ...newProduct,
        quantity: 1
      });
    }
  }
}, { deep: true });

const increaseQuantity = (item) => {
  item.quantity++;
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    cartItems.value = cartItems.value.filter(i => i.id !== item.id);
  }
};

const cartTotal = computed(() => {
  return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0);
});

const clearCart = () => {
  cartItems.value = [];
  emit('remove-item');
};
</script>
