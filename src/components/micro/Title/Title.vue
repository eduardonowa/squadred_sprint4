<template>
  <div class="containerTitle">
    <h3 class="type">{{ type }}</h3>
    <h1 class="description">{{ tabNumber }} Tab</h1>
  </div>
</template>

<script>
export default {
  //eslint-disable-next-line
  name: "Title",
  props: {
    tabNumber: String,
  },
  data() {
    return {
      type: "Forms",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./Title.scss";
</style>
