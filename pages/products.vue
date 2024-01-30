<template>
    <div class="grid grid-cols-4 gap-7 p-5 pt-10">
        <div v-for="product in products" :key="product.id" class="flex flex-col shadow-md bg-gray-100 cursor-pointer p-6 rounded-md">
            <img class="w-[750px] h-[350px] self-center object-cover" :src="product.image" alt="">
            <h2 class="text-black mt-auto text-xl pt-5">{{ product.title }}</h2>
            <h3 class="text-black mt-auto text-xl pt-5">$ {{ product.price }}</h3>
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