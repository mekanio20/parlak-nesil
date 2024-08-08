import { createStore } from 'vuex';

export default createStore({
  state: {
    isDark: true
  },
  mutations: {
    changeMode(state) {
      state.isDark = !state.isDark
    }
  },
  actions: {
    changeMode({ commit }) {
      commit('changeMode');
    }
  },
  getters: {
    getMode: (state) => state.isDark
  }
});