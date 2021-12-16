<template>
  <the-carousel v-if="items.length">
    <div class="movie-card" v-for="item in items" :key="item.id">
      <router-link :to="{ name: 'movie', params: { id: item.id } }">
        <div class="rate">
          <h1 class="movie__rate">
            IMDB <br />
            {{ item.vote_average }}
          </h1>
        </div>
        <img
          :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`"
          class="movie__img"
          alt=""
        />
        <div class="info">
          <h1 class="movie__title">{{ item.title }}</h1>
        </div>
      </router-link>
    </div>
  </the-carousel>
</template>

<script>
import TheCarousel from "../components/Carousel.vue";

export default {
  data() {
    return {
      items: [],
      apikey: "3f6523220ef2d2a56a4b523bf022b783",
      page: 1,
    };
  },

  components: {
    TheCarousel,
  },
  methods: {
    TopRated() {
      let movieId = this.$route.params.id;
      fetch(
        `
https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${this.apikey}&language=en-US&page=${this.page}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.items = data.results;
        });
    },

    loadmore() {
      this.page = this.page++;
    },
  },

  mounted() {
    this.TopRated();
  },
};
</script>

<style scoped>
.movie-card {
  margin-top: 15px;
  position: relative;
}

.movie__img {
  max-width: 208px;
  border-radius: 10px;
}

.info {
  position: absolute;
  top: 240px;
  left: 12px;
  background: rgba(236, 234, 234, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 17px;
  max-width: 186px;
  width: 100%;
}

.movie__title {
  font-size: 12px;
  color: #fff;
  font-weight: 400;
  text-align: center;
}

.rate {
  position: absolute;
  top: 10px;
  left: 140px;
  background: rgba(236, 234, 234, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 17px;
}

.movie__rate {
  font-size: 8px;
  color: #fff;
}
</style>
