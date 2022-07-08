import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuTabs: ["basic", "social", "certificates"],
    abledTabs: ["basic"],
    actualTab: "basic",
    checkbox: "",
    fullname: "",
    nickname: "",
    email: "",
    phone: "",
    birthday: "",
    age: "",
    linkedin: "",
    github: "",
    day: "",
    month: "",
    year: "",
    age: "",
  },
  getters: {},
  mutations: {
    setFullname(state, name) {
      if (/^[A-Z]{1}[a-z]+( [a-zA-Z'"-]+)+$/.test(name)) {
        state.fullname = name;
        window.localStorage.setItem("fullname", name);
      } else {
        window.localStorage.setItem("fullname", "");
      }
    },
    setNickname(state, nickname) {
      if (/^.\S+$/.test(nickname)) {
        state.nickname = nickname;
        window.localStorage.setItem("nickname", nickname);
      } else {
        window.localStorage.setItem("nickname", "");
      }
    },
    setEmail(state, email) {
      if (/^[^@ \n\r\t]+@[^@ \n\r\t]+\.[^@ \n\r\t]+$/.test(email)) {
        state.email = email;
        window.localStorage.setItem("email", email);
      } else {
        window.localStorage.setItem("email", "");
      }
    },
    setPhone(state, phone) {
      if (/^\(\d{2}\)\s\d{5}-\d{4}$/.test(phone)) {
        state.phone = phone;
        window.localStorage.setItem("phone", phone);
      } else {
        window.localStorage.setItem("phone", "");
      }
    },
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
    setFullname({ commit }, name) {
      commit("setFullname", name);
    },
    setNickname({ commit }, nickname) {
      commit("setNickname", nickname);
    },
    setEmail({ commit }, email) {
      commit("setEmail", email);
    },
    setPhone({ commit }, phone) {
      commit("setPhone", phone);
    },
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
