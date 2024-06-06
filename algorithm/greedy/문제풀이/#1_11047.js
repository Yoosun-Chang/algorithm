let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0].split(' ')[0]); // 동전의 개수
let k = Number(input[0].split(' ')[1]); // 만들어야 할 금액

let arr = [];
// 전체 동전(화폐 단위) 데이터 입력
for (let i = 1; i <= n; i++) arr.push(Number(input[i]));

let cnt = 0;
let i = arr.length-1;

while(k > 0) {
    if (arr[i] <= k) {
        cnt += parseInt(k / arr[i]); 
        k %= arr[i]; 
    }
    i--; 
}

console.log(cnt);