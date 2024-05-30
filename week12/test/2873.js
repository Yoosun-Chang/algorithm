/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let answer = (nums[0] - nums[1]) * nums[2];
    for (let i = 0; i<nums.length-2; i++) {
        for (let j = i+1; j <nums.length-1; j++) {
            for (let k = j+1; k<nums.length; k++){
                if (answer < (nums[i] - nums[j]) * nums[k])
                    answer = (nums[i] - nums[j]) * nums[k];
            }
        }
    }
    if (answer <= 0)
        return 0;
    return answer;
}