<!-- components/SignIn.vue -->
<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 shadow-md rounded-md w-full sm:w-96">
        <h2 class="text-2xl font-semibold mb-4">Sign In</h2>
        <form @submit.prevent="signIn">
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              v-model="username"
              type="text"
              id="username"
              name="username"
              class="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              v-model="password"
              type="password"
              id="password"
              name="password"
              class="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <button
          @click="signIn"
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  const {signIn} = signInWithGoogle();
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      signIn() {
        // Handle sign-in logic here
        console.log('Signing in...', this.username, this.password);
      }
    }
  };
  </script>
  