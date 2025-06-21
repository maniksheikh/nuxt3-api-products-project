<template>
  <div class="sm:mt-10 mt-0 sm:py-10 sm:w-[850px] w-[100%] m-auto">
    <div id="faq" class="bg-[#F7F6FB] sm:p-20 p-4">
      <div class="sm:w-[600px] w-full m-auto text-center sm:mb-20 mb-8">
        <h2 class="text-[#343434] sm:text-5xl text-3xl font-bold leading-relaxed">
          ALL <span class="ai-text">FAQs?</span>
        </h2>
      </div>
      <div class="w-full mx-auto space-y-4 mt-8 px-2 sm:px-5">
          <div v-for="(fa, i) in faqData" :key="i"
            class="faq-item bg-[#FFF6F1] shadow-md shadow-[#99999940] rounded-md overflow-hidden">
            <div @click="toggleQuestion(i)"
              class="faq-question cursor-pointer sm:text-lg text-base font-semibold p-4 sm:p-5 flex items-center justify-between">
              <span class="text-[#101010] font-medium sm:w-[90%] w-[85%]">{{ fa.question }}</span>
              <span class="text-2xl">
                <svg v-if="selectedQuestion === i" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12H4" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12M6 12h12" />
                </svg>
              </span>
            </div>
            <div v-if="selectedQuestion === i" class="border border-gray-400 w-[95%] mx-auto"></div>
            <div v-show="selectedQuestion === i" class="faq-answer p-3 sm:p-4 text-sm sm:text-base text-[#4D4845]">
              {{ fa.answer }}
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  layout: "default",
});

import faqs from "../store/faqs.json";
const selectedQuestion = ref(0);

const faqData = reactive(faqs);

const toggleQuestion = (index) => {
  selectedQuestion.value = selectedQuestion.value === index ? null : index;
};
</script>