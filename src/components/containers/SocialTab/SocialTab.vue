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
  <Birthday />
  </div>
</template>

<script>
import MyInputs from "@/components/micro/MyInputs/MyInputs.vue";
import Birthday from '@/components/containers/Birthday/Birthday.vue'
export default {
  name: "SocialTab",
  components: {
    MyInputs, Birthday
  },
};
</script>

<style lang="scss" scoped>
@import "./SocialTab.scss";
</style>
