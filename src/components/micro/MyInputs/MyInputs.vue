<template>
  <div class="form">
    <label :class="ClassLabel">{{ LabelInput }} </label>
    <span :id="idSpan" :class="ClassSpan">{{ InvalidText }}</span>

    <input
      :type="Type"
      :class="ClassInput"
      :placeholder="Placeholder"
      :id="idInputs"
      @input="getValue"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MyInputs",
  props: {
    idSpan: String,
    ClassSpan: String,
    InvalidText: String,
    ClassLabel: String,
    LabelInput: String,
    Type: String,
    ClassInput: String,
    Placeholder: String,
    idInputs: String,
  },
  methods: {
    ...mapActions(["setLinkedin", "setGithub"]),

    getValue(e) {
      if (this.Type === "linkedin") {
        this.setLinkedin(e.target.value);
      } else if (this.Type === "git") {
        this.setGithub(e.target.value);
      }
    },
  },
};
</script>

<style scooped>
@import "./MyInputs.scss";
</style>
