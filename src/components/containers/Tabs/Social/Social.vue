<template>
  <div class="social-container">
    <MyInputs
      LabelInput="Linkedin"
      Placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
      Type="linkedin"
      ClassInput="linkedin"
      :valueInput="linkedinValue"
    />
    <MyInputs
      LabelInput="GitHub *"
      InvalidText="Please enter your GitHub Link"
      Placeholder="https://github.com/foobar"
      idSpan="spanGit"
      Type="git"
      ClassInput="git"
      :valueInput="githubValue"
    />

    <div class="button">
      <Button type="1" msg="Next" :event="verify" />
    </div>
  </div>
</template>

<script>
import MyInputs from "@/components/MyInputs/MyInputs.vue";
import Button from "@/components/micro/Button/Button.vue";
export default {
  name: "SocialTab",
  components: {
    MyInputs,
    Button,
  },
  data() {
    return {
      linkedinValue: "",
      githubValue: "",
    };
  },
  methods: {
    verify() {
      if (localStorage.getItem("github")) {
        console.log("ok");
      } else {
        console.log("not ok");
      }
    },
  },
  mounted() {
    this.linkedinValue = localStorage.getItem("linkedin");
    this.githubValue = localStorage.getItem("github");
    document.title = `${process.env.VUE_APP_TITLE} | Social`;

  },
};
</script>

<style lang="scss" scoped>
@import "./Social.scss";
</style>
