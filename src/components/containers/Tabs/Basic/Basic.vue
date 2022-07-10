<template>
  <div class="basic-container">
    <MyInputs
      ClassField="full-name"
      Type="text"
      LabelInput="Fullname *"
      InvalidText="Please enter your name"
      :valueInput="fullnameValue"
      Placeholder="Foo Bar"
    />
    <MyInputs
      ClassField="nickname"
      Type="text"
      LabelInput="Nickname"
      :valueInput="nicknameValue"
      Placeholder="Juanito"
    />
    <MyInputs
      ClassField="email"
      Type="email"
      LabelInput="Email *"
      InvalidText="Please enter your email"
      :valueInput="emailValue"
      Placeholder="foo@bar.com"
    />
    <MyInputs
      ClassField="phone"
      LabelInput="Phone"
      :valueInput="phoneValue"
      Placeholder="(83) 00000-0000"
      Type="tel"
    />
    <Birthday />
    <Checkbox />
    <Button :event="validate" type="0" msg="Next"></Button>
  </div>
</template>

<script>
import MyInputs from "@/components/MyInputs/MyInputs.vue";
import Checkbox from "@/components/Checkbox/Checkbox.vue";
import Birthday from "@/components/containers/Birthday/Birthday.vue";
import Button from "@/components/micro/Button/Button.vue";
import { mapActions } from "vuex";
export default {
  // eslint-disable-next-line
  name: "Basic",
  components: { MyInputs, Checkbox, Birthday, Button },
  data() {
    return {
      fullnameValue: "",
      nicknameValue: "",
      emailValue: "",
      phoneValue: "",
    };
  },
  mounted() {
    document.title = `${process.env.VUE_APP_TITLE} | Basic`;

    this.fullnameValue = window.localStorage["fullname"];
    this.nicknameValue = window.localStorage["nickname"];
    this.emailValue = window.localStorage["email"];
    this.phoneValue = window.localStorage["phone"];
  },
  methods: {
    ...mapActions(["ableTab", "changeActualTab"]),
    validate() {
      console.log("inside validate");
      if (
        window.localStorage["fullname"] &&
        window.localStorage["nickname"] &&
        window.localStorage["email"] &&
        window.localStorage["phone"] &&
        window.localStorage["age"] &&
        JSON.parse(window.localStorage["terms"])
      ) {
        console.log("valid");
        this.next();
      }
    },
    next() {
      if (
        !(
          this.$store.state.menuTabs.indexOf(this.$store.state.actualTab) +
            1 ===
          this.$store.state.menuTabs.length
        )
      ) {
        this.ableTab(
          this.$store.state.menuTabs[
            this.$store.state.menuTabs.indexOf(this.$store.state.actualTab) + 1
          ]
        );
        this.changeActualTab(
          this.$store.state.abledTabs[this.$store.state.abledTabs.length - 1]
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Basic.scss";
</style>
