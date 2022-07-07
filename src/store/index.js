import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuTabs: ["basic", "social", "certificates"],
    abledTabs: ["basic"],
    actualTab: "basic",
    checkbox: "",
    linkedin: "",
    github: "",
  },
  getters: {},
  mutations: {
    setCheckbox(state, checkbox) {
      state.checkbox = checkbox;
    },
    setLinkedin(state, linkedin) {
      state.linkedin = linkedin;
      window.localStorage.setItem("linkedin", linkedin);
    },
    setGithub(state, github) {
      state.github = github;
      if (
        // eslint-disable-next-line
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
          github
        )
      ) {
        window.localStorage.setItem("github", github);
      } else {
        window.localStorage.setItem("github", "");
      }
    },
    ableTab(state, tab) {
      state.abledTabs.push(tab);
    },
    changeActualTab(state, newTab) {
      state.actualTab = newTab;
    },
  },
  actions: {
    setCheckbox({ commit }, checkbox) {
      commit("setCheckbox", checkbox);
    },
    setLinkedin({ commit }, linkedin) {
      commit("setLinkedin", linkedin);
    },
    setGithub({ commit }, github) {
      commit("setGithub", github);
    },
    ableTab({ commit }, tab) {
      commit("ableTab", tab);
    },
    changeActualTab({ commit }, tab) {
      commit("changeActualTab", tab);
    },
  },
  modules: {},
});
