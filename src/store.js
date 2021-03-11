import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "",
    history: [],
    search: {
      expand: {
        morphemes: false,
        types: false,
      },
    },
    currentSound: "",
  },
  mutations: {
    setTitle(state, title) {
      state.title = title;
      const currentRoute = state.history[state.history.length - 1];
      if (currentRoute) {
        currentRoute.title = title;
      }
    },
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
    recordHistory(state, to) {
      // Reloading same page.
      const current = state.history[state.history.length - 1];
      if (current && to.path === current.route) {
        return;
      }
      // Going back.
      const prev = state.history[state.history.length - 2];
      if (prev && to.path === prev.route.path) {
        state.history.pop();
        return;
      }
      // Navigating (forward).
      state.history.push({ route: to });
    },
  },
  actions: {},
});
