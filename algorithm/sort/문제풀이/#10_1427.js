let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');


function sort(number){
  let answer = ''
  // 숫자로 변환(매개변수를 문자로 변환 -> 쪼개기 -> 내림차순 정렬 -> 합치기)
  answer = Number(number.toString().split("").sort((a,b)=>(b-a)).join(""))
  
  return answer
}

console.log(sort(input))
