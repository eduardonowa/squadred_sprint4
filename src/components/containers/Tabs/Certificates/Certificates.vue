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
      <div class="certificates">
        <Button
          msg="Certificate"
          type="3"
          class="certificateButton"
          :event="openCertificates"
        ></Button>
        <div
          v-show="isOpenCertificates"
          class="certificatesList"
          >
          <div
            v-for="(certificate, index) in certificates"
            :key="index + certificate"
            >
            <p>{{ certificate }}</p>
            <button class="removeButton" @click="removeFromCertificates(index)">
              X
            </button>
          </div>
        </div>
      </div>
      <div class="more-span">
        <Button
          msg="More"
          type="2"
          class="moreButton"
          :event="addCertificates"
        ></Button>
        <span> {{ spanMsg }} </span>
      </div>
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
    <Button class="finish" msg="Finish" type="1" :event="validate"></Button>
  </div>
</template>

<script>
import MyInputs from "@/components/MyInputs/MyInputs.vue";
import Button from "@/components/micro/Button/Button.vue";
import { mapActions } from "vuex";

export default {
  // eslint-disable-next-line
  name: "Certificates",
  components: { MyInputs, Button },
  data() {
    return {
      certificatesValue: "",
      teamnameValue: "",
      institutionValue: "",
      graduationValue: "",
      certificates: [],
      isOpenCertificates: true,
      spanMsg: "",
    };
  },
  mounted() {
    document.title = `${process.env.VUE_APP_TITLE} | Certificates`;

    this.certificatesValue = window.localStorage["certificate"];
    this.teamnameValue = window.localStorage["TeamName"];
    this.institutionValue = window.localStorage["institution"];
    this.graduationValue = window.localStorage["graduation"];
  },
  methods: {
    ...mapActions(["nextTab"]),
    validate() {
      if (
        window.localStorage["certificate"] &&
        window.localStorage["TeamName"] &&
        window.localStorage["institution"] &&
        window.localStorage["graduation"]
      ) {
        this.nextTab();
        console.log("valid");
      } else {
        console.log("notvalid");
      }
    },
    openCertificates() {
      this.isOpenCertificates = !this.isOpenCertificates;
    },
    addCertificates() {
      if (this.$store.state.certificate && this.certificates.length <= 4) {
        this.certificates.push(this.$store.state.certificate);
        this.spanMsg = "";
        console.log(this.certificates);
      } else if (!this.$store.state.certificate) {
        this.spanMsg = "Empty certificate is not allowed.";
      } else if (this.certificates.length == 5) {
        this.spanMsg =
          "Sorry, only 5 certificates are allowed. You can remove one certificate instead.";
      }
    },

    removeFromCertificates(indexRemove) {
      this.certificates = this.certificates.filter(
        (data, index) => index !== indexRemove
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Certificates.scss";
</style>
