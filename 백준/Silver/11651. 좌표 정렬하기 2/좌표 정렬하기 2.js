let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let data = [];
for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].split(' ').map(Number);
        data.push([x, y]);
}
function compare (a, b) {
    if (a[1] == b[1]) 
       return a[0] - b[0]; 
    else 
        return a[1] - b[1]; 
}
data.sort(compare); // 정렬 수행
let answer =""; // 정렬 결과 출력
for (let point of data) {
    answer += point[0] + " " + point[1] + "\n";
}
console.log(answer);