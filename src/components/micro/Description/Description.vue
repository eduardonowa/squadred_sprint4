<template>
  <div class="container-description">
    <h3 class="description">{{ description }}</h3>
  </div>
</template>

<script>
export default {
  //eslint-disable-next-line
  name: "Description",
  props: {
    description: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "./Description.scss";
</style>
