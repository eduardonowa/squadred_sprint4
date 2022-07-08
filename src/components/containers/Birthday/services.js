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

export default yearsTot;
