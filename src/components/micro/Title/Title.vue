<template>
  <div class="containerTitle">
    <h1 class="title">{{ tabNumber }} Tab</h1>
  </div>
</template>

<script>
export default {
  //eslint-disable-next-line
  name: "Title",
  props: {
    tabNumber: String,
  },
};
</script>

<style lang="scss" scoped>
@import "./Title.scss";
</style>
