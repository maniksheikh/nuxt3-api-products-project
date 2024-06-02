<template>
  <div>
    <nav
      class="bg-black text-white py-0 text-lg fixed top-0 left-0 right-0 w-[100%]"
    >
      <div class="flex justify-between m-auto w-[1300px]">
        <div>
          <nuxt-link to="/">
            <img
              class="rounded-full"
              src="https://masterbundles.com/wp-content/uploads/2022/12/shopping-logo-158.jpg"
              jsaction="VQAsE"
              style="max-width: 1100px; height: 50px; margin: 0px; width: 50px"
              alt="Shopping Cart Logo Design - MasterBundles"
              jsname="kn3ccd"
              aria-hidden="false"
            />
          </nuxt-link>
        </div>
        <div class="flex items-center text-[16px] font-[600]">
          <ul
            class="px-5 transition-all font-[500] duration-300 ease-in-out hover:text-yellow-400"
          >
            <NuxtLink to="/about">About</NuxtLink>
          </ul>

          <ul
            class="px-5 transition-all font-[500] duration-300 ease-in-out hover:text-yellow-400"
          >
            <NuxtLink to="/products/product">Products</NuxtLink>
          </ul>
          <ul
            class="px-5 transition-all font-[500] duration-300 ease-in-out hover:text-yellow-400"
          >
            <NuxtLink to="/pricing">Pricing</NuxtLink>
          </ul>
          <ul
            class="px-5 transition-all font-[500] duration-300 ease-in-out hover:text-yellow-400"
          >
            <NuxtLink to="#">Blog</NuxtLink>
          </ul>
        </div>
        <div class="flex items-center space-x-4 text-[16px]">
          <div v-if="!isUserAuth" class="item">
            <button class="btn dropdown">
              <svg
                class="w-[48px] h-[48px] pt-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path
                    d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                  />
                  <path
                    d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0 1 12.065 14a8.984 8.984 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.963 8.963 0 0 1-5.672-2.012A6.992 6.992 0 0 1 12.065 16a6.991 6.991 0 0 1 5.689 2.92A8.964 8.964 0 0 1 12 21"
                  />
                </g>
              </svg>
              <div v-if="visible" class="dropdown-menu">
                <div class="profile-details">
                  <div class="items">
                    <div class="box">
                      <img src="../assets/20240114071423_IMG_1336.JPG" alt="" />
                      <span class="title">{{ userName }}</span>
                    </div>
                    <div class="pro-title">
                      <a href="#">See all profiles</a>
                    </div>
                  </div>
                </div>

                <div class="btn btn-logout">
                  <button class="btn btn-flex">
                    <div class="item-box">
                      <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        class="style-scope yt-icon"
                        style="
                          pointer-events: none;
                          display: block;
                          width: 20;
                          height: 20;
                        "
                      >
                        <g class="style-scope yt-icon">
                          <path
                            d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"
                            class="style-scope yt-icon"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <span>Settings & privacy</span>
                  </button>
                  <button class="btn btn-flex">
                    <div class="item-box">
                      <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        class="style-scope yt-icon"
                        style="
                          pointer-events: none;
                          display: block;
                          width: 24;
                          height: 24;
                        "
                      >
                        <g class="style-scope yt-icon">
                          <path
                            d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
                            class="style-scope yt-icon"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <span>Help & support</span>
                  </button>
                  <button class="btn btn-flex" @click.prevent="logout">
                    <div class="item-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        width="20"
                        height="20"
                        viewBox="0 0 256 256"
                        xml:space="preserve"
                      >
                        <defs></defs>
                        <g
                          style="
                            stroke: none;
                            stroke-width: 0;
                            stroke-dasharray: none;
                            stroke-linecap: butt;
                            stroke-linejoin: miter;
                            stroke-miterlimit: 10;
                            fill: none;
                            fill-rule: nonzero;
                            opacity: 1;
                          "
                          transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                        >
                          <path
                            d="M 69.313 54.442 c -0.397 0 -0.798 -0.118 -1.147 -0.363 c -0.904 -0.636 -1.122 -1.883 -0.487 -2.786 l 10.118 -14.399 L 67.679 22.495 c -0.635 -0.904 -0.417 -2.151 0.487 -2.786 c 0.904 -0.637 2.151 -0.417 2.786 0.486 l 10.926 15.549 c 0.484 0.69 0.484 1.61 0 2.3 L 70.952 53.592 C 70.563 54.146 69.943 54.442 69.313 54.442 z"
                            style="
                              stroke: none;
                              stroke-width: 1;
                              stroke-dasharray: none;
                              stroke-linecap: butt;
                              stroke-linejoin: miter;
                              stroke-miterlimit: 10;
                              fill: rgb(0, 0, 0);
                              fill-rule: nonzero;
                              opacity: 1;
                            "
                            transform=" matrix(1 0 0 1 0 0) "
                            stroke-linecap="round"
                          />
                          <path
                            d="M 57.693 30.092 c 1.104 0 2 -0.896 2 -2 V 2 c 0 -1.104 -0.896 -2 -2 -2 H 9.759 C 9.746 0 9.735 0.003 9.722 0.004 C 9.685 0.004 9.648 0.012 9.611 0.015 c -0.122 0.009 -0.24 0.027 -0.354 0.057 C 9.211 0.083 9.168 0.098 9.124 0.113 C 9.011 0.151 8.903 0.198 8.8 0.255 C 8.775 0.269 8.747 0.274 8.723 0.289 c -0.012 0.007 -0.02 0.018 -0.031 0.025 c -0.13 0.083 -0.252 0.177 -0.36 0.287 C 8.313 0.62 8.299 0.643 8.281 0.662 C 8.196 0.757 8.12 0.859 8.053 0.969 C 8.029 1.009 8.008 1.05 7.987 1.091 C 7.935 1.192 7.893 1.297 7.858 1.407 C 7.845 1.449 7.83 1.489 7.82 1.532 C 7.783 1.683 7.759 1.838 7.759 2 v 69.787 c 0 0.17 0.028 0.333 0.068 0.49 c 0.011 0.043 0.025 0.083 0.039 0.124 c 0.04 0.123 0.091 0.239 0.152 0.35 c 0.019 0.033 0.034 0.068 0.054 0.1 c 0.086 0.135 0.185 0.26 0.3 0.371 c 0.022 0.021 0.047 0.037 0.07 0.058 c 0.102 0.09 0.214 0.169 0.333 0.237 c 0.021 0.012 0.037 0.03 0.058 0.042 l 31.016 16.213 C 40.139 89.925 40.457 90 40.775 90 c 0.359 0 0.718 -0.097 1.036 -0.289 c 0.598 -0.362 0.964 -1.012 0.964 -1.711 V 73.787 h 14.918 c 1.104 0 2 -0.896 2 -2 V 45 c 0 -1.104 -0.896 -2 -2 -2 s -2 0.896 -2 2 v 24.787 H 42.775 V 18.213 c 0 -0.745 -0.414 -1.428 -1.074 -1.772 L 17.902 4 h 37.791 v 24.092 C 55.693 29.196 56.589 30.092 57.693 30.092 z"
                            style="
                              stroke: none;
                              stroke-width: 1;
                              stroke-dasharray: none;
                              stroke-linecap: butt;
                              stroke-linejoin: miter;
                              stroke-miterlimit: 10;
                              fill: rgb(0, 0, 0);
                              fill-rule: nonzero;
                              opacity: 1;
                            "
                            transform=" matrix(1 0 0 1 0 0) "
                            stroke-linecap="round"
                          />
                          <path
                            d="M 80.241 38.894 H 47.536 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 32.705 c 1.104 0 2 0.896 2 2 S 81.346 38.894 80.241 38.894 z"
                            style="
                              stroke: none;
                              stroke-width: 1;
                              stroke-dasharray: none;
                              stroke-linecap: butt;
                              stroke-linejoin: miter;
                              stroke-miterlimit: 10;
                              fill: rgb(0, 0, 0);
                              fill-rule: nonzero;
                              opacity: 1;
                            "
                            transform=" matrix(1 0 0 1 0 0) "
                            stroke-linecap="round"
                          />
                        </g>
                      </svg>
                    </div>
                    <span>Log Out</span>
                  </button>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
</script>
  
  