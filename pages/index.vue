<template>
  <div class="flex items-center justify-center sm:h-screen">
    <form @submit.prevent="signIn" class="bg-white p-8 rounded border border-gray-200 shadow-md w-96">
      <h2 class="text-3xl text-center font-semibold mb-4">Sign In</h2>
      <div class="mb-4">
        <label for="username" class="block text-md font-medium text-gray-600">Username</label>
        <input v-model="username" type="text" id="username" name="username" class="mt-1 p-2 w-full border rounded" />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-md font-medium text-gray-600">Email</label>
        <input v-model="email" type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded" />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-md font-medium text-gray-600">Password</label>
        <input v-model="password" type="password" id="password" name="password"
          class="mt-1 p-2 w-full border rounded" />
      </div>
      <button type="submit"
        class="w-full bg-blue-500 text-white p-2 rounded transition-all duration-1000 ease-in-out hover:text-green-300 hover:scale-110">
        Sign In
      </button>
      <button @click.prevent="signInWithGoogle" class="w-full bg-red-500 text-white p-2 rounded mt-4">
        Sign In With Google
      </button>
      <div v-if="userEmail" class="mt-4 text-center">Logged in as: {{ userEmail }}</div>
      <button v-if="userEmail" @click="logout" class="w-full bg-gray-500 text-white p-2 rounded mt-4">
        Logout
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const email = ref('');
const password = ref('');
const userEmail = ref(null);

const signIn = () => {
  if (username.value && email.value && password.value) {
    console.log("Signing in...", username.value, email.value, password.value);
    showSuccessAlert();
    navigateTo("/feed");
  } else {
    showFillFieldsAlert();
  }
};

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    userEmail.value = result.user.email;
    console.log("User signed in: ", userEmail.value);
  } catch (error) {
    console.error("Error signing in with Google: ", error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    userEmail.value = null;
    console.log("User signed out.");
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};

const showSuccessAlert = () => {
  alert("Sign-in successful!");
};

const showFillFieldsAlert = () => {
  alert("Please fill in all the required fields.");
};
</script>