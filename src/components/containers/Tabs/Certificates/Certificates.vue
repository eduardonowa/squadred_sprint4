<template>
  <div class="certificate-container">
    <MyInputs
      LabelInput="Certificates"
      ClassField="certificates"
      Placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
      Type="text"
      :valueInput="certificatesValue"
    />
    <div class="buttons">
      <Button msg="Certificate" type="3" class="certificateButton"></Button>
      <Button msg="More" type="2" class="moreButton"></Button>
    </div>
    <MyInputs
      LabelInput="TeamName *"
      idSpan="teamSpan"
      ClassField="team-name"
      InvalidText="Please enter your Team Name"
      Placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
      Type="text"
      :valueInput="teamnameValue"
    />
    <MyInputs
      LabelInput="Institution *"
      idSpan="institutionSpan"
      ClassField="institution"
      InvalidText="Please enter your Institution"
      Placeholder="Universidade Federal da Paraíba"
      Type="text"
      :valueInput="institutionValue"
    />
    <MyInputs
      LabelInput="Graduation *"
      idSpan="graduationSpan"
      ClassField="graduation"
      InvalidText="Please enter your Graduation"
      Placeholder="Ciências da Computação"
      Type="text"
      :valueInput="graduationValue"
    />
    <Button class="finish" msg="Finish" type="1"></Button>
  </div>
</template>

<script>
import MyInputs from "@/components/MyInputs/MyInputs.vue";
import Button from "@/components/micro/Button/Button.vue";
import { mapActions } from "vuex";

export default {
  // eslint-disable-next-line
  name: "Certificates",
  components: { MyInputs, Button, },
  data(){
    return{
      certificatesValue: "",
      teamnameValue: "",
      institutionValue: "",
      graduationValue: "",
    };
  },
  mounted(){
    document.title = `${process.env.VUE_APP_TITLE} | Certificates`;

    this.certificatesValue = window.localStorage["certificates"];
    this.teamnameValue = window.localStorage["teamname"];
    this.institutionValue = window.localStorage["institution"];
    this.graduationValue = window.localStorage["graduation"];
  },
  methods: {
    ...mapActions(["nextTab"]),
    validate() {
      if(
        window.localStorage["certificates"] &&
        window.localStorage["teamname"] &&
        window.localStorage["institution"] &&
        window.localStorage["graduation"]
      ) {
        this.nextTab();
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./Certificates.scss";
</style>
