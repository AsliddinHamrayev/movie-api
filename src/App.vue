<template>
  <div id="app">
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 425px;
  width: 100%;
  background: #15141f;
  height: 100vh;
  overflow-x: scroll;
}

#app::-webkit-scrollbar {
  width: 3px;
}

#app::-webkit-scrollbar-track {
  background: #fff;
}

#app::-webkit-scrollbar-thumb {
  background: #333;
}

.route-enter-active {
  animation: route 5s ease-out;
}

.route-leave-active {
  animation: route 5s ease-in;
}

@keyframes route {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
