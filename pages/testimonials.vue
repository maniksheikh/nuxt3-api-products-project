<template>
    <div class="sm:max-w-[1350px] w-full m-auto">
      <div class="sm:mt-32 mt-16 sm:px-7 px-2 sm:py-5 py-2 bg-white rounded-md">
          <div>
            <header class="sm:text-5xl text-3xl font-semibold opacity-90 sm:mb-10 mb-5 p-4 text-center justify-center">
              <span class="text-[#FF4F00]">Testimonials</span> Review
            </header>
          </div>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-10 gap-5 sm:pb-10 p-5">
                  <div v-for="review in reviews" :key="review.id"
                    class="p-5 border-2 border-gray-300 rounded-xl shadow-lg transition duration-500 ease-out hover:ease-in hover:border-red-400 hover:shadow-lg hover:-translate-y-2 shadow-secondary-1 transform">
                    <div class="flex justify-center mb-4">
                      <svg class="h-12 sm:h-14 p-3 cursor-pointer text-gray-300 dark:text-gray-600" viewBox="0 0 24 27"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :d="review.svg" fill="currentColor"></path>
                      </svg>
                    </div>
                    <p class="sm:mb-7 mb-4 text-center sm:text-start font-normal opacity-95">
                      {{ review.description }}
                    </p>
                    <div class="flex flex-col sm:flex-row sm:justify-between items-center">
                      <div class="flex items-center space-x-3 mb-3 sm:mb-0">
                        <img class="h-10 w-10 cursor-pointer rounded-full" :src="review.avatar" alt="image" />
                        <p class="text-lg font-semibold opacity-80">
                          {{ review.name }}
                        </p>
                      </div>
                      <p class="text-sm font-medium opacity-90 text-left">
                        {{ review.content }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup>
 
 import reviewSection from "~/store/review.json";

 const reviews = reactive(reviewSection);
</script>