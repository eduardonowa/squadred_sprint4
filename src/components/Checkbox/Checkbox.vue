<template>
  <div class="box-terms">
    <label class="terms">
      <input
        type="checkbox"
        name="terms"
        class="chk"
        id="checkbox"
        required
        :checked="status"
        @change="getValue"
      />
      <span class="geekmark"></span>
      <span class="label-text">I accept the terms and privacy</span>
    </label>
    <small id="chkError" class="classSpan">Please confirm the terms</small>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  // eslint-disable-next-line
  name: "Checkbox",
  data() {
    return {
      status: null,
    }
  },
  mounted() {
    if (JSON.parse(window.localStorage.getItem('terms')) !== null) {
      this.status = JSON.parse(window.localStorage.getItem('terms'));
    } else {
      this.status = true;
      window.localStorage.setItem('terms', this.status);
    } 
  },
  methods: {
    ...mapActions(["setCheckbox"]),
    
    getValue(e) {
      if (e.target.checked) {
        this.setCheckbox(true);
      } else {
        this.setCheckbox(false);
      }
    },
  },
};
</script>

<style lang="scss" scooped>
@import "./Checkbox.scss";
</style>
