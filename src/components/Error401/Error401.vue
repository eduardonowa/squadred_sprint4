<template>
  <div class="erro disable-select">
    <img
      src="@/assets/401 Error Unauthorized.gif"
      alt="error image"
      class="errorimg"
    />
    <h3>Você será redirecionado em {{ time }} s...</h3>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Error401",
  data() {
    return {
      time: 7,
    };
  },
  methods: {
    redirect() {
      this.time--;
      if (this.time == 0) {
        this.$router.push("/");
      }
    },
  },
  mounted() {
    this.$store.state.loggedUser = false;
    window.localStorage.getItem("loggedUser", this.$store.state.loggedUser);
    window.localStorage.setItem("username", "");
    window.localStorage.setItem("password", "");

    setInterval(() => {
      this.redirect();
    }, 1000);
  },
};
</script>

<style lang="scss" scooped>
@import "./Error401.scss";
</style>
