<template>
  <div class="text-container">
    <p>{{ description }} {{ text }}</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Texts",
  props: {
    description: String,
    text: String,
  },
};
</script>

<style lang="scss" scooped>
@import "./Text.scss";
</style>
