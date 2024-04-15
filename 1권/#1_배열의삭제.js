// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

var nums = [100, 200, 300, 400, 500];
var answer = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 400 && nums[i] !== 500) {
        answer.push(nums[i]); // 400과 500을 제외한 요소를 새로운 배열에 추가
    }
}

console.log(answer); // 새로운 배열을 출력하여 확인

// 답안
var nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop();

console.log(nums);