<template>
  <div :class="ClassField">
    <label :class="ClassLabel">{{ LabelInput }} </label>
    <span :id="idSpan" class="ClassSpan">{{ InvalidText }}</span>

    <input
      :type="Type"
      :class="ClassInput"
      :placeholder="Placeholder"
      :id="idInputs"
      @input="getValue"
      :value="valueInput"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import $ from "jquery";
import {} from "jquery-mask-plugin";
export default {
  name: "MyInputs",
  props: {
    ClassField: {
      type: String,
      default: "form",
    },
    idSpan: String,
    InvalidText: String,
    ClassLabel: String,
    LabelInput: String,
    Type: String,
    ClassInput: String,
    Placeholder: String,
    idInputs: String,
    valueInput: String,
  },
  mounted() {
    if (this.ClassField === "phone") {
      $(`.${this.ClassField} input`).mask("(00) 00000-0000");
    }
  },
  methods: {
    ...mapActions([
      "setFullname",
      "setNickname",
      "setEmail",
      "setPhone",
      "setLinkedin",
      "setGithub",
      "setCertificate",
      "setTeamName",
      "setInstitution",
      "setGraduation",
    ]),

    getValue(e) {
      if (this.Type === "linkedin") {
        this.setLinkedin(e.target.value);
      } else if (this.Type === "git") {
        this.setGithub(e.target.value);
      } else if (this.ClassField === "fullname") {
        this.setFullname(e.target.value);
      } else if (this.ClassField === "nickname") {
        this.setNickname(e.target.value);
      } else if (this.ClassField === "email") {
        this.setEmail(e.target.value);
      } else if (this.ClassField === "phone") {
        this.setPhone(e.target.value);
      } else if (this.ClassField === "certificates") {
        this.setCertificate(e.target.value);
      } else if (this.ClassField === "team-name") {
        this.setTeamName(e.target.value);
      } else if (this.ClassField === "institution") {
        this.setInstitution(e.target.value);
      } else if (this.ClassField === "graduation") {
        this.setGraduation(e.target.value);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./MyInputs.scss";
</style>
