<template>
  <div class="certificate-container">
    <MyInputs
      LabelInput="Certificates"
      ClassField="certificates"
      Placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
      Type="text"
      :valueInput="getCertificateValue"
    />
    <div class="buttons">
      <div class="certificates">
        <Buttons
          msg="Certificate"
          type="3"
          class="certificateButton"
          :event="openCertificates"
        />
        <div v-show="isOpenCertificates" class="certificatesList" id="idList">
          <div
            id="listOfCertificates"
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
        <Buttons
          msg="More"
          type="2"
          class="moreButton"
          :event="addCertificates"
        />
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
    <div class="footer-certificates">
      <span> {{ spanGeneral }}</span>
      <Buttons class="finish" msg="Finish" type="1" :event="validate" />
    </div>
  </div>
</template>

<script>
import MyInputs from "@/components/MyInputs/MyInputs.vue";
import Buttons from "@/components/micro/Buttons/Buttons.vue";
import { mapActions } from "vuex";

export default {
  // eslint-disable-next-line
  name: "Certificates",
  components: { MyInputs, Buttons },
  data() {
    return {
      certificatesValue: "",
      teamnameValue: "",
      institutionValue: "",
      graduationValue: "",
      certificates: [],
      isOpenCertificates: false,
      spanMsg: "",
      moreButtonAppear: false,
      spanGeneral: "",
    };
  },
  methods: {
    ...mapActions(["nextTab"]),
    validate() {
      let fullNameStorage = window.localStorage["fullname"];
      let emailStorage = window.localStorage["email"];
      let ageStorage = window.localStorage["age"];
      let githubStorage = window.localStorage["github"];
      let teamNameStorage = window.localStorage["teamName"];
      let institutionStorage = window.localStorage["institution"];
      let graduationStorage = window.localStorage["graduation"];
      if (teamNameStorage) {
        document.getElementById("teamSpan").style.visibility = "hidden";
      } else {
        document.getElementById("teamSpan").style.visibility = "visible";
      }
      if (institutionStorage) {
        document.getElementById("institutionSpan").style.visibility = "hidden";
      } else {
        document.getElementById("institutionSpan").style.visibility = "visible";
      }
      if (graduationStorage) {
        document.getElementById("graduationSpan").style.visibility = "hidden";
      } else {
        document.getElementById("graduationSpan").style.visibility = "visible";
      }

      if (
        fullNameStorage &&
        emailStorage &&
        ageStorage &&
        githubStorage &&
        teamNameStorage &&
        institutionStorage &&
        graduationStorage
      ) {
        this.$store.state.actualTab = "success";
        this.spanGeneral = "";
      } else {
        this.spanGeneral = "Ops, you miss some field";
      }
    },

    openCertificates() {
      this.isOpenCertificates = !this.isOpenCertificates;
    },
    addCertificates() {
      if (
        this.$store.state.certificate &&
        this.certificates.length <= 4 &&
        // eslint-disable-next-line
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
          this.$store.state.certificate
        )
      ) {
        this.certificates.push(this.$store.state.certificate);
        this.spanMsg = "";
        this.$store.state.certificate = "";
      } else if (!this.$store.state.certificate) {
        this.spanMsg = "Empty certificate is not allowed.";
      } else if (this.certificates.length == 5) {
        this.spanMsg =
          "Sorry, only 5 certificates are allowed. You can remove one certificate instead.";
      } else if (
        // eslint-disable-next-line
        !/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
          this.$store.state.certificate
        )
      ) {
        this.spanMsg = "Invalid certificate.";
      }
    },

    removeFromCertificates(indexRemove) {
      this.certificates = this.certificates.filter(
        (data, index) => index !== indexRemove
      );
    },

    canMoreAppear() {
      if (this.certificates.length >= 1) {
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("idList").style.visibility = "visible";
      } else {
        document.getElementById("button3").style.visibility = "hidden";
        document.getElementById("idList").style.visibility = "hidden";
      }
    },

    getCertificatesStorage() {
      if (localStorage.getItem("certificates")) {
        let certificatesStorage = JSON.parse(
          localStorage.getItem("certificates")
        );
        this.certificates = certificatesStorage;
      }
    },
  },
  updated() {
    this.canMoreAppear();
    window.localStorage.setItem(
      "certificates",
      JSON.stringify(this.certificates)
    );
    console.log("updated", this.$store.state.certificate);
  },
  mounted() {
    document.title = `${process.env.VUE_APP_TITLE} | Certificates`;
    this.certificatesValue = window.localStorage["certificate"];
    this.teamnameValue = window.localStorage["teamName"];
    this.institutionValue = window.localStorage["institution"];
    this.graduationValue = window.localStorage["graduation"];
    this.getCertificatesStorage();
  },
  computed: {
    getCertificateValue() {
      return this.$store.state.certificate;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Certificates.scss";
</style>
