import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: {
      expand: {
        morphemes: false,
        types: false,
      },
    },
    currentSound: "",
  },
  mutations: {
    toggleSearchExpand(state, expand) {
      Object.keys(state.search.expand).forEach((key) => {
        if (expand[key] !== undefined) {
          state.search.expand[key] = expand[key];
        }
      });
    },
    playingSoundId(state, name) {
      state.currentSound = name;
    },
  },
  actions: {},
});
