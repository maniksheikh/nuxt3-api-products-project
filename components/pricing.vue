<template>
  <div class="mb-12 sm:mb-0">
    <div class="sm:w-[580px] w-[100%] m-auto text-center sm:px-0 px-2 sm:mb-0 mb-10">
      <h2 class="text-[#2A2A2A] p-4 sm:text-[56px] text-[36px] font-[600] leading-relaxed">
        Choose Your Pricing
      </h2>
      <p class="text-black opacity-70 sm:text-[18px] font-[400] leading-6 mt-3">
        Save Upto 50% with our Annual Plans:
      </p>
    </div>
    <div class="flex justify-center items-center gap-5 mt-5">
      <span :class="['font-medium', !isYearly ? 'text-gray-900' : 'text-gray-500']">Monthly</span>
      <div @click="isYearly = !isYearly"
        class="w-12 h-6 bg-[#FF5F38] rounded-full relative cursor-pointer transition-all"
        :class="{ 'bg-primary': isYearly }">
        <div class="w-5 h-5 bg-white rounded-full absolute top-0.5 left-1 transition-transform"
          :class="{ 'translate-x-5': isYearly }">
        </div>
      </div>
      <span :class="['font-medium', isYearly ? 'text-gray-900' : 'text-gray-500']">Yearly</span>
    </div>
    <div class="sm:grid sm:grid-cols-3 grid-cols-1 sm:space-y-0 space-y-8 bg-white sm:py-10 sm:gap-10 sm:px-10 px-2">
      <div v-for="plan in plansData" :key="plan.id" :class="plan.class" :style="plan.css"
        class="bg-[#FFFFFF] border border-gray-200 w-full h-auto rounded-4xl shadow-md overflow-hidden">
        <div class="p-5">
          <h2 :style="plan.titleCss" class="text-[22px] font-bold opacity-80">
            {{ plan.name }}
          </h2>
          <div class="flex items-center">
            <p class="font-[600] sm:text-[50px] text-[36px]">
              <span :style="plan.titleCss">
                {{ isYearly ? plan.yearlyPrice : plan.monthlyPrice }}
              </span>
            </p>
            <p class="text-[18px] opacity-90 mt-6 ml-2">
              {{ isYearly ? '/yr' : '/mo' }}
            </p>
          </div>
          <div class="mt-4">
            <div>
              <div v-for="(feature, index) in plan.features" :key="index"
                class="flex gap-2 items-center text-[#666666] mb-2 text-[16px] font-[500] sm:font-[400]">
                <span>
                  <svg class="bg-black rounded-full mr-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.1627 13.5002L2.8877 9.22519L3.95645 8.15645L7.1627 11.3627L14.0439 4.48145L15.1127 5.5502L7.1627 13.5002Z"
                      fill="#34A853" />
                  </svg>
                </span>
                <span class="sm:text-[15px] text-[14px]">{{ feature }}</span>
              </div>
            </div>
          </div>
          <a :href="plan.link">
            <button :style="plan.buttonCss"
              class="inline-block mt-6 rounded-3xl sm:px-6 px-4 py-2 text-white sm:text-[15px] text-[14px] font-[600] text-center bg-blue-500 hover:bg-blue-600"
              :aria-label="plan.buttonText" :title="plan.buttonText">
              {{ plan.buttonText }}
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import plans from "~/store/plans.json";
import { reactive, ref } from "vue";

const isYearly = ref(false);
const plansData = reactive(plans);
</script>

<style scoped>
@media screen and (min-width: 700px) and (max-width: 1024px) {
  .two-column-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>