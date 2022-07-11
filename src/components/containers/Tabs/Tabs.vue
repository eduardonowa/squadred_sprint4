<template>
  <div class="card">
    <h2 class="teamSign">Team Sign Up</h2>
    <MenuComponent />

    <template v-if="getActualTab === 'basic'">
      <Basic />
    </template>

    <template v-else-if="getActualTab === 'social'">
      <Social />
    </template>

    <template v-else-if="getActualTab === 'certificates'">
      <Success />
    </template>

    <button @click.prevent="next">Next</button>
  </div>
</template>

<script>
import MenuComponent from "@/components/Menu/Menu.vue";
import { mapActions } from "vuex";
import Social from "@/components/containers/Tabs/Social/Social.vue";
import Basic from "@/components/containers/Tabs/Basic/Basic.vue";
// import Certificates from "@/components/containers/Tabs/Certificates/Certificates.vue";
import Success from "@/components/containers/Tabs/Success/Success.vue";

export default {
  // eslint-disable-next-line
  name: "Tabs",

  data() {
    return {
      actualTab: this.$store.state.actualTab,
    };
  },
  beforeUpdate() {
    this.actualTab = this.$store.state.actualTab;
  },
  computed: {
    getActualTab() {
      return this.$store.state.actualTab;
    },
  },
  components: { MenuComponent, Social, Basic, Success },

  methods: {
    ...mapActions(["ableTab", "changeActualTab"]),
    next() {
      if (
        !(
          this.$store.state.menuTabs.indexOf(this.actualTab) + 1 ===
          this.$store.state.menuTabs.length
        )
      ) {
        this.ableTab(
          this.$store.state.menuTabs[
            this.$store.state.menuTabs.indexOf(this.actualTab) + 1
          ]
        );
        this.changeActualTab(
          this.$store.state.abledTabs[this.$store.state.abledTabs.length - 1]
        );
        this.actualTab = this.$store.state.actualTab;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Tabs.scss";
</style>
