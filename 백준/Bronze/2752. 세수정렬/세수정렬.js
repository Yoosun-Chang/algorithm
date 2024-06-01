const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let arr = input.map(Number).sort((a,b)=>a-b);
let answer = "";
for (a of arr) {
    answer += a + " ";
}
console.log(answer);