<template>
  <div class="p-0 m-0">
    <div class="bg-[rgb(250,250,252)]">
      <div class="sm:mt-10 mt-5 sm:py-10">
        <header
          class="mt-10 text-center m-auto sm:w-[1200px] w-[100%] space-y-3 sm:px-0 px-2"
        >
          <h1
            class="text-[36px] sm:text-[56px] leading-[40px] sm:leading-[70px] sm:opacity-85 w-auto sm:w-[550px] pt-1 font-medium m-auto"
          >
            <span class="text-[#FF4F00]">Product</span>
            <span class="ml-4 italic opacity-90">Landing</span> page.
          </h1>
          <p
            class="mt-7 w-auto sm:w-[400px] p-2 m-auto text-[16px] sm:text-[18px] opacity-90 font-semibold leading-5 sm:leading-5"
          >
            A short tagline or description goes here.
          </p>
          <nuxt-link to="">
            <button
              class="bg-[#FF4F00] text-white sm:px-7 px-3 sm:py-3 py-2 rounded-3xl text-[14px] sm:mt-5 transition-all duration-1000 ease-in-out hover:text-black hover:scale-110"
            >
              GET STARTED
            </button>
          </nuxt-link>
        </header>

        <!-- Testimonial section  -->
        <div class="sm:mt-10 mt-10">
          <div class="sm:flex block sm:gap-20 m-auto sm:w-[1200px]">
            <div
              class="sm:w-[46%] w-[100%] text-center items-center justify-center m-auto px-2 sm:px-0"
            >
              <h2
                class="sm:w-[554px] w-full font-bold sm:text-[46px] text-[32px] text-center text-[#91969a] py-2"
              >
                <span class="text-[#ff4ff2]">Creative</span> Multipurpose
                Products
                <span class="text-[#da5f5c]">Template.</span>
              </h2>
              <p
                class="text-gray-500 leading-6 mt-3 sm:text-[18px] text-center py-1 sm:w-[490px] w-[100%] font-[400]"
              >
                This template is specially designed for a Products company, that
                want`s something simple but professionaly.
              </p>
              <button
                class="items-center justify-center m-auto bg-blue-500 text-white px-6 py-2 text-[14px] rounded-md font-[600] mt-4 hover:bg-sky-700"
                type="button"
              >
                Get Started
              </button>
            </div>
            <div class="sm:w-[50%] w-[100%] sm:mt-0 mt-5 m-auto px-2 sm:px-0">
              <img
                class="w-full sm:h-[450px] cursor-pointer"
                src="https://themewagon.github.io/landwind/images/hero.png"
              />
            </div>
          </div>
        </div>

        <!-- Testimonial section  -->
        <div>
          <Vue3Marquee
            class="bg-[#ffffff] sm:flex items-center justify-center sm:items-center sm:justify-between sm:w-[60%] m-auto mt-20"
          >
            <div
              class="flex text-center items-center justify-center w-[100%] m-auto py-6 sm:border-r-2 border-gray-200"
            >
              <svg
                class="bg-red-100 rounded-full p-1 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                  />
                  <path
                    fill="black"
                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.985 7.985 0 0 1 12 20a7.985 7.985 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984"
                  />
                </g>
              </svg>
              <div class="px-4">
                <span class="font-bold text-xl">390+</span>
                <p class="text-gray-700 text-md">Users</p>
              </div>
            </div>
            <div
              class="flex text-center items-center justify-center w-[100%] m-auto py-6 sm:border-r-2 border-gray-200"
            >
              <svg
                class="bg-red-100 rounded-full p-1 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"
                />
                <circle
                  cx="256"
                  cy="192"
                  r="48"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
              <div class="px-4">
                <span class="font-bold text-xl">20+</span>
                <p class="text-gray-700 text-md">Locations</p>
              </div>
            </div>

            <div
              class="flex text-center items-center justify-center w-[100%] m-auto py-6 sm:border-r-2 border-gray-200"
            >
              <svg
                class="bg-red-100 rounded-full p-1 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M2 4.6v4.8c0 .9.5 1.6 1.2 1.6h17.7c.6 0 1.2-.7 1.2-1.6V4.6C22 3.7 21.5 3 20.8 3H3.2C2.5 3 2 3.7 2 4.6M10 8V6H9v2zM5 8h2V6H5zm15 1H4V5h16zM2 14.6v4.8c0 .9.5 1.6 1.2 1.6h17.7c.6 0 1.2-.7 1.2-1.6v-4.8c0-.9-.5-1.6-1.2-1.6H3.2c-.7 0-1.2.7-1.2 1.6m8 3.4v-2H9v2zm-5 0h2v-2H5zm15 1H4v-4h16z"
                />
              </svg>
              <div class="px-4">
                <span class="font-bold text-xl">50+</span>
                <p class="text-gray-700 text-md">Servar</p>
              </div>
            </div>
            <div
              class="flex text-center items-center justify-center w-[100%] m-auto py-6 sm:border-r-2 border-gray-200"
            >
              <svg
                class="bg-red-100 rounded-full p-1 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.72 14.76c.35-.85.54-1.76.54-2.76c0-.72-.11-1.41-.3-2.05c-.65.15-1.33.23-2.04.23A9.07 9.07 0 0 1 9.5 6.34a9.2 9.2 0 0 1-4.73 4.88c-.04.25-.04.52-.04.78A7.27 7.27 0 0 0 12 19.27c1.05 0 2.06-.23 2.97-.64c.57 1.09.83 1.63.81 1.63c-1.64.55-2.91.82-3.78.82c-2.42 0-4.73-.95-6.43-2.66a9 9 0 0 1-2.24-3.69H2v-4.55h1.09a9.09 9.09 0 0 1 15.33-4.6a9 9 0 0 1 2.47 4.6H22v4.55h-.06L18.38 18l-5.3-.6v-1.67h4.83zm-9.45-2.99c.3 0 .59.12.8.34a1.136 1.136 0 0 1 0 1.6c-.21.21-.5.33-.8.33c-.63 0-1.14-.5-1.14-1.13s.51-1.14 1.14-1.14m5.45 0c.63 0 1.13.51 1.13 1.14s-.5 1.13-1.13 1.13s-1.14-.5-1.14-1.13a1.14 1.14 0 0 1 1.14-1.14"
                />
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
          <div class="bg-[#fffee7] sm:mt-32 mt-16 sm:py-10">
            <div
              class="sm:text-center sm:px-3 p-3 text-center sm:w-[600px] w-full sm:m-auto"
            >
              <h1
                class="font-[600] sm:text-[54px] text-[36px] opacity-95 text-[#2e2d35]"
              >
                Trusted by World`s Most Favourite Brands
              </h1>
            </div>
            <div
              class="sm:flex items-center sm:w-[800px] sm:mt-20 mt-10 m-auto"
            >
              <Vue3Marquee
                :clone="true"
                :duration="10"
                :direction="'reverse'"
                class="flex items-center sm:space-x-10 justify-between w-[65%] m-auto"
              >
                <div class="items-center justify-center w-[100%]">
                  <nuxt-link to="">
                    <img
                      class="cursor-pointer"
                      src="https://static.vecteezy.com/system/resources/thumbnails/022/721/558/small/google-logo-for-search-site-free-png.png"
                      jsaction="VQAsE"
                      style="height: 70px"
                      alt="Google Logo PNGs for Free Download"
                      jsname="kn3ccd"
                      aria-hidden="false"
                    />
                  </nuxt-link>
                </div>

                <div class="items-center justify-center w-[100%]">
                  <nuxt-link>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlr8-q5Gf77IvD7z9T48FUdTyHaZkY5gWh6w&amp;usqp=CAU"
                      jsaction="VQAsE"
                      class="cursor-pointer"
                      alt="bKash Logo • Download bKash vector logo SVG • Logotyp.us"
                      jsname="JuXqh"
                      style="height: 70px"
                      data-iml="401289.1000000015"
                    />
                  </nuxt-link>
                </div>
                <div class="items-center justify-center w-[100%]">
                  <nuxt-link>
                    <svg
                      class="h-10 cursor-pointer hover:text-gray-900 dark:hover:text-white"
                      viewBox="0 0 124 38"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50.8299 17.3952C54.7246 18.342 56.3124 19.8121 56.3124 22.4701C56.3124 25.615 53.9096 27.6473 50.1907 27.6473C47.5621 27.6473 45.1252 26.7135 43.1446 24.9452C43.104 24.9089 43.0791 24.8582 43.0754 24.8038C43.0716 24.7494 43.0893 24.6957 43.1246 24.6542L44.8747 22.5724C44.8926 22.5512 44.9145 22.5336 44.9392 22.5209C44.9639 22.5082 44.9909 22.5005 45.0185 22.4983C45.0462 22.4961 45.0741 22.4995 45.1005 22.5082C45.1269 22.5169 45.1513 22.5307 45.1723 22.5489C46.8747 24.0226 48.3966 24.6506 50.2619 24.6506C51.9419 24.6506 52.9857 23.9232 52.9857 22.7541C52.9857 21.6986 52.4694 21.1088 49.4104 20.4043C45.8174 19.5351 43.7374 18.4108 43.7374 15.2323C43.7374 12.2686 46.1484 10.1986 49.5991 10.1986C51.9455 10.1986 53.9548 10.8937 55.7384 12.3244C55.8243 12.3938 55.8419 12.5185 55.7778 12.609L54.2165 14.8084C54.2002 14.831 54.1796 14.8501 54.1558 14.8647C54.1321 14.8793 54.1057 14.8891 54.0781 14.8935C54.0506 14.8978 54.0224 14.8967 53.9953 14.8902C53.9682 14.8837 53.9427 14.8718 53.9202 14.8554C52.4218 13.7381 50.9928 13.1959 49.5509 13.1959C48.0643 13.1959 47.0646 13.9104 47.0646 14.9718C47.0646 16.095 47.635 16.6302 50.8305 17.3934L50.8299 17.3952ZM64.7256 14.2432C63.1144 14.2432 61.7924 14.8783 60.7016 16.1779V14.7137C60.7016 14.6582 60.6795 14.6049 60.6403 14.5657C60.601 14.5264 60.5478 14.5043 60.4922 14.5043H57.6308C57.5752 14.5043 57.522 14.5264 57.4827 14.5657C57.4435 14.6049 57.4214 14.6582 57.4214 14.7137V30.9851C57.4214 31.0998 57.5155 31.1939 57.6308 31.1939H60.4928C60.6087 31.1939 60.7028 31.0998 60.7028 30.9846V25.8479C61.793 27.0711 63.1156 27.6697 64.7274 27.6697C67.7235 27.6697 70.755 25.3645 70.755 20.9565C70.755 16.5484 67.7218 14.2432 64.7256 14.2432ZM67.4248 20.9571C67.4248 23.2011 66.0429 24.7676 64.0635 24.7676C62.1053 24.7676 60.6293 23.1299 60.6293 20.9571C60.6293 18.7842 62.1053 17.1465 64.0635 17.1465C66.0111 17.1465 67.4254 18.7489 67.4254 20.9571H67.4248ZM78.5255 14.2432C74.6679 14.2432 71.6465 17.2129 71.6465 21.0059C71.6465 24.7565 74.6467 27.695 78.4773 27.695C82.3485 27.695 85.3793 24.7347 85.3793 20.9571C85.3793 17.1923 82.3684 14.2427 78.5249 14.2427L78.5255 14.2432ZM78.5249 24.7906C76.4726 24.7906 74.926 23.1423 74.926 20.9565C74.926 18.7618 76.4197 17.1694 78.4779 17.1694C80.542 17.1694 82.1003 18.8177 82.1003 21.0047C82.1003 23.1981 80.5961 24.79 78.5249 24.79V24.7906ZM93.6168 14.5043C93.7326 14.5043 93.8261 14.5984 93.8261 14.7137V17.1735C93.8262 17.201 93.8208 17.2282 93.8104 17.2536C93.7999 17.279 93.7846 17.3021 93.7652 17.3215C93.7458 17.341 93.7227 17.3564 93.6974 17.3669C93.672 17.3774 93.6448 17.3829 93.6173 17.3829H90.4683V23.2993C90.4683 24.2343 90.8788 24.6506 91.7973 24.6506C92.3818 24.6538 92.9582 24.5145 93.4768 24.2449C93.5089 24.229 93.5444 24.2215 93.5802 24.2232C93.6159 24.2249 93.6507 24.2356 93.6811 24.2545C93.7115 24.2733 93.7366 24.2996 93.7541 24.3308C93.7715 24.3621 93.7807 24.3973 93.7808 24.433V26.7747C93.7808 26.8494 93.7397 26.9199 93.675 26.957C92.8723 27.4115 92.0208 27.6232 90.9934 27.6232C88.4689 27.6232 87.1887 26.3195 87.1887 23.7468V17.3834H85.8127C85.7853 17.3834 85.7581 17.3779 85.7328 17.3673C85.7075 17.3568 85.6846 17.3413 85.6652 17.3219C85.6459 17.3024 85.6306 17.2794 85.6202 17.254C85.6098 17.2287 85.6044 17.2015 85.6045 17.1741V14.7137C85.6045 14.5984 85.6974 14.5043 85.8127 14.5043H87.1887V11.2841C87.1887 11.1689 87.2828 11.0748 87.3993 11.0748H90.2607C90.3766 11.0748 90.4701 11.1689 90.4701 11.2841V14.5043H93.6191H93.6168ZM109.48 14.5167C109.566 14.5167 109.644 14.5696 109.675 14.6519L113.018 23.3751L116.07 14.6566C116.085 14.6155 116.112 14.5798 116.147 14.5545C116.183 14.5293 116.225 14.5156 116.269 14.5155H119.248C119.282 14.5155 119.316 14.5238 119.346 14.5398C119.376 14.5558 119.402 14.5789 119.421 14.6072C119.441 14.6354 119.452 14.668 119.456 14.7019C119.46 14.7359 119.455 14.7702 119.442 14.8019L114.477 27.6332C113.448 30.2812 112.279 31.2656 110.166 31.2656C109.036 31.2656 108.122 31.0316 107.108 30.4835C107.062 30.4584 107.027 30.4163 107.01 30.366C106.993 30.3157 106.997 30.261 107.019 30.213L107.989 28.0843C108.001 28.058 108.018 28.0345 108.04 28.0151C108.061 27.9957 108.086 27.9808 108.113 27.9714C108.14 27.9626 108.169 27.9595 108.198 27.9622C108.227 27.9649 108.255 27.9734 108.28 27.9872C108.823 28.2842 109.354 28.4342 109.859 28.4342C110.482 28.4342 110.939 28.2295 111.404 27.1981L107.311 17.3834H104.638V27.201C104.638 27.3169 104.544 27.4109 104.429 27.4109H101.567C101.539 27.4109 101.512 27.4055 101.486 27.395C101.461 27.3844 101.438 27.3689 101.418 27.3494C101.399 27.3299 101.384 27.3068 101.373 27.2813C101.363 27.2558 101.357 27.2286 101.357 27.201V17.3834H99.9824C99.9269 17.383 99.8738 17.3607 99.8345 17.3215C99.7952 17.2822 99.773 17.229 99.7725 17.1735V14.7019C99.7725 14.5861 99.8666 14.492 99.9818 14.492H101.357V13.8863C101.357 11.0719 102.754 9.58291 105.398 9.58291C106.484 9.58291 107.209 9.75638 107.777 9.92398C107.866 9.95162 107.925 10.0334 107.925 10.1251V12.5361C107.926 12.5695 107.918 12.6024 107.903 12.6322C107.888 12.662 107.866 12.6878 107.839 12.7074C107.813 12.727 107.781 12.7398 107.748 12.7448C107.715 12.7498 107.682 12.7468 107.65 12.7361C107.113 12.5573 106.634 12.4385 106.038 12.4385C105.038 12.4385 104.591 12.9578 104.591 14.1215V14.5167H109.479H109.48ZM98.2289 14.5043C98.3441 14.5043 98.4382 14.5984 98.4382 14.7137V27.2004C98.4382 27.3157 98.3441 27.4098 98.2283 27.4098H95.3662C95.3106 27.4098 95.2573 27.3877 95.218 27.3485C95.1786 27.3092 95.1564 27.256 95.1563 27.2004V14.7137C95.1563 14.5984 95.2504 14.5043 95.3656 14.5043H98.2277H98.2289ZM96.8122 8.81903C97.3565 8.81903 97.8786 9.03525 98.2634 9.42013C98.6483 9.80502 98.8645 10.327 98.8645 10.8713C98.8645 11.4156 98.6483 11.9377 98.2634 12.3225C97.8786 12.7074 97.3565 12.9236 96.8122 12.9236C96.2679 12.9236 95.7459 12.7074 95.361 12.3225C94.9762 11.9377 94.7599 11.4156 94.7599 10.8713C94.7599 10.327 94.9762 9.80502 95.361 9.42013C95.7459 9.03525 96.2679 8.81903 96.8122 8.81903ZM121.886 18.5184C121.621 18.5194 121.359 18.468 121.114 18.3671C120.869 18.2663 120.646 18.118 120.459 17.9307C120.272 17.7435 120.124 17.5211 120.023 17.2763C119.922 17.0314 119.871 16.7691 119.872 16.5043C119.872 16.2385 119.924 15.9752 120.026 15.7296C120.127 15.484 120.277 15.2608 120.465 15.0729C120.653 14.8849 120.876 14.7358 121.122 14.6341C121.367 14.5324 121.63 14.4801 121.896 14.4802C122.161 14.4791 122.423 14.5303 122.668 14.631C122.913 14.7318 123.135 14.88 123.323 15.0671C123.51 15.2543 123.658 15.4766 123.759 15.7214C123.86 15.9661 123.911 16.2284 123.91 16.4931C123.91 16.7591 123.858 17.0225 123.756 17.2682C123.655 17.514 123.506 17.7373 123.318 17.9254C123.13 18.1135 122.906 18.2627 122.661 18.3646C122.415 18.4664 122.152 18.5189 121.886 18.519V18.5184ZM121.896 14.6808C120.865 14.6808 120.084 15.5011 120.084 16.5049C120.084 17.5087 120.859 18.3179 121.886 18.3179C122.917 18.3179 123.699 17.4981 123.699 16.4937C123.699 15.4899 122.922 14.6808 121.896 14.6808ZM122.343 16.7007L122.912 17.4981H122.432L121.92 16.7666H121.479V17.4981H121.077V15.3841H122.02C122.51 15.3841 122.834 15.6358 122.834 16.0586C122.834 16.4055 122.634 16.6172 122.343 16.6995L122.343 16.7007ZM122.002 15.7469H121.478V16.4149H122.002C122.264 16.4149 122.419 16.2867 122.419 16.0797C122.419 15.8622 122.264 15.7463 122.002 15.7463V15.7469ZM18.9768 0.305176C8.75288 0.305176 0.464844 8.70847 0.464844 18.933C0.464256 28.54 7.78083 36.2953 17.1462 37.4714H20.8074C30.1728 36.2953 37.4893 28.54 37.4893 18.9324C37.4893 8.70847 29.2007 0.305176 18.9774 0.305176H18.9768ZM27.4665 27.0064C27.3877 27.1359 27.284 27.2486 27.1616 27.3379C27.0391 27.4273 26.9002 27.4917 26.7528 27.5273C26.6054 27.5629 26.4525 27.5691 26.3027 27.5455C26.1529 27.5219 26.0093 27.469 25.88 27.3898C21.5325 24.733 16.0612 24.1331 9.61732 25.605C9.46966 25.639 9.31676 25.6435 9.16736 25.6183C9.01796 25.5931 8.87499 25.5387 8.74664 25.4582C8.61829 25.3777 8.50707 25.2726 8.41934 25.1491C8.33162 25.0256 8.26911 24.886 8.23539 24.7382C8.20146 24.5905 8.19701 24.4375 8.22229 24.2881C8.24756 24.1386 8.30207 23.9956 8.3827 23.8672C8.46332 23.7389 8.56848 23.6277 8.69214 23.54C8.8158 23.4523 8.95554 23.3899 9.10336 23.3563C16.1553 21.745 22.204 22.439 27.0837 25.4204C27.3446 25.5803 27.5314 25.8371 27.603 26.1346C27.6747 26.4321 27.6254 26.7458 27.4659 27.007L27.4665 27.0064ZM29.7317 21.9656C29.5314 22.2916 29.2099 22.5248 28.8377 22.6139C28.4656 22.703 28.0733 22.6407 27.747 22.4407C22.7721 19.3828 15.1862 18.4966 9.29977 20.2837C8.93342 20.3943 8.53819 20.3552 8.2006 20.175C7.86301 19.9948 7.61058 19.6882 7.49856 19.3223C7.26922 18.5578 7.6985 17.7539 8.46121 17.5228C15.1856 15.4823 23.5436 16.4702 29.2577 19.9809C29.5837 20.1813 29.8168 20.5029 29.9058 20.875C29.9948 21.2472 29.9324 21.6394 29.7323 21.9656H29.7317ZM29.9269 16.7166C23.9594 13.173 14.1165 12.8472 8.42004 14.5761C7.98054 14.7093 7.50613 14.6624 7.10118 14.4458C6.69622 14.2292 6.3939 13.8606 6.26071 13.4211C6.12752 12.9816 6.17437 12.5072 6.39096 12.1023C6.60756 11.6973 6.97615 11.395 7.41565 11.2618C13.9548 9.27712 24.8256 9.66053 31.6952 13.7375C31.8908 13.8535 32.0617 14.0069 32.198 14.1889C32.3343 14.371 32.4334 14.5781 32.4897 14.7984C32.5459 15.0188 32.5582 15.248 32.5258 15.4731C32.4934 15.6982 32.417 15.9148 32.3009 16.1103C32.185 16.3061 32.0316 16.477 31.8495 16.6134C31.6674 16.7498 31.4603 16.849 31.2398 16.9053C31.0194 16.9615 30.79 16.9738 30.5648 16.9413C30.3397 16.9088 30.1231 16.8323 29.9275 16.716L29.9269 16.7166Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </nuxt-link>
                </div>
                <div class="items-center justify-center w-[100%]">
                  <nuxt-link>
                    <img
                      src="https://www.logo.wine/a/logo/PayPal/PayPal-Logo.wine.svg"
                      jsaction="VQAsE"
                      class="cursor-pointer"
                      style="height: 70px"
                      alt="Download bKash Logo in SVG Vector or PNG File Format - Logo.wine"
                      jsname="kn3ccd"
                      aria-hidden="false"
                    />
                  </nuxt-link>
                </div>

                <div class="items-center justify-center w-[100%]">
                  <nuxt-link>
                    <img
                      src="https://businesspostbd.com/files/thumbs/daily-media/Dated/2021-/November/07/800x457/56.jpg"
                      jsaction="VQAsE"
                      class="cursor-pointer"
                      style="height: 70px"
                      alt="bKash relaunches digital payroll solution - The Business Post"
                      jsname="kn3ccd"
                      aria-hidden="false"
                    />
                  </nuxt-link>
                </div>
                <div class="items-center justify-center w-[100%]">
                  <nuxt-link to="">
                    <img
                      src="https://logicoretech.com/wp-content/uploads/2021/05/ScaleLeap-logo_Full-Color.png"
                      jsaction="VQAsE"
                      class="cursor-pointer"
                      style="height: 70px"
                      alt="ClickUp Services – LogiCore Tech – Professional Services"
                      jsname="kn3ccd"
                      aria-hidden="false"
                    />
                  </nuxt-link>
                </div>
              </Vue3Marquee>
            </div>
          </div>
        </div>
        <!-- Review section  -->
        <div class="sm:mt-20 mt-16">
          <div class="sm:flex sm:gap-10 px-2 sm:px-0">
            <div class="sm:w-[50%] m-auto">
              <img
                class="sm:h-[700px] h-[450px] w-full sm:w-full cursor-pointer rounded-md object-cover justify-center"
                src="../assets/project-img.jpg"
              />
            </div>
            <div class="sm:w-[50%] w-[100%] mb-5 sm:mt-0 sm:mb-0 mt-5">
              <h1
                class="sm:text-[52px] text-[28px] sm:w-[500px] w-[100%] sm:p-5 p-2 font-[500] leading-tight"
              >
                Revolution Your Experience with Our Innovative Digital Product.
              </h1>
              <p
                class="sm:py-5 mt-3 p-1 sm:px-3 sm:mt-3 text-[#000007] opacity-70"
              >
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
                type="button"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <hr />

        <!-- user section  -->
        <div class="sm:mt-32 mt-16">
          <h1
            class="sm:text-center text-center sm:text-[52px] text-[36px] leading-snug sm:w-[72%] w-[80%] m-auto font-[600]"
          >
            <span class="text-[#FF4F00] font-[600]">Loved by</span>
            6000+ Happy Users ❤️
          </h1>
          <div class="sm:mt-12 mt-10">
            <Vue3Marquee
              :pause-on-hover="true"
              @on-pause="playState = 'paused'"
              @on-resume="playState = 'playing'"
              :clone="true"
              :duration="140"
              :direction="'reverse'"
            >
              <div
                v-for="user in userData"
                :key="user.id"
                class="flex-none px-2"
              >
                <div
                  class="h-[390px] w-[310px] gap-5 bg-white border border-gray-200 rounded-2xl overflow-hidden mx-auto"
                >
                  <div class="p-4">
                    <div class="flex items-center">
                      <div class="w-12 h-12">
                        <img
                          :src="user.image"
                          alt="Malav Shah avatar"
                          class="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div class="ml-3">
                        <div class="text-[16px] font-500">{{ user.name }}</div>
                        <div class="text-[15px] text-gray-600">
                          {{ user.email }}
                        </div>
                      </div>
                      <div class="flex-grow"></div>
                      <div class="flex-none">
                        <a
                          target="_blank"
                          rel="nofollow"
                          href="https://www.producthunt.com/posts/audionotes-pro"
                        >
                          <img
                            :src="user.avatar"
                            alt="product_hunt"
                            class="w-5 h-5 object-contain"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="mt-3 flex">
                      <div
                        v-for="(user, index) in user.svg"
                        :key="index"
                        class="flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23px"
                          height="23px"
                          viewBox="0 0 128 128"
                        >
                          <path
                            fill="#fdd835"
                            d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
                          />
                          <path
                            fill="#ffff8d"
                            d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
                          />
                          <path
                            fill="#f4b400"
                            d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
                          />
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
            <div
              class="sm:grid sm:grid-cols-3 grid-cols-1 sm:gap-10 sm:space-y-0 space-y-5"
            >
              <div
                v-for="chatSection in chatSectionData"
                :key="chatSection.id"
                :class="chatSection.class"
                :style="chatSection.bg"
                class="relative sm:w-full sm:h-[450px] h-[400px] w-[100%] m-auto sm:px-8 rounded-3xl border border-gray-300 dark:bg-surface-dark"
              >
                <div class="sm:pt-14 p-10 h-auto text-surface dark:text-white">
                  <div class="w-[48px]">
                    <img
                      class="w-[48px] h-[48px]"
                      decoding="async"
                      sizes="48px"
                      :src="chatSection.avatar"
                      alt=""
                      style="
                        display: block;
                        border-radius: inherit;
                        object-position: center;
                        object-fit: cover;
                        image-rendering: auto;
                      "
                    />
                  </div>
                  <div class="sm:w-[300px] w-[250px] sm:m-auto sm:h-auto">
                    <h5
                      class="mb-3 mt-4 font-bold text-white sm:text-[23px] text-[22px] leading-tight"
                    >
                      {{ chatSection.header }}
                    </h5>
                    <p
                      class="sm:mb-4 mb-2 sm:text-[18px] text-[15px] text-white font-[500]"
                    >
                      {{ chatSection.content }}
                    </p>
                  </div>
                </div>

                <div
                  class="absolute left-0 bottom-0 overflow-hidden bg-cover px-2 bg-no-repeat w-full"
                >
                  <img
                    class="sm:h-[200px] h-[150px] w-full sm:w-full rounded-md m-auto"
                    :src="chatSection.image"
                    alt="images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- social cart system -->
        <div class="sm:mt-32 mt-16 bg-[#fffee7]">
          <div
            class="sm:flex sm:gap-20 block items-center justify-between m-auto"
          >
            <div class="sm:w-[50%] m-auto sm:pl-4 sm:px-0 px-2">
              <h2
                class="sm:text-[46px] text-[30px] p-1 font-[600] opacity-90 leading-snug"
              >
                Try Out Our Awesome <br />
                Feature Now and Enjoy <br />
                It`s Benefits.
              </h2>
              <div
                class="sm:mt-8 sm:flex sm:justify-between flex text-[14px] space-x-5 mt-5 mb-10"
              >
                <button
                  class="rounded-md sm:px-5 px-4 p-2 bg-green-500 font-medium text-white transition-all duration-1000 ease-in-out hover:text-red-600 hover:scale-110"
                  type="button"
                >
                  DOWUNLOAD NOW
                </button>
                <button
                  class="sm:mx-5 rounded-md px-2 p-2 text-green-700 font-medium border-green-300 border-2 transition-all duration-1000 ease-in-out hover:text-blue-600 hover:scale-105"
                  type="submit"
                >
                  SIGN UP WITH GOOGLE
                </button>
              </div>
            </div>
            <div
              class="flex sm:w-[44%] w-[100%] h-auto m-auto items-center justify-center mb-14"
            >
              <div class="relative px-2 sm:px-0">
                <img
                  class="sm:h-[400px] h-auto sm:w-full w-[400px] m-auto object-cover cursor-pointer"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cf2UwFlf5zIy74vXQDViSooWXxBrWuNCaOwz_LwqgoC-FFP2lg3imtd3GpYvgzK17Zw&amp;usqp=CAU"
                  alt="3d Shapes PNG Images, Free Transparent 3d Shapes Download - KindPNG"
                />

                <div
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center leading-normal"
                >
                  <h3 class="sm:text-6xl text-[32px] sm:font-bold font-[600]">
                    40+
                  </h3>
                  <span
                    class="sm:font-bold font-[600] sm:opacity-70 opacity-100"
                    >Download</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Another Custom Card system -->
        <div class="sm:mt-32">
          <div class="sm:w-[1200px] m-auto">
            <div
              class="sm:grid sm:grid-cols-3 sm:gap-10 space-y-7 sm:space-y-0 sm:px-2 px-1"
            >
              <div
                v-for="customCart in customCartData"
                :key="customCart.id"
                class="p-2 sm:w-full h-auto rounded-3xl border mb-0 transition duration-300 ease-out hover:ease-in border-gray-300 hover:border-red-400 shadow-secondary-1 dark:bg-surface-dark"
              >
                <div
                  class="relative overflow-hidden bg-cover bg-no-repeat"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  <nuxt-link to="#">
                    <img
                      decoding="async"
                      sizes="336.6667px"
                      :src="customCart.image"
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
                  </nuxt-link>
                </div>
                <div class="sm:px-5 sm:pt-3 text-surface dark:text-white">
                  <div>
                    <img
                      class="mb-3 w-[24px] h-[24px]"
                      decoding="async"
                      sizes="24px"
                      :src="customCart.avatar"
                      alt=""
                      style="
                        display: block;
                        border-radius: inherit;
                        object-position: center;
                        object-fit: cover;
                        image-rendering: auto;
                      "
                    />
                  </div>
                  <h5
                    class="mb-2 opacity-90 sm:text-[20px] text-[19px] font-[600] leading-tight"
                  >
                    {{ customCart.header }}
                  </h5>
                  <p
                    class="sm:text-[17px] text-[16px] text-gray-500 font-[400]"
                  >
                    {{ customCart.content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Another review  -->
        <div class="sm:mt-32 mt-20 sm:px-2 px-2">
          <div>
            <header
              class="sm:text-[54px] text-[36px] font-[600] opacity-90 sm:mb-10 mb-5 p-5 text-center justify-center"
            >
              <span class="text-[#FF4F00]">Testimonials</span> Review
            </header>
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:space-y-0 space-y-4 sm:gap-12">
            <div
              v-for="review in reviews"
              :key="review"
              class="sm:p-5 border-2 border-gray-300 rounded-xl"
            >
              <div class="">
                <svg
                  class="sm:h-14 h-12 p-3 cursor-pointer m-auto text-gray-300 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path :d="review.svg" fill="currentColor"></path>
                </svg>
              </div>
              <p class="mb-4 p-1 font-[400] opacity-90">
                {{ review.description }}
              </p>
              <div class="sm:flex sm:justify-between sm:items-center">
                <div
                  class="sm:flex sm:space-x-5 sm:space-y-0 space-y-3 sm:items-center"
                >
                  <img
                    class="h-[40px] w-[40px] rounded-full cursor-pointer"
                    :src="review.avatar"
                    alt="image"
                  />
                  <p class="sm:text-[18px] text-[17px] font-bold opacity-80">
                    {{ review.name }}
                  </p>
                </div>
                <p class="font-[500] opacity-90 text-[15px] sm:mt-0">
                  {{ review.content }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Pricing section  -->
        <div class="sm:mt-32 mt-20">
          <div class="">
            <div class="bg-white">
              <div>
                <pricing></pricing>
              </div>
            </div>
          </div>
        </div>

        <!-- Free faq section  -->
        <div
          class="sm:flex m-auto bg-[#fffee7] sm:gap-10 sm:mb-0 mb-12 sm:mt-20"
        >
          <div id="faq" class="sm:w-[50%] m-auto sm:p-0 sm:px-0 px-2">
            <div class="sm:w-[600px] m-auto text-center mb-10">
              <h2
                class="text-[#343434] sm:text-[42px] text-[34px] font-[600] leading-relaxed"
              >
                Frequently <span class="ai-text">Asked FAQs Question</span>
              </h2>
              <p class="opacity-70 sm:text-[17px] mt-3">
                What features does the management tool offer?
              </p>
            </div>
            <div class="sm:max-w-3xl mx-auto sm:mb-5 mb-10 sm:px-3">
              <div class="flex flex-col gap-4">
                <div
                  v-for="(faq, index) in faqData"
                  :key="index"
                  :class="{
                    'bg-white sm:p-4 p-2  shadow-[0px_0px_16px_0px_rgba(0,0,0,0.06)] rounded':
                      selectedQuestion === index,
                    'sm:p-4 p-2 bg-white rounded': selectedQuestion !== index,
                  }"
                >
                  <div
                    @click="toggleQuestion(index)"
                    class="flex items-center justify-between cursor-pointer"
                  >
                    <h2
                      class="text-[#5b268f] text-[16px] sm:text-base opacity-80 font-[600]"
                    >
                      {{ faq.question }}
                    </h2>
                    <button aria-label="faq" title="faq">
                      <svg
                        v-if="selectedQuestion === index"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7.41 8.57812L12 13.1681L16.59 8.57812L18 9.99813L12 15.9981L6 9.99813L7.41 8.57812Z"
                          fill="#5B4747"
                        />
                      </svg>
                      <svg
                        v-else
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.59 15.4219L12 10.8319L7.41 15.4219L6 14.0019L12 8.00187L18 14.0019L16.59 15.4219Z"
                          fill="#5B4747"
                        />
                      </svg>
                    </button>
                  </div>
                  <p
                    v-if="selectedQuestion === index"
                    class="text-[#938383] sm:text-base text-[15px] mt-3 leading-7"
                  >
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="sm:w-[50%] w-[100%] m-auto px-2 sm:px-0">
            <img
              src="https://smallimg.pngkey.com/png/small/29-297488_shapes-icon-3d-shapes-clipart-png.png"
              class="sm:w-[100%] w-[100%] sm:h-[500px] cursor-pointer object-cover"
              alt="3d Shapes PNG, Transparent 3d Shapes PNG Image Free Download - PNGkey"
            />
          </div>
        </div>

        <!-- Footer section  -->
        <div class="sm:mt-20">
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
</script>
  
  