<template>
  <div class="bg-[#fafafc]">
    <div class="mt-10-blue- py-10">
      <header class="mt-10 text-center py-8 font-sans">
        <h1 class="text-5xl font-bold leading-10 w-[540px] h-[65px] p-2 m-auto">
          Product Landing page.
        </h1>
        <p class="w-[400px] p-2 m-auto mt-1 text-xl leading-5">
          A short tagline or description goes here.
        </p>
        <button
          class="bg-blue-500 text-white px-6 py-2 rounded-md font-bold mt-4 hover:bg-sky-700"
          type="button"
        >
          GET STARTED
        </button>
      </header>

      <section>
        <div class="flex items-center font-sans mt-5">
          <div class="w-[50%] px-10">
            <h2 class="font-bold text-3xl text-[#91969a] py-2">
              Creative Multipurpose <br />
              Products <span class="text-[#da5f5c]">Template.</span> 
            </h2>
            <p class="text-gray-500 leading-6 py-3 font-bold">
              This template is specially designed for a Products company,  <br> that
              want`s something simple but professionaly.
            </p>
            <button class="items-center justify-center m-auto bg-blue-500 text-white px-6 py-2 rounded-md font-bold mt-4 hover:bg-sky-700"  type="button">Get Started</button>
          </div>
          <img
            class="w-[50%] h-[450px] cursor-pointer"
            src="https://spng.pngfind.com/pngs/s/575-5751987_technology-graphic-showing-different-kinds-of-technology-technology.png"
            data-original="https://spng.pngfind.com/pngs/s/575-5751987_technology-graphic-showing-different-kinds-of-technology-technology.png"
            alt="Technology Graphic Showing Different Kinds Of Technology - Technology Clipart Png, Transparent Png"
            title="Technology Graphic Showing Different Kinds Of Technology - Technology Clipart Png, Transparent Png"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Nuxt3 data fetching",
});
</script>

<style>
</style>