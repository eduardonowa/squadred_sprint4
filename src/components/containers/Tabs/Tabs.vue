<template>
  <div class="card">
    <template v-if="actualTab !== 'success'">
      <h2 class="teamSign">Team Sign Up</h2>
      <MenuComponent />

      <template v-if="getActualTab === 'basic'">
        <Basic />
      </template>

      <template v-else-if="getActualTab === 'social'">
        <Social />
      </template>

      <template v-else-if="getActualTab === 'certificates'">
        <Certificates />
      </template>

      <button @click.prevent="nextTab">Next</button>
    </template>

    <template v-else-if="getActualTab === 'success'">
      <Success />
    </template>
  </div>
</template>

<script>
import MenuComponent from "@/components/Menu/Menu.vue";
import { mapActions } from "vuex";
import Social from "@/components/containers/Tabs/Social/Social.vue";
import Basic from "@/components/containers/Tabs/Basic/Basic.vue";
import Certificates from "@/components/containers/Tabs/Certificates/Certificates.vue";
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
  components: { MenuComponent, Social, Basic, Certificates, Success },

  methods: {
    ...mapActions(["nextTab"]),
  },
};
</script>

<style lang="scss" scoped>
@import "./Tabs.scss";
</style>
