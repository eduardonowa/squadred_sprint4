<template>
  <div class="home">
    <Header />
    <Tabs />
  </div>
</template>

<script>
import Header from "@/components/containers/Header/Header.vue";
import Tabs from "@/components/containers/Tabs/Tabs.vue";
export default {
  // eslint-disable-next-line
  name: "Home",
  components: {
    Tabs,
    Header,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  background: #e5e5e5;
  @media (max-width: 768px) {
    background: white;
    height: 100%;
  }

}
</style>
