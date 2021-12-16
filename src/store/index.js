import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increase(state) {
      state.count = state.count + 5;
    },

    increment(state, payload) {
      state.count = state.count + payload.value;
    },
  },
  actions: {},
  modules: {},
});
