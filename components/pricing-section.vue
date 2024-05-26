<template>
  <div class="rounded-xl max-w-[1500px] m-auto">
    <div class="flex sm:block py-4 sm:py-2">
      <div class="w-[520px] m-auto sm:w-[352px] md:w-[350px]">
        <h2
          class="text-[#2A2A2A] text-[56px] sm:text-[48px] md:text-[36px] font-[700] leading-relaxed"
        >
          Plans & Pricing
        </h2>
        <p class="text-black opacity-70 text-[18px] font-[400] leading-6 mt-3">
          Save Upto 50% with our Annual Plans:
        </p>
      </div>

      <div
        class="flex m-auto sm:w-full w-[340px] justify-center mt-10 sm:py-1 py-2 px-1 gap-2 bg-[#F0F0F0] rounded-[50px]"
      >
        <button
          @click="viewMonthlyPayment"
          class="text-base sm:text-[15px] sm:py-3 sm:px-6 py- px-4 text-[#464343] opacity-80 rounded-[50px] font-bold"
          :class="{
            'bg-gradient-to-br to-[white] from-[white] text-black':
              planType === 'monthly',
          }"
          aria-label="Monthly"
          title="Monthly"
        >
          Monthly
        </button>
        <button
          @click="viewAnnualPayment"
          class="text-base sm:text-[15px] sm:py-3 sm:px-6 py-2 px-3 text-[#464343] opacity-80 rounded-[50px] font-bold"
          :class="{
            'bg-gradient-to-br to-[white] from-[white] text-black':
              planType === 'annual',
          }"
          aria-label="Annual"
          title="Annual"
        >
          Annual
        </button>
        <button
          @click="viewLifetimePayment"
          class="text-base sm:text-[15px] sm:py-3 sm:px-6 py-2 px-3 text-[#464343] opacity-80 rounded-[50px] font-bold"
          :class="{
            'bg-gradient-to-br to-[white] from-[white] text-black':
              planType === 'lifetime',
          }"
          aria-label="Lifetime"
          title="Lifetime"
        >
          Lifetime
        </button>
      </div>
    </div>

    <div>
      <pricing :plans="plansData" />
    </div>
  </div>
</template>
  
  <script setup>
import { ref, computed } from "vue";
import plans from "~/static/plans.json";

const planType = ref("monthly");

const viewMonthlyPayment = () => {
  planType.value = "monthly";
};
const viewAnnualPayment = () => {
  planType.value = "annual";
};
const viewLifetimePayment = () => {
  planType.value = "lifetime";
};
const plansData = computed(() => {
  const selectedPlan = plans[planType.value];

  if (planType.value === "lifetime" && !selectedPlan) {
    return {
      name: "lifetime",
      price: "Your lifetime price",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    };
  }
  return selectedPlan;
});
</script>
  
  <style lang="scss" scoped></style>
  