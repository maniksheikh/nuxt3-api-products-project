<template>
  <div class="sm:mt-20 mt-2">
    <div class="flex bg-white z-50 justify-end relative">
      <div class="sm:w-[340px] w-[350px] m-auto border border-gray-300 shadow-md rounded-xl p-6">
        <h2 class="text-[42px] text-center font-semibold mb-4">Your Cart</h2>
        <hr class="mb-5 border-2 border-red-600" />
        <div v-if="cartItems.length > 0">
          <div v-for="item in cartItems" :key="item.id" class="flex gap-5 items-center justify-between mb-4">
            <div class="cart w-[40%]">
              <img :src="item.image" :alt="item.title" class="object-cover rounded-lg" />
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
          <div class="mt-4 text-xl text-center font-bold">Total Amount : $ {{ cartTotal.toFixed(2) }}</div>
        </div>
        <div v-else class="text-center text-gray-500">Your cart is empty</div>
        <button v-if="cartItems.length > 0" @click="clearCart"
          class="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 mt-4">Clear Cart</button>
        <button v-if="cartItems.length > 0" @click="showOrderForm"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mt-4">Order Now</button>
        <div v-if="orderSuccess" class="mt-4 text-green-600 text-center font-semibold">Order placed successfully!</div>
        
        <!-- Contact Form Modal -->
        <div v-if="showForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 class="text-xl font-semibold mb-4">Complete Your Order</h3>
            <form action="https://formspree.io/f/xgvkqwon" method="POST" class="space-y-4" id="contactForm">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" id="phone" name="phone" required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              </div>
              <div>
                <label for="address" class="block text-sm font-medium text-gray-700">Shipping Address</label>
                <textarea id="address" name="address" required rows="3"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <!-- Hidden fields for order details -->
              <input type="hidden" name="order_details" :value="orderDetailsText">
              <input type="hidden" name="total_amount" :value="'$' + cartTotal.toFixed(2)">
              <!-- Formspree specific fields -->
              <input type="hidden" name="_subject" value="New Order Submission">
              <input type="hidden" name="_next" :value="formSuccessUrl">
              <div class="flex justify-end space-x-3">
                <button type="button" @click="showForm = false"
                  class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
                <button type="submit"
                  class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Place Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';

const cartItems = ref([]);
const orderSuccess = ref(false);
const showForm = ref(false);
const formData = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
});

// Create a success URL for Formspree to redirect to
const formSuccessUrl = ref('');

onMounted(() => {
  // Set the success URL to the current page with a success parameter
  const currentUrl = window.location.href.split('?')[0]; // Get base URL without parameters
  formSuccessUrl.value = `${currentUrl}?order=success`;
  
  // Check if we're returning from a successful form submission
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('order') === 'success') {
    orderSuccess.value = true;
    // Clear cart after successful order
    clearCart();
    
    // Remove the success parameter from URL after a delay
    setTimeout(() => {
      window.history.replaceState({}, document.title, currentUrl);
      orderSuccess.value = false;
    }, 3000);
  }
});

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

// Computed property for order details text
const orderDetailsText = computed(() => {
  return cartItems.value.map(item => 
    `${item.title} (${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`
  ).join(', ');
});

const clearCart = () => {
  cartItems.value = [];
  emit('remove-item');
};

// Show the order form instead of immediately placing the order
const showOrderForm = () => {
  showForm.value = true;
};
</script>