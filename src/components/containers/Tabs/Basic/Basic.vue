<template>
  <div class="basic-container">
    <MyInputs
      ClassField="fullname"
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
      InvalidText="Invalid"
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
      InvalidText="Invalid"
      :valueInput="phoneValue"
      Placeholder="(83) 00000-0000"
      Type="tel"
    />
    <Birthday />
    <div class="footer">
      <Checkbox />
      <div class="button-next">
        <Buttons :event="validate" type="0" msg="Next" />
      </div>
    </div>
  </div>
</template>

<script>
import MyInputs from "@/components/MyInputs/MyInputs.vue";
import Checkbox from "@/components/Checkbox/Checkbox.vue";
import Birthday from "@/components/containers/Birthday/Birthday.vue";
import { mapActions } from "vuex";
import Buttons from "@/components/micro/Buttons/Buttons.vue";
export default {
  // eslint-disable-next-line
  name: "Basic",
  components: { MyInputs, Checkbox, Birthday, Buttons },
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
    ...mapActions(["nextTab"]),
    validate() {
      if (
        window.localStorage["fullname"] &&
        window.localStorage["email"] &&
        window.localStorage["age"] &&
        window.localStorage["day"] &&
        window.localStorage["month"] &&
        window.localStorage["year"] &&
        JSON.parse(window.localStorage["terms"])
      ) {
        if (
          (document.querySelector(".nickname input").value == "" ||
            localStorage["nickname"] != "") &&
          (document.querySelector(".phone input").value == "" ||
            localStorage["phone"] != "")
        ) {
          this.nextTab();
        } else {
          ["nickname", "phone"].forEach((input) => {
            let inpVal = document.querySelector(`.${input} input`).value;
            let error = document.querySelector(`.${input} .ClassSpan`);
            if (inpVal !== "" && window.localStorage[input] === "") {
              error.style.visibility = "visible";
            } else {
              error.style.visibility = "hidden";
            }
          });
        }
      } else {
        ["fullname", "email"].forEach((input) => {
          let error = document.querySelector(`.${input} .ClassSpan`);
          if (!window.localStorage[input]) {
            error.style.visibility = "visible";
          } else {
            error.style.visibility = "hidden";
          }
        });
        ["nickname", "phone"].forEach((input) => {
          let inpVal = document.querySelector(`.${input} input`).value;
          let error = document.querySelector(`.${input} .ClassSpan`);
          if (inpVal !== "" && window.localStorage[input] === "") {
            error.style.visibility = "visible";
          } else {
            error.style.visibility = "hidden";
          }
        });
      }
      if (!JSON.parse(window.localStorage["terms"])) {
        document.getElementById("chkError").style.visibility = "visible";
      } else {
        document.getElementById("chkError").style.visibility = "hidden";
      }
      if (
        !window.localStorage["age"] ||
        !window.localStorage["day"] ||
        !window.localStorage["month"] ||
        !window.localStorage["year"]
      ) {
        document.getElementById("spanBirthday").style.visibility = "visible";
      } else {
        document.getElementById("spanBirthday").style.visibility = "hidden";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Basic.scss";
</style>
