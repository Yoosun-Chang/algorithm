const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day = ["WED", "THU", "FRI", "SAT", "SUN", "MON", "TUE"];

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the value of \'a\': ', (a) => {
  rl.question('Enter the value of \'b\': ', (b) => {
    a = parseInt(a);
    b = parseInt(b);
    if (a < 1 || a > 12 || b < 1 || b > month[a - 1]) {
        console.log("Invalid input.");
    } else {
        let days = 0;
        for (let i = 0; i < a - 1; i++) {
            days += month[i];
        }
        days += b - 1; // 1을 빼줘서 인덱스를 맞춰줍니다.
        let idx = days % 7;
        console.log(day[idx]);
    }
    rl.close();
  });
});

/*
const month = prompt('월을 입력하세요.');
const date = prompt('일을 입력하세요.');

function solution(a,b){
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    const x = new Date('2020-'+a+'-'+b);
    return day[x.getDay()];
}
console.log(solution(month, date));
*/