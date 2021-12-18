<template>
  <div class="profile">
    <h1 class="text" :class="{ animate: animatedText }">Asliddin Hamrayev</h1>
    <button @click="animate()">Animate</button>

    <transition name="para">
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

    <transition name="user">
      <button class="show" @click="ShowUser" v-if="!userVisible">Show</button>
      <button class="show" @click="HideUser" v-else>Hide</button>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animatedText: false,
      paraIsVisible: false,
      userVisible: false,
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
      this.$store.commit("increase");
    },

    AddTen() {
      this.$store.commit("increment", { value: 10 });
    },

    ShowUser() {
      this.userVisible = true;
    },
    HideUser() {
      this.userVisible = false;
    },
  },

  computed: {
    counter() {
      return this.$store.state.count;
    },
  },
};
</script>

<style scoped>
.profile {
  color: #fff;
  font-size: 8px;
}

.animate {
  animation: slide 0.3s ease-out forwards;
}

.para-enter-active {
  animation: slide 0.8s ease-out forwards;
}

.para-leave-active {
  animation: slide 0.8s ease-in reverse;
}

.user-enter-active {
  animation: button 5s ease-out;
}

.user-leave-active {
  animation: button 5s ease-in reverse;
}

.show {
  width: 100px;
  height: 24px;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
}

button {
  margin-left: 10px;
}

@keyframes button {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide {
  0% {
    transform: translateY(-50px) scale(1);
  }

  50% {
    transform: translateY(-0) scale(1.1);
  }

  100% {
    transform: translateY(0) scale(1);
  }
}
</style>
