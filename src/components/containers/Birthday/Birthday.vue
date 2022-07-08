<template>
  <div class="birthday-container">
    <label>Birthday *</label>
    <span>Please enter your Age</span>
    <div class="inputs-container">
      <div class="select">
        <label>Day</label>
        <select name="day" id="day" @change="getDay($event)">
          <option v-for="day in this.days" :key="day">
            {{ padStart(day) }}
          </option>
        </select>
      </div>
      <div class="select">
        <label>Month</label>
        <select name="month" id="month" @change="getMonth($event)">
          <option v-for="month in this.months" :key="month">
            {{ padStart(month) }}
          </option>
        </select>
      </div>
      <div class="select">
        <label>Year</label>
        <select name="year" id="year" @change="getYear($event)">
          <option v-for="year in this.years" :key="year">
            {{ year }}
          </option>
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
    getDay(event) {
      this.day = event.target.value;
    },
    getMonth(event) {
      this.month = event.target.value;
    },
    getYear(event) {
      this.year = event.target.value;
      let date = new Date();
      let actualDay = date.getDate();
      let actualMonth = 1 + date.getMonth();
      let actualYear = date.getUTCFullYear();
      let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (this.day > actualDay) {
        actualDay = actualDay + month[actualMonth - 1];
        actualMonth = actualMonth - 1;
      }
      if (this.month > actualMonth) {
        actualMonth = actualMonth + 12;
        actualYear = actualYear - 1;
      }
      this.age = actualYear - this.year;
      console.log(this.age);
    },
    padStart(date) {
      return String(date).padStart(2, "0");
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scooped>
@import "./Birthday.scss";
</style>
