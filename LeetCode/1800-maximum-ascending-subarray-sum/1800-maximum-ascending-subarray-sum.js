/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let answer = new Array(100).fill(0);
    answer[0] = nums[0];
    let idx = 0;
    for(let i = 1; i<nums.length; i++) {
        if(nums[i] > nums[i-1]) {
            answer[idx] += nums[i];
            continue;
        }
        else {
            idx ++;
            answer[idx] += nums[i];
            continue;
        }
    }
    console.log(answer);
    let maxValue = answer.reduce((a, b) => Math.max(a, b));

    return maxValue;

};

let nums = [12,17,15,13,10,11,12];
console.log(maxAscendingSum(nums));