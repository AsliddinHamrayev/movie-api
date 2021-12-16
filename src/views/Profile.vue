<template>
  <div class="profile">
    <h1 class="text" :class="{ animate: animatedText }">Asliddin Hamrayev</h1>
    <button @click="animate()">Animate</button>

    <transition name="text">
      <h1 class="text" v-if="paraIsVisible">Visible Paragraph</h1>
    </transition>
    <button
      @click="para()"
      style="display: block; margin: 0 auto; margin-top: 25px"
    >
      Visible
    </button>

    <h1>{{ $store.state.count }}</h1>
    <button @click="Addone">+1</button>
    <button @click="Addfive">+5</button>
    <button @click="AddTen">+10</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animatedText: false,
      paraIsVisible: false,
    };
  },

  methods: {
    animate() {
      this.animatedText = !this.paraIsVisible;
    },

    para() {
      this.paraIsVisible = !this.paraIsVisible;
    },

    Addone() {
      this.$store.state.count++;
    },

    Addfive() {
      this.$store.commit('increase');
    },

    AddTen() {
      this.$store.commit('increment', {value: 10})
    }
  },

  computed: {
    counter() {
      return this.$store.state.count
    }
  }
};
</script>

<style scoped>
.profile {
  color: #fff;
  font-size: 8px;
}

.text {
  /* transition: all .3s ease-out; */
}

.animate {
  /* transform: translateX(-100px); */
  animation: slide 0.3s ease-out forwards;
}

.text-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.text-enter-active {
  transition: slide 0.3s ease-out;
}

.text-enter-to {
  opacity: 1;
  transform: translateY(0);
}

button {
  margin-left: 10px;
}

@keyframes slide {
  0% {
    transform: translateX(0) scale(1);
  }

  50% {
    transform: translateX(-50px) scale(1.5);
  }

  100% {
    transform: translateX(-100px) scale(1);
  }
}
</style>
