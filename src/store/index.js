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
    certificate: "",
    teamName: "",
    institution: "",
    graduation: "",
    day: "",
    month: "",
    year: "",
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
      window.localStorage["terms"] = checkbox;
    },
    setLinkedin(state, linkedin) {
      state.linkedin = linkedin;
      if (
        // eslint-disable-next-line
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
          linkedin
        )
      ) {
        window.localStorage.setItem("linkedin", linkedin);
      } else {
        window.localStorage.setItem("linkedin", "");
      }
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
    changeActualTab(state, newTab) {
      state.actualTab = newTab;
    },
    setCertificate(state, certificate) {
      state.certificate = certificate;
      window.localStorage.setItem("certificate", certificate);
      console.log(certificate);
    },
    setTeamName(state, teamName) {
      state.teamName = teamName;
      if (
        // eslint-disable-next-line
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
          teamName
        )
      ) {
        window.localStorage.setItem("teamName", teamName);
      } else {
        window.localStorage.setItem("teamName", "");
      }
    },
    setInstitution(state, institution) {
      state.institution = institution;
      window.localStorage.setItem("institution", institution);
      console.log(institution);
    },
    setGraduation(state, graduation) {
      window.localStorage.setItem("graduation", graduation);
      state.graduation = graduation;
      console.log(graduation);
    },

    nextTab(state) {
      if (
        state.menuTabs.indexOf(state.actualTab) + 1 !==
        state.menuTabs.length
      ) {
        state.abledTabs.push(
          state.menuTabs[state.menuTabs.indexOf(state.actualTab) + 1]
        );
        state.actualTab = state.abledTabs[state.abledTabs.length - 1];
      }
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
    changeActualTab({ commit }, newTab) {
      commit("changeActualTab", newTab);
    },
    nextTab({ commit }) {
      commit("nextTab");
    },
    setCertificate({ commit }, certificate) {
      commit("setCertificate", certificate);
    },
    setTeamName({ commit }, teamName) {
      commit("setTeamName", teamName);
    },
    setInstitution({ commit }, institution) {
      commit("setInstitution", institution);
    },
    setGraduation({ commit }, graduation) {
      commit("setGraduation", graduation);
    },

  },
  modules: {},
});
