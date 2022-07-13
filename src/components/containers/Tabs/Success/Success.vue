<template>
  <div class="success-container">
    <p>Your data has been sent successfully!</p>
    <p>Full Name : {{ this.$store.state.fullname }}</p>
    <p v-if="this.$store.state.nickname">
      Nickname : {{ this.$store.state.nickname }}
    </p>
    <p>Email : {{ this.$store.state.email }}</p>
    <p v-if="this.$store.state.phone">Phone : {{ this.$store.state.phone }}</p>
    <p>Birthday : {{ birthday }}</p>
    <p>Age : {{ this.$store.state.age }}</p>
    <p v-if="this.$store.state.linkedin">
      Linkedin : {{ this.$store.state.linkedin }}
    </p>
    <p>Github : {{ this.$store.state.github }}</p>

    <div v-if="this.certificates" class="certificates">
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
    <p>Team Name : {{ this.$store.state.teamName }}</p>
    <p>Institution : {{ this.$store.state.institution }}</p>
    <p>Graduation : {{ this.$store.state.graduation }}</p>
    <div class="button">
      <Button type="1" msg="Return" :event="clearStorage" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/micro/Button/Button.vue";
export default {
  //eslint-disable-next-line
  name: "Success",
  components: {
    Button,
  },
  data() {
    return {
      birthday: "",
      certificates: [],
    };
  },
  methods: {
    getData() {
      this.birthday = localStorage.getItem("Birthday");
      this.certificates = JSON.parse(localStorage.getItem("certificates"));
    },

    clearStorage() {
      localStorage.clear();
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
