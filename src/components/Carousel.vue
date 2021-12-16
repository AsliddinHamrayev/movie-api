<template>
  <VueSlickCarousel v-bind="settings">
    <slot></slot>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  data() {
    return {
      settings: {
        centerMode: true,
        centerPadding: "70px",
        slidesToShow: 1,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        dots: true,
        speed: 500,
        autoplay: true,
        responsive: [
          {
            breakpoint: 376,
            settings: {
              centerMode: true,
              centerPadding: "50px",
              slidesToShow: 1,
              arrows: false,
              focusOnSelect: true,
              infinite: true,
              dots: true,
              speed: 500,
              autoplay: true,
            },
          },

          {
            breakpoint: 321,
            settings: {
              centerMode: true,
              centerPadding: "25px",
              slidesToShow: 1,
              arrows: false,
              focusOnSelect: true,
              infinite: true,
              dots: true,
              speed: 500,
              autoplay: true,
            },
          },
        ],
      },
    };
  },

  components: {
    VueSlickCarousel,
  },
};
</script>

<style>
.slick-dots li button {
  display: none;
}

.slick-dots li {
  height: 5px;
  width: 5px;
  border-radius: 2px;
  background: #fff;
}

.slick-dots .slick-active {
  width: 14px;
}
</style>
