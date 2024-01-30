<template>
    <div class="grid grid-cols-4 gap-7">
        <div v-for="product in products" :key="product.id" class="flex flex-col shadow-md bg-white p-6 rounded-md">
            <img class="h-[400px]" :src="product.image" alt="">
            <h2>{{ product.title }}</h2>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            products: []
        };
    },
    async created() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            this.products = response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}
</script>


<style lang="scss" scoped>

</style>