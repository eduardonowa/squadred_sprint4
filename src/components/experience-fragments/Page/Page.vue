<template>
  <div class="page-container">
    <header class="header"></header>

    <div class="card">
      <h2 class="teamSign">Team Sign Up</h2>
      <MenuComponent />

      <template v-if="getActualTab === 'basic'">
        <p>BASIC</p>
      </template>

      <template v-else-if="getActualTab === 'social'">
        <p>SOCIAL</p>
      </template>

      <template v-else-if="getActualTab === 'certificates'">
        <p>CERTIFICATES</p>
      </template>

      <button @click.prevent="next">Next</button>
    </div>
  </div>
</template>

<script>
import MenuComponent from '@/components/micro/Menu/Menu.vue';
import { mapActions } from 'vuex';
export default {
  // eslint-disable-next-line
  name: "Page",
  data() {
    return {
      actualTab: this.$store.state.actualTab,
    }
  },
  beforeUpdate() {
    this.actualTab = this.$store.state.actualTab;
  },
  computed: {
    getActualTab() {
      return this.$store.state.actualTab;
    }
  },
  components: { MenuComponent },
  methods: {
    ...mapActions(['ableTab', 'changeActualTab']),
    next() {
      if (!(this.$store.state.menuTabs.indexOf(this.actualTab) + 1 === this.$store.state.menuTabs.length)) {
        this.ableTab(this.$store.state.menuTabs[this.$store.state.menuTabs.indexOf(this.actualTab) + 1]);
        this.changeActualTab(this.$store.state.abledTabs[this.$store.state.abledTabs.length - 1]);
        this.actualTab = this.$store.state.actualTab;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
@import "./Page.scss";
</style>
