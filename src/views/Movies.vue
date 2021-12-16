<template>
  <div class="movies">
    <h1 class="movies__title">Find Movies, Tv series, and more..</h1>

    <form @submit.prevent="pressed">
      <div class="search-box">
        <i class="icon__search"
          ><svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7372 14.4753L12.7159 11.463C13.6907 10.2211 14.2196 8.68756 14.2176 7.10882C14.2176 5.70283 13.8007 4.32841 13.0196 3.15937C12.2385 1.99033 11.1282 1.07918 9.82925 0.54113C8.53028 0.00308012 7.10094 -0.137698 5.72196 0.136597C4.34299 0.410893 3.07631 1.08794 2.08213 2.08213C1.08794 3.07631 0.410893 4.34299 0.136597 5.72196C-0.137698 7.10094 0.00308012 8.53028 0.54113 9.82925C1.07918 11.1282 1.99033 12.2385 3.15937 13.0196C4.32841 13.8007 5.70283 14.2176 7.10882 14.2176C8.68756 14.2196 10.2211 13.6907 11.463 12.7159L14.4753 15.7372C14.5579 15.8204 14.6562 15.8865 14.7645 15.9317C14.8728 15.9768 14.9889 16 15.1062 16C15.2236 16 15.3397 15.9768 15.448 15.9317C15.5563 15.8865 15.6545 15.8204 15.7372 15.7372C15.8204 15.6545 15.8865 15.5563 15.9317 15.448C15.9768 15.3397 16 15.2236 16 15.1062C16 14.9889 15.9768 14.8728 15.9317 14.7645C15.8865 14.6562 15.8204 14.5579 15.7372 14.4753ZM1.77721 7.10882C1.77721 6.05433 2.0899 5.02352 2.67575 4.14674C3.26159 3.26996 4.09428 2.58659 5.0685 2.18305C6.04273 1.77952 7.11474 1.67393 8.14897 1.87965C9.1832 2.08538 10.1332 2.59316 10.8788 3.3388C11.6245 4.08444 12.1323 5.03444 12.338 6.06868C12.5437 7.10291 12.4381 8.17492 12.0346 9.14914C11.6311 10.1234 10.9477 10.9561 10.0709 11.5419C9.19413 12.1277 8.16332 12.4404 7.10882 12.4404C5.69479 12.4404 4.33867 11.8787 3.3388 10.8788C2.33893 9.87897 1.77721 8.52285 1.77721 7.10882Z"
              fill="white"
            />
          </svg>
        </i>
        <input
          type="text"
          class="search__input"
          name=""
          id=""
          placeholder="Sherlock Holmes"
          @click="setSelectedCategory('the-search')"
        />
      </div>
    </form>

    <div class="buttons">
      <button
        :class="setTopRated"
        id="category__btn"
        @click="setSelectedCategory('the-movies')"
      >
        Movies
      </button>
      <button
        :class="setSeries"
        id="category__btn"
        @click="setSelectedCategory('the-series')"
      >
        Tv Series
      </button>
      <button
        :class="setDocuments"
        id="category__btn"
        @click="setSelectedCategory('the-documents')"
      >
        Documentary
      </button>
      <button
        :class="setSports"
        id="category__btn"
        @click="setSelectedCategory('the-sports')"
      >
        Musics
      </button>
    </div>

    <keep-alive>
      <component :is="selectedCategory"></component>
    </keep-alive>
    <the-footer>
      <router-link to="/"
        ><button class="footer__btn">
          <i class="icon__footer"
            ><svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_77_313)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.6672 33.4391V29.4464C18.6672 28.4309 19.4951 27.6057 20.5209 27.5989H24.2784C25.3091 27.5989 26.1446 28.426 26.1446 29.4464V33.4515C26.1444 34.3137 26.8395 35.0184 27.7102 35.0386H30.2152C32.7124 35.0386 34.7367 33.0346 34.7367 30.5624V19.2043C34.7234 18.2318 34.2621 17.3185 33.4842 16.7244L24.9172 9.89222C23.4163 8.70259 21.2828 8.70259 19.782 9.89222L11.2525 16.7368C10.4716 17.3285 10.0096 18.2433 10 19.2167V30.5624C10 33.0346 12.0243 35.0386 14.5215 35.0386H17.0265C17.9188 35.0386 18.6422 34.3225 18.6422 33.4391"
                  fill="#DADADA"
                  fill-opacity="0.2"
                />
                <path
                  d="M18.6672 33.4391V29.4464C18.6672 28.4309 19.4951 27.6057 20.5209 27.5989H24.2784C25.3091 27.5989 26.1446 28.426 26.1446 29.4464V33.4515C26.1444 34.3137 26.8395 35.0184 27.7102 35.0386H30.2152C32.7124 35.0386 34.7367 33.0346 34.7367 30.5624V19.2043C34.7234 18.2318 34.2621 17.3185 33.4842 16.7244L24.9172 9.89222C23.4163 8.70259 21.2828 8.70259 19.782 9.89222L11.2525 16.7368C10.4716 17.3285 10.0096 18.2433 10 19.2167V30.5624C10 33.0346 12.0243 35.0386 14.5215 35.0386H17.0265C17.9188 35.0386 18.6422 34.3225 18.6422 33.4391"
                  stroke="url(#paint0_linear_77_313)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_77_313"
                  x="4.44"
                  y="3.44"
                  width="35.8568"
                  height="37.1587"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImage" stdDeviation="2.405" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_77_313"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_77_313"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_77_313"
                  x1="13.9377"
                  y1="12.0335"
                  x2="30.7068"
                  y2="31.7641"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.25" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </i></button
      ></router-link>
      <router-link to="/movies"
        ><button class="footer__btn">
          <i class="icon__footer active"
            ><svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_82_237)">
                <path
                  d="M31 16C31 24.2845 24.2845 31 16 31C7.7155 31 1 24.2845 1 16C1 7.717 7.7155 1 16 1C24.2845 1 31 7.717 31 16Z"
                  fill="#DADADA"
                  fill-opacity="0.2"
                />
                <path
                  d="M16 31.1367C24.36 31.1367 31.1367 24.36 31.1367 16C31.1367 7.64149 24.36 0.863265 16 0.863265C7.63998 0.863265 0.863265 7.64149 0.863265 16C0.863265 24.36 7.63998 31.1367 16 31.1367Z"
                  stroke="url(#paint0_linear_82_237)"
                  stroke-width="0.27347"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <g class="play" filter="url(#filter1_b_82_237)">
                <path
                  d="M21.8 15.6068C21.8 15.9606 21.6886 16.3158 21.4659 16.6002C21.4241 16.656 21.2293 16.886 21.0761 17.0357L20.9926 17.1174C19.8233 18.3571 16.9139 20.2215 15.4384 20.819C15.4384 20.8326 14.5614 21.1878 14.1438 21.2H14.0881C13.4477 21.2 12.8491 20.8475 12.5429 20.276C12.3759 19.9616 12.2227 19.0498 12.2088 19.0376C12.0835 18.2197 12 16.9677 12 15.5932C12 14.152 12.0835 12.8442 12.2366 12.0413C12.2366 12.0277 12.3898 11.2928 12.4872 11.0479C12.6403 10.6954 12.9188 10.3947 13.2668 10.2041C13.5452 10.0694 13.8375 10 14.1438 10C14.4639 10.015 15.0625 10.2177 15.2991 10.313C16.8582 10.9118 19.8372 12.8714 20.9787 14.069C21.1736 14.2595 21.3824 14.4922 21.4381 14.5453C21.6747 14.8447 21.8 15.2122 21.8 15.6068Z"
                  fill="#DADADA"
                  fill-opacity="0.4"
                />
                <path
                  d="M12.5429 20.276L12.5912 20.2503C12.5117 20.1008 12.4331 19.8018 12.3718 19.5314C12.3415 19.3976 12.3159 19.2732 12.297 19.1811L12.297 19.181L12.2969 19.1808C12.2875 19.135 12.2797 19.0968 12.2737 19.0697C12.2708 19.0562 12.2682 19.0448 12.266 19.0363C12.2649 19.0322 12.2637 19.0278 12.2624 19.0239C12.2622 19.0234 12.262 19.0229 12.2618 19.0222C12.1377 18.2079 12.0547 16.9621 12.0547 15.5932C12.0547 14.1531 12.1382 12.8494 12.2904 12.0516L12.2913 12.0517V12.0452L12.2922 12.0406L12.297 12.0155C12.3014 11.9939 12.3077 11.9633 12.3156 11.9262C12.3314 11.8518 12.3535 11.7514 12.3787 11.6438C12.4292 11.4273 12.4908 11.1871 12.5377 11.0689C12.6857 10.7287 12.9549 10.4376 13.2918 10.2528C13.5623 10.1221 13.8457 10.0549 14.1425 10.0547C14.2954 10.0621 14.519 10.1147 14.7373 10.1789C14.955 10.2429 15.1621 10.3168 15.2787 10.3637L15.2787 10.3637L15.2795 10.3641C16.0535 10.6613 17.1842 11.2984 18.2654 12.0121C19.3467 12.7259 20.3727 13.5125 20.9391 14.1068L20.9391 14.1068L20.9405 14.1081C21.0371 14.2026 21.1373 14.3077 21.2208 14.3962C21.2407 14.4173 21.2597 14.4376 21.2776 14.4567C21.3313 14.5139 21.3744 14.5598 21.3974 14.5821C21.6247 14.871 21.7453 15.2253 21.7453 15.6068C21.7453 15.9494 21.6374 16.2925 21.4228 16.5665L21.4221 16.5675C21.3821 16.6209 21.1891 16.8488 21.0379 16.9966L20.9544 17.0783L20.9543 17.0782L20.9528 17.0798C20.3726 17.695 19.3573 18.4682 18.3003 19.1633C17.2435 19.8583 16.1508 20.4715 15.4178 20.7683L15.3837 20.7821V20.7861C15.3818 20.7869 15.3797 20.7878 15.3776 20.7888C15.3537 20.7994 15.3185 20.8142 15.2745 20.8317C15.1866 20.8668 15.0649 20.9125 14.9301 20.9582C14.6584 21.0503 14.3425 21.1392 14.1429 21.1453H14.0881C13.4677 21.1453 12.8877 20.8038 12.5911 20.2501L12.5429 20.276ZM12.5429 20.276C12.8491 20.8475 13.4477 21.2 14.0881 21.2H14.1438L12.2366 12.0413C12.0835 12.8442 12 14.152 12 15.5932C12 16.9677 12.0835 18.2197 12.2088 19.0376C12.2123 19.0406 12.2245 19.1 12.2434 19.1922C12.3002 19.4686 12.4176 20.0402 12.5429 20.276Z"
                  stroke="url(#paint1_linear_82_237)"
                  stroke-width="0.109388"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_82_237"
                  x="-0.588826"
                  y="-0.588826"
                  width="33.1777"
                  height="33.1777"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImage"
                    stdDeviation="0.657694"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_82_237"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_82_237"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_b_82_237"
                  x="7.89796"
                  y="5.89796"
                  width="18.0039"
                  height="19.404"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImage" stdDeviation="2.05102" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_82_237"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_82_237"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_82_237"
                  x1="5.77551"
                  y1="4.49504"
                  x2="24.9123"
                  y2="28.1964"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.25" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_82_237"
                  x1="13.56"
                  y1="11.3048"
                  x2="20.845"
                  y2="19.1996"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.25" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </i></button
      ></router-link>
      <router-link to="/profile"
        ><button class="footer__btn">
          <i class="icon__footer"
            ><svg
              width="23"
              height="28"
              viewBox="0 0 23 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_82_229)">
                <g filter="url(#filter1_b_82_229)">
                  <path
                    d="M10.9453 13.3359C12.7011 13.3359 14.2214 12.7061 15.4636 11.4637C16.7058 10.2214 17.3355 8.70148 17.3355 6.9455C17.3355 5.19012 16.7058 3.66996 15.4634 2.42731C14.221 1.18527 12.7009 0.555542 10.9453 0.555542C9.18941 0.555542 7.66949 1.18527 6.42729 2.42751C5.18508 3.66976 4.55518 5.18992 4.55518 6.9455C4.55518 8.70148 5.18508 10.2216 6.42749 11.4639C7.6699 12.7059 9.19001 13.3359 10.9453 13.3359Z"
                    fill="#DADADA"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M15.1054 11.1055L15.1053 11.1055C13.9581 12.2529 12.5667 12.8293 10.9453 12.8293C9.32449 12.8293 7.93316 12.2528 6.78565 11.1056C5.63823 9.95834 5.06177 8.56702 5.06177 6.9455C5.06177 5.32438 5.63823 3.93303 6.78551 2.78572C7.93276 1.63844 9.32383 1.06214 10.9453 1.06214C12.5664 1.06214 13.9577 1.63841 15.1051 2.78549C16.2526 3.93321 16.8289 5.32457 16.8289 6.9455C16.8289 8.56707 16.2526 9.9582 15.1054 11.1055Z"
                    stroke="url(#paint0_linear_82_229)"
                    stroke-width="1.01319"
                  />
                </g>
                <g filter="url(#filter2_b_82_229)">
                  <path
                    d="M22.0905 20.9639C22.0546 20.444 21.9821 19.8769 21.8754 19.2781C21.7677 18.6748 21.629 18.1044 21.4629 17.5831C21.2914 17.0443 21.0581 16.5122 20.7698 16.0023C20.4705 15.4731 20.1189 15.0123 19.7244 14.633C19.312 14.2363 18.8069 13.9174 18.2229 13.6847C17.6409 13.4533 16.996 13.336 16.3061 13.336C16.0351 13.336 15.7731 13.4478 15.267 13.7789C14.9556 13.9831 14.5913 14.2192 14.1847 14.4804C13.837 14.7031 13.366 14.9117 12.7842 15.1006C12.2166 15.2852 11.6403 15.3789 11.0715 15.3789C10.5026 15.3789 9.92652 15.2852 9.3583 15.1006C8.77713 14.9119 8.30612 14.7033 7.95883 14.4806C7.55606 14.2219 7.19156 13.9858 6.87546 13.7787C6.37002 13.4476 6.10779 13.3358 5.83684 13.3358C5.14672 13.3358 4.50197 13.4533 3.92019 13.6849C3.33658 13.9172 2.83135 14.2361 2.41845 14.6332C2.02418 15.0127 1.67244 15.4733 1.37355 16.0023C1.0854 16.5122 0.852117 17.0441 0.680398 17.5833C0.514551 18.1046 0.375839 18.6748 0.268109 19.2781C0.161392 19.8761 0.0888972 20.4434 0.0530549 20.9645C0.0178199 21.475 0 22.0049 0 22.54C0 23.9327 0.440436 25.0602 1.30896 25.8917C2.16674 26.7122 3.30175 27.1284 4.68199 27.1284H17.4621C18.8424 27.1284 19.977 26.7124 20.835 25.8917C21.7037 25.0608 22.1441 23.9331 22.1441 22.5398C22.1439 22.0022 22.1259 21.472 22.0905 20.9639Z"
                    fill="#DADADA"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M21.5851 20.9991L21.5851 20.9987C21.5507 20.4998 21.4807 19.9509 21.3767 19.367C21.2724 18.783 21.1387 18.2345 20.9802 17.7369L20.9802 17.7368C20.8196 17.2324 20.6006 16.7323 20.3288 16.2517C20.0509 15.7604 19.7286 15.3398 19.3734 14.9983L19.3733 14.9982C19.0125 14.6512 18.5646 14.3662 18.0355 14.1553L21.5851 20.9991ZM21.5851 20.9991C21.6197 21.4948 21.6373 22.0133 21.6375 22.5398L21.5851 20.9991ZM14.4584 14.9066L14.4579 14.907C14.0609 15.1612 13.5459 15.3859 12.9406 15.5824C12.325 15.7826 11.696 15.8855 11.0715 15.8855C10.4468 15.8855 9.81799 15.7826 9.20187 15.5824L14.4584 14.9066ZM14.4584 14.9066C14.866 14.6449 15.2316 14.4079 15.5447 14.2027L14.4584 14.9066ZM7.68538 14.907L7.68505 14.9068C7.28135 14.6475 6.91556 14.4106 6.59792 14.2025L6.59782 14.2025C6.09578 13.8735 5.94471 13.8424 5.83684 13.8424C5.20436 13.8424 4.62394 13.95 4.10758 14.1556L4.1075 14.1556C3.57892 14.366 3.13092 14.6509 2.76973 14.9983L7.68538 14.907ZM7.68538 14.907C8.08207 15.1614 8.59721 15.3861 9.20176 15.5824L7.68538 14.907ZM1.81462 16.2515L1.81459 16.2516C1.54296 16.7322 1.32391 17.2321 1.16315 17.7369L1.81462 16.2515ZM1.81462 16.2515C2.0919 15.7608 2.41436 15.3403 2.76963 14.9984L1.81462 16.2515ZM0.558455 20.9993L0.558446 20.9994C0.52405 21.4977 0.506594 22.0159 0.506594 22.54C0.506594 23.8183 0.906547 24.8051 1.65929 25.5257C2.40753 26.2414 3.40955 26.6218 4.68199 26.6218H17.4621C18.7346 26.6218 19.7363 26.2415 20.4848 25.5256L20.4848 25.5256C21.2375 24.8057 21.6375 23.8189 21.6375 22.54L0.558455 20.9993ZM0.558455 20.9993C0.592855 20.4991 0.662778 19.9502 0.766815 19.3671L0.558455 20.9993ZM16.3061 13.8426C16.9383 13.8426 17.5189 13.95 18.0354 14.1553L15.5448 14.2026C16.0474 13.8737 16.1982 13.8426 16.3061 13.8426ZM0.766825 19.3671C0.871099 18.7831 1.00475 18.2348 1.1631 17.737L0.766825 19.3671Z"
                    stroke="url(#paint1_linear_82_229)"
                    stroke-width="1.01319"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_b_82_229"
                  x="-4.87343"
                  y="-4.31789"
                  width="31.8909"
                  height="36.3197"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImage" stdDeviation="2.43672" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_82_229"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_82_229"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_b_82_229"
                  x="-0.318257"
                  y="-4.31789"
                  width="22.5271"
                  height="22.5271"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImage" stdDeviation="2.43672" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_82_229"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_82_229"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_b_82_229"
                  x="-4.87343"
                  y="8.46238"
                  width="31.8909"
                  height="23.5395"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImage" stdDeviation="2.43672" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_82_229"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_82_229"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_82_229"
                  x1="6.58959"
                  y1="2.04447"
                  x2="14.7421"
                  y2="12.1415"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.25" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_82_229"
                  x1="3.52498"
                  y1="14.9427"
                  x2="10.7502"
                  y2="29.3097"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.25" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </i></button
      ></router-link>
    </the-footer>
  </div>
</template>

<script>
import TheMovies from "../components/Movies/TheMovies.vue";
import TheFooter from "../components/TheFooter.vue";

import TheSeries from "../components/Movies/The.Series.vue";
import TheDocuments from "../components/Movies/TheDocuments.vue";
import TheSports from "../components/Movies/TheSports.vue";
export default {
  components: {
    TheMovies,
    TheFooter,
    TheSeries,
    TheDocuments,
    TheSports,
  },

  data() {
    return {
      selectedCategory: "the-movies",
      focus: ".focus",
    };
  },

  methods: {
    setSelectedCategory(cmp) {
      this.selectedCategory = cmp;
    },
  },

  computed: {
    setTopRated() {
      return this.selectedCategory === "the-movies" ? "focus" : "category__btn";
    },
    setSeries() {
      return this.selectedCategory === "the-series" ? "focus" : "category__btn";
    },
    setDocuments() {
      return this.selectedCategory === "the-documents"
        ? "focus"
        : "category__btn";
    },
    setSports() {
      return this.selectedCategory === "the-sports" ? "focus" : "category__btn";
    },
  },
};
</script>

<style scoped>
.movies {
  padding-bottom: 60px;
}
.movies__title {
  color: #fff;
  text-align: left;
  padding: 24px;
  font-size: 28px;
  font-weight: normal;
}

.search__input {
  width: 90%;
  background: #302e3a;
  padding: 13px 50px;
  border: none;
  border-radius: 27px;
  outline: none;
  color: #fff;
}

.focus {
  color: #ff8f71;
  background: transparent;
  border: none;
  position: relative;
}

.focus::after {
  content: "";
  width: 40%;
  height: 2px;
  position: absolute;
  background: #ff8f71;
  bottom: -5px;
  left: 0;
}

.icon__search {
  /* position: absolute; */
  transform: translate(18px, 14px);
  z-index: 10;
}

.buttons {
  display: flex;
  padding: 20px 24px;
  justify-content: space-between;
}

.category__btn {
  background: transparent;
  color: #fff;
  border: none;
}

.footer__btn {
  background: transparent;
  border: none;
  cursor: pointer;
}

.active svg path {
  fill: #ff8f71;
}

.play path {
  fill: #fff;
}
</style>
