<template>
  <div class="flex items-center justify-center h-screen">
    <form @submit.prevent="signIn" class="bg-white p-8 rounded border border-gray-200 shadow-md w-96">
      <h2 class="text-3xl text-center font-semibold mb-4">Sign In</h2>
      <div class="mb-4">
        <label for="username" class="block text-md font-medium text-gray-600"
          >Username</label
        >
        <input
          v-model="username"
          type="text"
          id="username"
          name="username"
          class="mt-1 p-2 w-full border rounded"
        />
      </div>

      <div class="mb-4">
        <label for="email" class="block text-md font-medium text-gray-600"
          >Email</label
        >
        <input
          v-model="email"
          type="email"
          id="email"
          name="email"
          class="mt-1 p-2 w-full border rounded"
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-md font-medium text-gray-600"
          >Password</label
        >
        <input
          v-model="password"
          type="password"
          id="password"
          name="password"
          class="mt-1 p-2 w-full border rounded"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-500 text-white p-2 rounded transition-all duration-1000 ease-in-out hover:text-green-300 hover:scale-110"
      >
        Sign In
      </button>
    </form>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      if (this.username && this.email && this.password) {
        console.log("Signing in...", this.username, this.email, this.password);
        this.showSuccessAlert();
        navigateTo('/products/product');
      } else {
        this.showFillFieldsAlert();
      }
    },
    showSuccessAlert() {
      alert("Sign-in successful!");
    },
    showFillFieldsAlert() {
      alert("Please fill in all the required fields.");
    },
  },
};

</script>
  