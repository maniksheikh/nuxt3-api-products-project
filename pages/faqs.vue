<template>
  <navbar></navbar>
  <div>
    <div id="faq" class="bg-[#F7F6FB] p-20 md:px-4 md:pt-6 md:pb-4">
      <div class="w-[600px] m-auto text-center mb-20 sm:mb-8">
        <h2 class="text-[#343434] text-5xl font-bold leading-relaxed">
          ALL <span class="ai-text">FAQs?</span>
        </h2>
      </div>
      <div class="max-w-3xl mx-auto mb-10 sm:mb-1">
        <div class="flex flex-col gap-4">
          <div
            v-for="(faq, index) in faqData"
            :key="index"
            :class="{
              'bg-white p-4 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.06)] rounded':
                selectedQuestion === index,
              'p-4 bg-white rounded': selectedQuestion !== index,
            }"
          >
            <div
              @click="toggleQuestion(index)"
              class="flex items-center justify-between cursor-pointer"
            >
              <h2
                class="text-[#5b268f] text-lg sm:text-base opacity-80 font-bold"
              >
                {{ faq.question }}
              </h2>
              <button aria-label="faq" title="faq">
                <img
                  v-if="selectedQuestion === index"
                  decoding="async"
                  src="https://framerusercontent.com/images/1TNXJ0xGTIseQoEl8FpolMTl6fM.svg"
                  alt=""
                  style="
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: inherit;
                    object-position: center;
                    object-fit: cover;
                    image-rendering: auto;
                  "
                />
                <img
                  v-else
                  decoding="async"
                  src="https://framerusercontent.com/images/FFB4asQBLQBOqKryN8RZqqFVj3w.svg"
                  alt=""
                  style="
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: inherit;
                    object-position: center;
                    object-fit: cover;
                    image-rendering: auto;
                  "
                  sizes="16px"
                />
              </button>
            </div>

            <p
              v-if="selectedQuestion === index"
              class="text-[#938383] text-base sm:text-sm sm:leading-7 mt-3 leading-7"
            >
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    <script setup>
definePageMeta({
  layout: "simple",
});

import faqs from "~/static/faqs.json";
const selectedQuestion = ref(1);

const faqData = reactive(faqs);

const toggleQuestion = (index) => {
  selectedQuestion.value = selectedQuestion.value === index ? null : index;
};
</script>
    
    