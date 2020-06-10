export default {
  namespaced: true,
  state: {
    userName: "abdo",
    score: 0,
  },
  getters: {
    getState(state) {
      return state;
    },
  },
  mutations: {
    increment(state, step) {
      state.score += step;
    },
  },
  actions: {},
};
