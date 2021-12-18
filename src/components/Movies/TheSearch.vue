<template>
  <div>
    <div class="movies">
        <slot></slot>
      <div class="movie-card" v-for="movie in movies" :key="movie.id">
        <router-link :to="{ name: 'movie', params: { id: movie.id } }">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            class="movie__img"
            alt=""
          />
          <p class="movie__info">
            {{ movie.title }} <span>({{ movie.release_date }})</span>
          </p>
        </router-link>
      </div>
    </div>
    <button @click="loadPage">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      apikey: "3f6523220ef2d2a56a4b523bf022b783",
      page: 1,
    };
  },

  methods: {
    Latest() {
      fetch(
        `
https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=sherlock`
      )
        .then((res) => res.json())
        .then((data) => {
          this.movies = data.results;
          console.log(this.movies);
        });
    },

    loadPage() {
      this.page = this.page + 1;
    },
  },

  mounted() {
    this.Latest();
  },
};
</script>

<style scoped>
.movie__img {
  max-width: 180px;
  width: 100%;
  border-radius: 16px;
}

.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  color: #fff;
  animation: component 0.3s ease-in-out forwards;
}

.movie__info span {
  color: #bcbcbc;
  font-size: 14px;
}

.movie-card {
  max-width: 180px;
  width: 100%;
}

@keyframes component {
  from {
    transform: translateX(-150px) scale(1);
  }

  to {
    transform: translateX(0) scale(1);
  }
}
</style>
