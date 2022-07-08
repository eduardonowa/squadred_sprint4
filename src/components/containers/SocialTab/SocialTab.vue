<template>
  <div class="social-container">
    <MyInputs
      LabelInput="Linkedin"
      Placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
      Type="linkedin"
      ClassInput="linkedin"
    />
    <MyInputs
      LabelInput="GitHub *"
      InvalidText="Please enter your GitHub Link"
      Placeholder="https://github.com/foobar"
      idSpan="spanGit"
      Type="git"
      ClassInput="git"
    />

    <div class="button">
      <Button type="1" msg="Next" :event="verify" />
    </div>
  </div>
</template>

<script>
import MyInputs from "@/components/micro/MyInputs/MyInputs.vue";
import Button from "@/components/micro/Button/Button.vue";
export default {
  name: "SocialTab",
  components: {
    MyInputs,
    Button,
  },
  methods: {
    verify() {
      console.log("verify");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./SocialTab.scss";
</style>
