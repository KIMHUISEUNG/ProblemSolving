let [a, b] = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const A = +a;
const B = +b;
console.log(A * B);
