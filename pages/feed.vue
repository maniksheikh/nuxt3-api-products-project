<template>
  <div class="bg-gradient-to-r  from-[#2575fc] to-[#e939bd]">
    <div class="p-0 sm:w-[1300px] w-[100%] m-auto">
      <div class="sm:mt-10 mt-5 sm:py-16">
        <header class="mt-10 text-center mx-auto lg:w-[1200px] w-full space-y-4 px-2 md:px-0">
          <h1
            class="text-[40px] md:text-[52px] lg:text-[64px] leading-[50px] md:leading-[65px] lg:leading-[80px] opacity-90 w-auto md:w-[500px] lg:w-[550px] pt-1 font-semibold mx-auto">
            <span class="text-[#FF4F00]">Product</span>
            <span class="ml-4 italic text-[#a1c3eb] opacity-95">Landing</span> page.
          </h1>
          <p
            class="mt-7 w-auto md:w-[400px] p-2 mx-auto text-[18px] text-gray-200 md:text-[20px] lg:text-[22px] opacity-95 font-semibold leading-6">
            A short tagline or description goes here.
          </p>
          <nuxt-link to="/products/product">
            <button
              class="bg-[#FF4F00] mt-2 text-white px-4 py-2 rounded-3xl text-[16px] transition-all duration-300 ease-in-out hover:text-black hover:scale-110">
              GET STARTED
            </button>
          </nuxt-link>
        </header>
        <!-- Testimonial section  -->
        <div class="sm:mt-10 mt-10">
          <div class="sm:flex block sm:gap-20 m-auto sm:w-[1200px]">
            <div class="sm:w-[48%] w-[100%] text-center items-center justify-center m-auto px-2 sm:px-2">
              <h2
                class="sm:w-[554px] w-full font-bold sm:text-[46px] md:text-[38px] text-[32px] text-center text-[#5ada6b] py-2">
                <span class="text-[#a1c3eb]">Creative</span> Multipurpose
                Products
                <span class="text-[#da5f5c]">Template.</span>
              </h2>
              <p class="text-gray-200 leading-6 mt-3 sm:text-[18px] text-center py-1 sm:w-[490px] w-[100%] font-[400]">
                This template is specially designed for a Products company, that
                wants something simple but professional.
              </p>
              <button
                class="items-center justify-center m-auto bg-blue-500 text-white px-6 py-2 text-[14px] rounded-md font-[600] mt-4 hover:bg-sky-700"
                type="button">
                Get Started
              </button>
            </div>
            <div class="sm:w-[50%] w-[100%] sm:mt-0 mt-5 m-auto px-2 sm:px-0">
              <img class="w-full sm:h-[450px] cursor-pointer"
                src="https://themewagon.github.io/landwind/images/hero.png" />
            </div>
          </div>
        </div>
        <!-- Testimonial section  -->
        <div class="bg-white rounded-lg">
          <Vue3Marquee
            class="sm:flex items-center justify-center sm:items-center sm:justify-between sm:w-[60%] m-auto mt-20">
            <div
              class="flex text-center items-center justify-center w-[100%] m-auto py-6 sm:border-r-2 border-gray-200">
              <svg class="bg-red-100 rounded-full p-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="2rem"
                height="2rem" viewBox="0 0 24 24">
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                  <path fill="black"
                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.985 7.985 0 0 1 12 20a7.985 7.985 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984" />
                </g>
              </svg>
              <div class="px-4">
                <span class="font-bold text-xl">390+</span>
                <p class="text-gray-700 text-md">Users</p>
              </div>
            </div>
            <div
              class="flex text-center items-center justify-center w-[100%] m-auto py-6 sm:border-r-2 border-gray-200">
              <svg class="bg-red-100 rounded-full p-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="2rem"
                height="2rem" viewBox="0 0 512 512">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                  d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137" />
                <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="32" />
              </svg>
              <div class="px-4">
                <span class="font-bold text-xl">20+</span>
                <p class="text-gray-700 text-md">Locations</p>
              </div>
            </div>

            <div
              class="flex text-center items-center justify-center w-[100%] m-auto py-6 sm:border-r-2 border-gray-200">
              <svg class="bg-red-100 rounded-full p-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="2rem"
                height="2rem" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M2 4.6v4.8c0 .9.5 1.6 1.2 1.6h17.7c.6 0 1.2-.7 1.2-1.6V4.6C22 3.7 21.5 3 20.8 3H3.2C2.5 3 2 3.7 2 4.6M10 8V6H9v2zM5 8h2V6H5zm15 1H4V5h16zM2 14.6v4.8c0 .9.5 1.6 1.2 1.6h17.7c.6 0 1.2-.7 1.2-1.6v-4.8c0-.9-.5-1.6-1.2-1.6H3.2c-.7 0-1.2.7-1.2 1.6m8 3.4v-2H9v2zm-5 0h2v-2H5zm15 1H4v-4h16z" />
              </svg>
              <div class="px-4">
                <span class="font-bold text-xl">50+</span>
                <p class="text-gray-700 text-md">Servar</p>
              </div>
            </div>
            <div
              class="flex text-center items-center justify-center w-[100%] m-auto py-6 sm:border-r-2 border-gray-200">
              <svg class="bg-red-100 rounded-full p-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="2rem"
                height="2rem" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M18.72 14.76c.35-.85.54-1.76.54-2.76c0-.72-.11-1.41-.3-2.05c-.65.15-1.33.23-2.04.23A9.07 9.07 0 0 1 9.5 6.34a9.2 9.2 0 0 1-4.73 4.88c-.04.25-.04.52-.04.78A7.27 7.27 0 0 0 12 19.27c1.05 0 2.06-.23 2.97-.64c.57 1.09.83 1.63.81 1.63c-1.64.55-2.91.82-3.78.82c-2.42 0-4.73-.95-6.43-2.66a9 9 0 0 1-2.24-3.69H2v-4.55h1.09a9.09 9.09 0 0 1 15.33-4.6a9 9 0 0 1 2.47 4.6H22v4.55h-.06L18.38 18l-5.3-.6v-1.67h4.83zm-9.45-2.99c.3 0 .59.12.8.34a1.136 1.136 0 0 1 0 1.6c-.21.21-.5.33-.8.33c-.63 0-1.14-.5-1.14-1.13s.51-1.14 1.14-1.14m5.45 0c.63 0 1.13.51 1.13 1.14s-.5 1.13-1.13 1.13s-1.14-.5-1.14-1.13a1.14 1.14 0 0 1 1.14-1.14" />
              </svg>
              <div class="px-4">
                <span class="font-bold text-xl">95+</span>
                <p class="text-gray-700 text-md">Customer</p>
              </div>
            </div>
          </Vue3Marquee>
        </div>

        <!-- payment section  -->
        <div class="">
          <div class="bg-[#fffee7] sm:mt-32 mt-16 sm:py-10 rounded-md">
            <div class="sm:text-center sm:px-3 p-3 text-center sm:w-[600px] w-full sm:m-auto">
              <h1 class="font-[600] sm:text-[54px] text-[36px] opacity-95 text-[#2e2d35]">
                Trusted by World`s Most Favourite Brands
              </h1>
            </div>
            <div class="sm:flex items-center sm:w-[800px] sm:mt-20 mt-10 m-auto">
              <Vue3Marquee :clone="true" :duration="10" :direction="'left'"
                class="flex items-center sm:space-x-10 justify-between w-full">
                <div class="items-center justify-center w-[100%]">
                  <nuxt-link to="">
                    <img class="cursor-pointer"
                      src="https://static.vecteezy.com/system/resources/thumbnails/022/721/558/small/google-logo-for-search-site-free-png.png"
                      style="height: 70px" alt="Google Logo" />
                  </nuxt-link>
                </div>
                <div class="items-center justify-center w-[100%]">
                  <nuxt-link>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlr8-q5Gf77IvD7z9T48FUdTyHaZkY5gWh6w&amp;usqp=CAU"
                      class="cursor-pointer" style="height: 70px" alt="bKash Logo" />
                  </nuxt-link>
                </div>
                <div class="items-center justify-center w-[100%]">
                  <nuxt-link>
                    <img src="https://www.logo.wine/a/logo/PayPal/PayPal-Logo.wine.svg" class="cursor-pointer"
                      style="height: 70px" alt="PayPal Logo" />
                  </nuxt-link>
                </div>
                <div class="items-center justify-center w-[100%]">
                  <nuxt-link>
                    <img
                      src="https://businesspostbd.com/files/thumbs/daily-media/Dated/2021-/November/07/800x457/56.jpg"
                      class="cursor-pointer" style="height: 70px" alt="Business Post Logo" />
                  </nuxt-link>
                </div>
                <div class="items-center justify-center w-[100%]">
                  <nuxt-link>
                    <img src="https://logicoretech.com/wp-content/uploads/2021/05/ScaleLeap-logo_Full-Color.png"
                      class="cursor-pointer" style="height: 70px" alt="ScaleLeap Logo" />
                  </nuxt-link>
                </div>
              </Vue3Marquee>
            </div>
          </div>
        </div>
        <!--Review section  -->
        <div class="sm:mt-20 mt-16">
          <div class="sm:flex sm:gap-10 px-2 sm:px-0 border border-white rounded-md">
            <div class="sm:w-[50%] m-auto">
              <img class="sm:h-[700px] h-[450px] w-full sm:w-full cursor-pointer rounded-md object-cover justify-center"
                src="../assets/project-img.jpg" />
            </div>
            <div class="sm:w-[50%] w-[100%] mb-5 sm:mt-0 sm:mb-0 mt-5">
              <h1
                class="sm:text-[52px] text-[28px] text-white sm:w-[500px] w-[100%] sm:p-5 p-2 font-[500] leading-tight">
                Revolution Your Experience with Our Innovative Digital Product.
              </h1>
              <p class="sm:py-5 mt-3 p-1 sm:px-3 sm:mt-3 text-[white] opacity-70">
                Our Smart Home Security System offers 24/7 surveillance, motion
                detection, and smart access control. With environmental
                monitoring and integration with other smart devices, it provides
                comprehensive security. The user-friendly mobile app allows
                remote monitoring and customization. Enjoy peace of mind with
                our cutting-edge security solution.
              </p>
              <p class="sm:px-3 mt-3 p-1 sm:mt-3">
                With a range of fetures and customization options, our digital
                product can be tailord to meet the unique needs od each user.
              </p>
              <button
                class="sm:mt-5 mt-5 px-6 sm:ml-2 font-[600] text-white rounded-full py-2 bg-blue-400 transition-all duration-1000 ease-in-out hover:text-black hover:scale-110"
                type="button">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <!-- user section  -->
        <div class="sm:mt-32 mt-16 bg-white rounded-md">
          <h1
            class="sm:text-center text-center sm:text-[52px] text-[36px] leading-snug sm:w-[72%] w-[80%] m-auto font-[600]">
            <span class="text-[#FF4F00] font-[600]">Loved by</span>
            6000+ Happy Users ❤️
          </h1>
          <div class="sm:mt-12 mt-10">
            <Vue3Marquee :pause-on-hover="true" @on-pause="playState = 'paused'" @on-resume="playState = 'playing'"
              :clone="true" :duration="140" :direction="'reverse'">
              <div v-for="user in userData" :key="user.id" class="flex-none px-2 pb-5">
                <div class="h-[390px] w-[310px] gap-5 border border-gray-200 rounded-2xl overflow-hidden mx-auto">
                  <div class="p-4">
                    <div class="flex items-center">
                      <div class="w-12 h-12">
                        <img :src="user.image" alt="Malav Shah avatar"
                          class="w-full h-full object-cover rounded-full" />
                      </div>
                      <div class="ml-3">
                        <div class="text-[16px] font-500">{{ user.name }}</div>
                        <div class="text-[15px] text-gray-600">
                          {{ user.email }}
                        </div>
                      </div>
                      <div class="flex-grow"></div>
                      <div class="flex-none">
                        <a target="_blank" rel="nofollow" href="https://www.producthunt.com/posts/audionotes-pro">
                          <img :src="user.avatar" alt="product_hunt" class="w-5 h-5 object-contain" />
                        </a>
                      </div>
                    </div>
                    <div class="mt-3 flex">
                      <div v-for="(user, index) in user.svg" :key="index" class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" viewBox="0 0 128 128">
                          <path fill="#fdd835"
                            d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01" />
                          <path fill="#ffff8d"
                            d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13" />
                          <path fill="#f4b400"
                            d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97" />
                        </svg>
                      </div>
                    </div>

                    <div class="mt-2 text-gray-800 text-[15px] p-1 font-[400]">
                      {{ user.description }}
                    </div>
                  </div>
                </div>
              </div>
            </Vue3Marquee>
          </div>
        </div>

        <!-- Another chat cart  -->
        <div class="sm:mt-32 mt-16">
          <div class="sm:px-0 px-2">
            <div class="sm:grid sm:grid-cols-3 grid-cols-1 sm:gap-10 sm:space-y-0 space-y-5">
              <div v-for="chatSection in chatSectionData" :key="chatSection.id" :class="chatSection.class"
                :style="chatSection.bg"
                class="relative sm:w-full sm:h-[450px] h-[400px] w-[100%] m-auto sm:px-8 rounded-3xl border border-gray-300">
                <div class="sm:pt-14 p-10 sm:p-0 h-auto text-surface">
                  <div class="w-[48px]">
                    <img class="w-[48px] h-[48px]" decoding="async" sizes="48px" :src="chatSection.avatar" alt="" style="
                        display: block;
                        border-radius: inherit;
                        object-position: center;
                        object-fit: cover;
                        image-rendering: auto;
                      " />
                  </div>
                  <div class="sm:w-[300px] w-[300px] sm:m-auto sm:h-auto">
                    <h5 class="mb-3 mt-4 font-bold text-white sm:text-[23px] text-[22px] leading-tight">
                      {{ chatSection.header }}
                    </h5>
                    <p class="sm:mb-4 mb-2 sm:text-[18px] text-[15px] text-white font-[500]">
                      {{ chatSection.content }}
                    </p>
                  </div>
                </div>

                <div class="absolute left-0 bottom-0 overflow-hidden bg-cover px-2 bg-no-repeat w-full">
                  <img class="sm:h-[170px] h-[160px] w-full sm:w-full rounded-md m-auto" :src="chatSection.image"
                    alt="images" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- social cart system -->
        <div class="sm:mt-32 mt-16 bg-[#fffee7] rounded-md">
          <div class="sm:flex sm:gap-20 block items-center justify-between m-auto">
            <div class="sm:w-[50%] m-auto sm:pl-4 sm:px-0 px-2">
              <h2 class="sm:text-[46px] text-[30px] p-1 font-[600] opacity-90 leading-snug">
                Try Out Our Awesome <br />
                Feature Now and Enjoy <br />
                It`s Benefits.
              </h2>
              <div class="sm:mt-8 sm:flex sm:justify-between flex text-[14px] space-x-5 mt-5 mb-10">
                <button
                  class="rounded-md sm:px-5 px-4 p-2 bg-green-500 font-medium text-white transition-all duration-1000 ease-in-out hover:text-red-600 hover:scale-110"
                  type="button">
                  DOWUNLOAD NOW
                </button>
                <button
                  class="sm:mx-5 rounded-md px-2 p-2 text-green-700 font-medium border-green-300 border-2 transition-all duration-1000 ease-in-out hover:text-blue-600 hover:scale-105"
                  type="submit">
                  SIGN UP WITH GOOGLE
                </button>
              </div>
            </div>
            <div class="flex sm:w-[44%] w-[100%] h-auto m-auto items-center justify-center mb-14">
              <div class="relative px-2 sm:px-0">
                <img class="sm:h-[400px] h-auto sm:w-full w-[400px] m-auto object-cover cursor-pointer"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cf2UwFlf5zIy74vXQDViSooWXxBrWuNCaOwz_LwqgoC-FFP2lg3imtd3GpYvgzK17Zw&amp;usqp=CAU"
                  alt="3d Shapes PNG Images, Free Transparent 3d Shapes Download - KindPNG" />

                <div
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center leading-normal">
                  <h3 class="sm:text-6xl text-[32px] sm:font-bold font-[600]">
                    40+
                  </h3>
                  <span class="sm:font-bold font-[600] sm:opacity-70 opacity-100">Download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Another Custom Card system -->
        <div class="sm:mt-32">
          <div class="sm:w-[1200px] m-auto">
            <div class="sm:grid sm:grid-cols-3 sm:gap-10 space-y-7 sm:space-y-0 sm:px-2 px-1">
              <div v-for="customCart in customCartData" :key="customCart.id"
                class="p-2 sm:w-full h-auto rounded-3xl border mb-0 transition duration-300 ease-out hover:ease-in border-gray-300 hover:border-red-400 shadow-secondary-1">
                <div class="relative overflow-hidden bg-cover bg-no-repeat" data-twe-ripple-init
                  data-twe-ripple-color="light">
                  <nuxt-link to="#">
                    <img decoding="async" sizes="336.6667px" :src="customCart.image" alt="" style="
                        display: block;
                        width: 100%;
                        height: 100%;
                        border-radius: inherit;
                        object-position: center;
                        object-fit: cover;
                        image-rendering: auto;
                      " />
                  </nuxt-link>
                </div>
                <div class="sm:px-5 sm:pt-3 text-surface">
                  <div>
                    <img class="mb-3 w-[24px] h-[24px]" decoding="async" sizes="24px" :src="customCart.avatar" alt=""
                      style="
                        display: block;
                        border-radius: inherit;
                        object-position: center;
                        object-fit: cover;
                        image-rendering: auto;
                      " />
                  </div>
                  <h5 class="mb-2 opacity-90 sm:text-[20px] text-[19px] font-[600] leading-tight">
                    {{ customCart.header }}
                  </h5>
                  <p class="sm:text-[17px] text-[16px] text-gray-200 font-[400]">
                    {{ customCart.content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Another review section -->
        <div class="sm:mt-32 mt-16 sm:px-7 px-2 sm:py-5 py-2 bg-white rounded-md">
          <div>
            <header class="sm:text-5xl text-3xl font-semibold opacity-90 sm:mb-10 mb-5 p-4 text-center justify-center">
              <span class="text-[#FF4F00]">Testimonials</span> Review
            </header>
          </div>
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="slide in Math.ceil(reviews.length / 3)" :key="slide">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:pb-10 pb-5">
                  <div v-for="review in reviews.slice((slide - 1) * 3, slide * 3)" :key="review.id"
                    class="p-5 border-2 border-gray-300 rounded-xl shadow-lg">
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

        <!-- Pricing section  -->
        <div class="sm:mt-32 mt-20 ">
          <div class="">
            <div class="bg-white rounded-md">
              <div>
                <pricing></pricing>
              </div>
            </div>
          </div>
        </div>

        <!-- Free faq section  -->
        <div class="sm:flex m-auto bg-[#fffee7] sm:gap-10 sm:mb-0 mb-12 sm:mt-20 sm:px-0 px-2 rounded-md">
          <div id="faq" class="sm:w-[50%] m-auto sm:p-0">
            <div class="sm:w-[600px] m-auto text-center mb-10">
              <h2 class="text-[#343434] sm:text-[42px] text-[34px] font-[600] leading-relaxed">
                Frequently <span class="ai-text">Asked FAQs Question</span>
              </h2>
              <p class="opacity-70 sm:text-[17px] mt-3">
                What features does the management tool offer?
              </p>
            </div>
            <div class="sm:max-w-3xl mx-auto sm:mb-5 mb-10 sm:px-3">
              <div class="flex flex-col gap-4">
                <div v-for="(faq, index) in faqData" :key="index" :class="{
                  'bg-white sm:p-4 p-2  shadow-[0px_0px_16px_0px_rgba(0,0,0,0.06)] rounded':
                    selectedQuestion === index,
                  'sm:p-4 p-2 bg-white rounded': selectedQuestion !== index,
                }">
                  <div @click="toggleQuestion(index)" class="flex items-center justify-between cursor-pointer">
                    <h2 class="text-[#5b268f] text-[16px] sm:text-base opacity-80 font-[600]">
                      {{ faq.question }}
                    </h2>
                    <button aria-label="faq" title="faq">
                      <svg v-if="selectedQuestion === index" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none">
                        <path d="M7.41 8.57812L12 13.1681L16.59 8.57812L18 9.99813L12 15.9981L6 9.99813L7.41 8.57812Z"
                          fill="#5B4747" />
                      </svg>
                      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <path d="M16.59 15.4219L12 10.8319L7.41 15.4219L6 14.0019L12 8.00187L18 14.0019L16.59 15.4219Z"
                          fill="#5B4747" />
                      </svg>
                    </button>
                  </div>
                  <p v-if="selectedQuestion === index" class="text-[#938383] sm:text-base text-[15px] mt-3 leading-7">
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="sm:w-[50%] w-[100%] m-auto px-2 sm:px-0">
            <img src="https://smallimg.pngkey.com/png/small/29-297488_shapes-icon-3d-shapes-clipart-png.png"
              class="sm:w-[100%] w-[100%] sm:h-[500px] cursor-pointer object-cover"
              alt="3d Shapes PNG, Transparent 3d Shapes PNG Image Free Download - PNGkey" />
          </div>
        </div>

        <!-- Footer section  -->
        <div>
          <footer></footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Nuxt3 api Products",
});
import { Vue3Marquee } from "vue3-marquee";
import { ref, reactive } from "vue";

import user from "~/store/user.json";
import reviewSection from "~/store/review.json";
import chatSection from "~/store/chatSection.json";
import customCart from "~/store/cartSection.json";
import faqs from "~/store/faqs.json";

const userData = reactive(user);
const reviews = reactive(reviewSection);
const customCartData = reactive(customCart);
const chatSectionData = reactive(chatSection);
const faqData = reactive(faqs);

const selectedQuestion = ref(null);

const toggleQuestion = (index) => {
  selectedQuestion.value = selectedQuestion.value === index ? null : index;
};

// var reviews = [
//   {
//     id: 1,
//     svg: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
//     description: "Great service!",
//     avatar: "avatar1.png",
//     name: "John Doe",
//     content: "Lorem ipsum dolor sit amet.",
//   },
//   {
//     id: 2,
//     svg: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
//     description: "Amazing experience!",
//     avatar: "avatar2.png",
//     name: "Jane Smith",
//     content: "Consectetur adipiscing elit.",
//   },
//   // Add more review objects as needed
// ];

// document.addEventListener("DOMContentLoaded", function () {
//   new Swiper(".swiper-container", {
//     modules: [Swiper.Autoplay, Swiper.EffectCreative],
//     slidesPerView: 1,
//     loop: true,
//     autoplay: {
//       delay: 8000,
//       disableOnInteraction: true,
//     },
//     effect: "creative",
//     creativeEffect: {
//       prev: {
//         shadow: false,
//         translate: ["-20%", 0, -1],
//       },
//       next: {
//         translate: ["100%", 0, 0],
//       },
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// });
</script>