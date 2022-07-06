import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuTabs: ['basic', 'social', 'certificates'],
    abledTabs: ['basic']
  },
  getters: {
  },
  mutations: {
    ableTab(state, tab) {
      state.abledTabs.push(tab);
    }
  },
  actions: {
    ableTab({commit}, tab) {
      commit('ableTab', tab);
    }
  },
  modules: {
  }
})
