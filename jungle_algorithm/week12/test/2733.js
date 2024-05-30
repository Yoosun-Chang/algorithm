/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if (nums.length <= 2)
            return -1;

    let min = nums[0];
    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] < min)
            min = nums[i];
        if(nums[i] > max)
            max = nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != min && nums[i] != max)
            return nums[i];
    }

};

nums = [2,4,25];
console.log(findNonMinOrMax(nums))