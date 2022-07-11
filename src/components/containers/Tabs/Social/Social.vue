<template>
  <div class="social-container">
    <MyInputs
      LabelInput="Linkedin"
      Placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
      Type="linkedin"
    />
    <MyInputs
      LabelInput="GitHub *"
      InvalidText="Please enter your GitHub Link"
      Placeholder="https://github.com/foobar"
      idSpan="spanGit"
      Type="git"
    />
  </div>
</template>

<script>
import MyInputs from "@/components/MyInputs/MyInputs.vue";
export default {
  // eslint-disable-next-line
  name: "Social",
  components: {
    MyInputs,
  },
};
</script>

<style lang="scss" scoped>
@import "./Social.scss";
</style>
