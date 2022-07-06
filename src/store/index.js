import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuTabs: ['basic', 'social', 'certificates'],
    abledTabs: ['basic'],
    actualTab: 'basic',
    checkbox: "",
  },
  getters: {},
  mutations: {
    setCheckbox(state, checkbox) {
      state.checkbox = checkbox;
    },
    ableTab(state, tab) {
      state.abledTabs.push(tab);
    },
    changeActualTab(state, newTab) {
      state.actualTab = newTab;
    }
  },
  actions: {
    setCheckbox({ commit }, checkbox) {
      commit("setCheckbox", checkbox);
    },
    ableTab({ commit }, tab) {
      commit('ableTab', tab);
    },
    changeActualTab({ commit }, tab) {
      commit('changeActualTab', tab);
    },
  },
  modules: {},
});
