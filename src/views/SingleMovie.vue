<template>
  <main>
    <div class="main-card">
      <div class="img">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`"
          class="main__bg"
          alt=""
        />
        <button class="back__btn" @click="back">
          <img src="../assets/Vector 9.png" alt="" />
        </button>
      </div>

      <div class="info">
        <h1 class="movie__title">{{ movie.title }}</h1>
        <p class="release__title">{{ movie.tagline }}</p>

        <div class="rate-box">
          <div class="time">
            <i class="icon__time"
              ><svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1C3.6875 1 1 3.6875 1 7C1 10.3125 3.6875 13 7 13C10.3125 13 13 10.3125 13 7C13 3.6875 10.3125 1 7 1Z"
                  stroke="#BBBBBB"
                  stroke-miterlimit="10"
                />
                <path
                  d="M7 3V7.5H10"
                  stroke="#BBBBBB"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
            <p class="time__title">{{ movie.runtime }} minutes</p>
          </div>

          <div class="rate">
            <i class="icon__rate"
              ><svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_90_168)">
                  <path
                    d="M11.6121 4.04182L8.01478 3.51815L6.40666 0.252619C6.36274 0.163211 6.29048 0.0908326 6.20122 0.0468381C5.97736 -0.0638577 5.70532 0.0283888 5.59339 0.252619L3.98528 3.51815L0.38791 4.04182C0.288731 4.05601 0.198053 4.10285 0.128627 4.17381C0.0446959 4.26021 -0.00155415 4.37646 3.98784e-05 4.49701C0.0016339 4.61756 0.0509416 4.73254 0.137128 4.81669L2.73987 7.35844L2.12496 10.9475C2.11054 11.031 2.11976 11.1169 2.15159 11.1954C2.18341 11.2739 2.23655 11.3419 2.305 11.3917C2.37344 11.4415 2.45444 11.4711 2.53882 11.4771C2.6232 11.4831 2.70757 11.4654 2.78238 11.4258L6.00003 9.7313L9.21768 11.4258C9.30552 11.4726 9.40754 11.4882 9.5053 11.4712C9.75183 11.4286 9.9176 11.1945 9.8751 10.9475L9.26019 7.35844L11.8629 4.81669C11.9338 4.74715 11.9805 4.65633 11.9947 4.55698C12.0329 4.30863 11.8601 4.07872 11.6121 4.04182Z"
                    fill="#BBBBBB"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_90_168"
                    x="-4.81"
                    y="-4.81"
                    width="21.62"
                    height="21.0983"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImage" stdDeviation="2.405" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_90_168"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_90_168"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </i>
            <p class="rate__title">{{ movie.vote_average }} (IMDb)</p>
          </div>
        </div>

        <div class="date">
          <div class="date-box">
            <h1 class="date__title">Release date</h1>

            <p class="release__title">{{ movie.release_date }}</p>
          </div>

          <div class="genre">
            <h1 class="date__title">Genres</h1>
            <div class="genres">
              <!-- <p class="release__title">{{movie.genres[0].name}}, </p>
              <p class="release__title">{{movie.genres[1].name}}, </p>
              <p class="release__title">{{movie.genres[2].name}}, </p>
              <p class="release__title">{{movie.genres[3].name}}, </p> -->
            </div>
          </div>
        </div>

        <div class="description">
          <h1 class="date__title">Description</h1>
          <p class="description__text">{{ movie.overview }}</p>
        </div>

        <h1 class="date__title">Related</h1>
        <Similar />
      </div>
    </div>
  </main>
</template>
<script>
import Similar from "../components/Similar.vue";
export default {
  data() {
    return {
      movie: [],
      apikey: "3f6523220ef2d2a56a4b523bf022b783",
    };
  },

  components: {
    Similar,
  },

  methods: {
    GetMovie() {
      let movieId = this.$route.params.id;

      fetch(
        `
https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apikey}&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => {
          this.movie = data;
          console.log(this.movie);
        });
    },

    back() {
      window.history.back();
    },
  },

  mounted() {
    this.GetMovie();
  },
};
</script>
<style scoped>
.main__bg {
  width: 100%;
  position: relative;
}

.img {
  -webkit-box-shadow: 0px -66px 100px -73px rgba (34, 60, 80, 0.6) inset;
  -moz-box-shadow: 0px -66px 100px -73px rgba (34, 60, 80, 0.6) inset;
  box-shadow: 0px -66px 100px -73px rgba (34, 60, 80, 0.6) inset;
}

.info {
  text-align: left;
  margin: 10px 26px;
}

.movie__title {
  color: #fff;
  font-size: 20px;
  font-weight: normal;
}

.time,
.rate-box,
.rate {
  display: flex;
  color: #bcbcbc;
  gap: 10px;
  font-size: 12px;
  align-items: center;
  margin-top: 12px;
}

.rate-box,
.date {
  gap: 50px;
  border-bottom: 1px solid #504f4fa6;
  padding-bottom: 16px;
  margin-top: 12px;
}

.date__title {
  color: #fff;
  font-size: 16px;
  font-weight: normal;
}

.release__title {
  color: #bcbcbc;
  font-size: 12px;
}

.date {
  display: flex;
}

.genres {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}

.date-box {
  width: 130px;
}

.description {
  margin-top: 12px;
}

.description__text {
  color: #bcbcbc;
  font-size: 13px;
  margin-top: 12px;
}

.back__btn {
  background: rgb(43 43 43 / 61%);
  border: none;
  display: flex;
  padding: 15px 10px 10px 10px;
  border-radius: 15px;
  position: absolute;
  transform: translate(10px, -233px);
}

@media screen and (max-width: 376px) {
  .back__btn {
    transform: translate(10px, -210px);
  }
}

@media screen and (max-width: 321px) {
  .back__btn {
    transform: translate(10px, -177px);
  }
}
</style>
