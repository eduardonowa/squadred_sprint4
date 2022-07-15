<template>
  <div class="success-container">
    <Texts description="Your data has been sent successfully!" />
    <Texts description="Full Name: " :text="this.fullname" />
    <Texts
      v-if="this.nickname"
      description="Nickname: "
      :text="this.nickname"
    />
    <Texts description="Email: " :text="this.email" />
    <Texts v-if="this.phone" description="Phone: " :text="this.phone" />
    <Texts description="Birthday: " :text="this.birthday" />
    <Texts description="Age: " :text="this.age" />
    <Texts
      v-if="this.linkedin"
      description="Linkedin: "
      :text="this.linkedin"
      id="hide"
    />
    <Texts description="Github: " :text="this.github" id="hide" />

    <div v-if="this.isCertificates" class="certificates">
      <div class="title">
        <p>Certificates:</p>
      </div>
      <div class="list">
        <p v-for="(certificate, index) in this.certificates" :key="index">
          {{ certificate }}
          <br />
        </p>
      </div>
    </div>
    <Texts description="TeamName: " :text="this.teamName" id="hide" />
    <Texts description="Institution: " :text="this.institution" />
    <Texts description="Graduation: " :text="this.graduation" />
    <div class="button">
      <Button type="1" msg="Return" :event="clearStorage" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/micro/Button/Button.vue";
import Texts from "@/components/micro/Text/Text.vue";
export default {
  //eslint-disable-next-line
  name: "Success",
  components: {
    Button,
    Texts,
  },
  data() {
    return {
      fullname: "",
      nickname: "",
      email: "",
      phone: "",
      age: "",
      linkedin: "",
      github: "",
      birthday: "",
      teamName: "",
      institution: "",
      graduation: "",
      certificates: [],
      isCertificates: false,
    };
  },
  methods: {
    getData() {
      let day = localStorage.getItem("day");
      let month = localStorage.getItem("month");
      let year = localStorage.getItem("year");
      this.birthday = `${day}/${month}/${year}`;
      this.fullname = localStorage.getItem("fullname");
      this.email = localStorage.getItem("email");
      this.nickname = localStorage.getItem("nickname");
      this.phone = localStorage.getItem("phone");
      this.age = localStorage.getItem("age");
      this.linkedin = localStorage.getItem("linkedin");
      this.github = localStorage.getItem("github");
      this.teamName = localStorage.getItem("teamName");
      this.institution = localStorage.getItem("institution");
      this.graduation = localStorage.getItem("graduation");
      this.certificates = JSON.parse(localStorage.getItem("certificates"));
      if(this.certificates.length >= 1){
        this.isCertificates = true
      } else {
        this.isCertificates = false
      }
    },

    clearStorage() {
      localStorage.clear();
      this.$store.state.actualTab = "basic";
      console.log(this.$store.state.actualTab);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scooped>
@import "./Success.scss";
</style>
