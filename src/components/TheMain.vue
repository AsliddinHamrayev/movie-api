<template>
  <main>
    <div class="main-card">
      <router-link :to="{ name: 'tv', params: { id: movie.id } }">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`"
          class="main__bg"
          alt=""
        />
        <div class="info">
          <img src="../assets/Icon.png" alt="" class="play__img" />
          <div class="text-box">
            <h1 class="text-top">Continue Watching</h1>
            <h1 class="text-bottom">{{ movie.name }}</h1>
          </div>
        </div>
      </router-link>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      movie: [],
      apikey: "3f6523220ef2d2a56a4b523bf022b783",
    };
  },

  methods: {
    GetMovie() {
      fetch(
        `
https://api.themoviedb.org/3/tv/88329?api_key=${this.apikey}&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => {
          this.movie = data;
        });
    },
  },

  mounted() {
    this.GetMovie();
  },
};
</script>
<style scoped>
.main-card {
  padding: 22px;
  position: relative;
}

.main__bg {
  border-radius: 14px;
  width: 100%;
}

.info {
  position: absolute;
  top: 178px;
  left: 40px;
  background: rgba(236, 234, 234, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 17px;
}

.text-top {
  font-size: 10px;
  font-weight: normal;
  color: #eeecec;
}

.text-bottom {
  font-size: 12px;
  color: #fff;
  font-weight: 400;
}

@media screen and (max-width: 376px) {
  .info {
    top: 143px;
  }
}
@media screen and (max-width: 321px) {
  .info {
    top: 110px;
  }
}
</style>
