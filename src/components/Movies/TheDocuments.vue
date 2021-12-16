<template>
  <div>
    <div class="movies">
      <div
        class="movie-card"
        v-for="documentary in documentary"
        :key="documentary.id"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w500/${documentary.poster_path}`"
          class="movie__img"
          alt=""
        />
        <p class="movie__info">
          {{ documentary.title }} <span>({{ documentary.release_date }})</span>
        </p>
      </div>
    </div>
    <button @click="loadPage">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documentary: [],
      apikey: "3f6523220ef2d2a56a4b523bf022b783",
      page: 1,
    };
  },

  // ${this.apikey}
  methods: {
    Series() {
      fetch(
        `

https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}&with_genres=99`
      )
        .then((res) => res.json())
        .then((data) => {
          this.documentary = data.results;
          console.log(this.documentary);
        });
    },

    loadPage() {
      this.page = this.page + 1;
    },
  },

  mounted() {
    this.Series();
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
