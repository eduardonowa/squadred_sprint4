const daysMonth = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];

const monthsYear = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

function range(begin, end) {
  var arr = [];
  for (var i = begin; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

let date = new Date();
let actualYear = date.getFullYear();
const yearsTot = range(1900, actualYear);

export default {daysMonth, monthsYear, yearsTot}

