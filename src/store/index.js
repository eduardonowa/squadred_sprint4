import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    checkbox: "",
  },
  getters: {},
  mutations: {
    setCheckbox(state, checkbox) {
      state.checkbox = checkbox;
    },
  },
  actions: {
    setCheckbox({ commit }, checkbox) {
      commit("setCheckbox", checkbox);
    },
  },
  modules: {},
});
