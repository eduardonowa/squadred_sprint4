<template>
  <div class="birthday-container">
    <label>Birthday *</label>
    <span>Please enter your Age</span>
    <div class="inputs-container">
      <div class="select">
        <label>Day</label>
        <select name="day" id="day">
          <option @input="getDay" v-for="day in this.days" :key="day">
            {{ day }}
          </option>
        </select>
      </div>
      <div class="select">
        <label>Month</label>
        <select name="month" id="month">
          <option v-for="month in this.months" :key="month">{{ month }}</option>
        </select>
      </div>
      <div class="select">
        <label>Year</label>
        <select name="year" id="year">
          <option v-for="year in this.years" :key="year">{{ year }}</option>
        </select>
      </div>
      <div class="select">
        <MyInputs LabelInput="Age" :valueInput="age" />
      </div>
    </div>
  </div>
</template>

<script>
import MyInputs from "@/components/micro/MyInputs/MyInputs.vue";
import data from "./services";
export default {
  // eslint-disable-next-line
  name: "Birthday",
  components: {
    MyInputs,
  },
  data() {
    return {
      day: "",
      month: "",
      year: "",
      days: data.daysMonth,
      months: data.monthsYear,
      years: data.yearsTot,
      age: "",
    };
  },
  methods: {
    getDay() {
      console.log(this.day);
    },
    getAge(){
      let date = new Date()
      let actualYear = date.getFullYear()
      this.age = actualYear - this.year
    }
  },
  mounted() {},
};
</script>

<style lang="scss" scooped>
@import "./Birthday.scss";
</style>
