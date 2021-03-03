import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSound: "",
  },
  mutations: {
    playingSoundId(state, name) {
      state.currentSound = name;
    },
  },
  actions: {},
});
