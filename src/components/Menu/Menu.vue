<template>
  <nav class="menu">
    <div class="menu-tab" v-for="(tab, i) in $store.state.menuTabs" :key="i">
      <button
        v-if="i === 0"
        :class="tab + ' focus'"
        @click="loadTab(tab)"
        :disabled="!abledTabs.includes(tab)"
      >
        {{ capitalize(tab) }}
      </button>
      <button
        v-else
        :class="tab"
        @click="loadTab(tab)"
        :disabled="!abledTabs.includes(tab)"
      >
        {{ capitalize(tab) }}
      </button>
      <span class="focus-border"></span>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MenuComponent",
  data() {
    return {
      abledTabs: this.$store.state.abledTabs,
      actualTab: this.$store.state.actualTab,
    };
  },
  updated() {
    this.abledTabs = this.$store.state.abledTabs;
    this.actualTab = this.$store.state.actualTab;
    this.loadTab(this.actualTab);
  },
  methods: {
    ...mapActions(["changeActualTab"]),
    focused(className) {
      this.abledTabs.forEach((tab) => {
        const el = document.querySelector(`.${tab.toLowerCase()}`);
        el.classList.remove("focus");
      });
      const el = document.querySelector(`.${className}`);
      el.classList.add("focus");
    },
    loadTab(tab) {
      this.focused(tab);
      this.changeActualTab(tab);
      this.actualTab = this.$store.state.actualTab;
    },
    capitalize(word) {
      let letters = word.split("");
      let first = letters.shift();
      letters.unshift(first.toUpperCase());
      return letters.join("");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Menu.scss";
</style>
