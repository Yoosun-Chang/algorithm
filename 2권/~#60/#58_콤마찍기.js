// 내장함수 사용
const n = prompt('숫자를 입력해주세요.');
parseInt(n, 10);

console.log(n.toLocaleString());

// 재귀함수 사용
function comma(s) {
  if (s.length <= 3) {
    return s;
  } else {
    return comma(s.slice(0, s.length - 3)) + ',' + s.slice(s.length - 3);
  }
}

console.log(comma(n));