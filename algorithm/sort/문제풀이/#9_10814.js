let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let data = [];

for (let i = 1; i <= n; i++) {
    let age = Number(input[i].split(' ')[0]);
    let name = input[i].split(' ')[1];
    data.push([age, name]);
}

data.sort((a,b)=>a[0]-b[0]); // 정렬 수행
let answer =""; // 정렬 결과 출력
for (let p of data) {
    answer += p[0] + " " + p[1] + "\n";
}
console.log(answer);