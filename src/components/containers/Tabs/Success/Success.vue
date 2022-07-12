<template>
  <div class="success-container">
    <p>Your data has been sent successfully!</p>
    <p>Full Name : {{ this.$store.state.fullname }}</p>
    <p v-if="this.$store.state.nickname">
      Nickname : {{ this.$store.state.nickname }}
    </p>
    <p>Email : {{ this.$store.state.email }}</p>
    <p v-if="this.$store.state.phone">Phone : {{ this.$store.state.phone }}</p>
    <p>Birthday : {{ this.$store.state.birthday }}</p>
    <p>Age : {{ this.$store.state.age }}</p>
    <p v-if="this.$store.state.linkedin">
      Linkedin : {{ this.$store.state.linkedin }}
    </p>
    <p>Github : {{ this.$store.state.github }}</p>
    <p v-if="this.$store.state.certificates">
      Full Name : {{ this.$store.state.certificates }}
    </p>
    <p>Team Name : {{ this.$store.state.teamName }}</p>
    <p>Institution : {{ this.$store.state.institution }}</p>
    <p>Graduation : {{ this.$store.state.graduation }}</p>
    <div class="button">
      <Button type="1" msg="Return" />
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
};
</script>

<style lang="scss" scooped>
@import "./Success.scss";
</style>
