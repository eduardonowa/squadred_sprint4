<template>
  <div class="birthday-container">
    <label>Birthday *</label>
    <span>Please enter your Age</span>
    <div class="inputs-container">
      <div class="select">
        <label>Day</label>
        <select name="day" id="day" @change="getDay($event)">
          <option v-for="day in this.days" :key="day">
            {{ day }}
          </option>
        </select>
      </div>
      <div class="select">
        <label>Month</label>
        <select name="month" id="month" @change="getMonth($event)">
          <option v-for="month in this.months" :key="month">{{ month }}</option>
        </select>
      </div>
      <div class="select">
        <label>Year</label>
        <select name="year" id="year" @change="getYear($event)">
          <option v-for="year in this.years" :key="year">{{ year }}</option>
        </select>
      </div>
      <div class="select">
        <label> Age </label>
        <input type="text" disabled :value="age" />
      </div>
    </div>
  </div>
</template>

<script>
import data from "./services";
export default {
  // eslint-disable-next-line
  name: "Birthday",
  components: {},
  data() {
    return {
      day: "01",
      month: "01",
      year: "1900",
      days: data.daysMonth,
      months: data.monthsYear,
      years: data.yearsTot,
      age: "",
    };
  },
  methods: {
    getDay(event) {
      this.day = event.target.value;
    },
    getMonth(event) {
      this.month = event.target.value;
    },
    getYear(event) {
      this.year = event.target.value;
      let date = new Date();
      let actualYear = date.getFullYear();
      this.age = actualYear - this.year;
      this.$store.state.age = this.age;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scooped>
@import "./Birthday.scss";
</style>
