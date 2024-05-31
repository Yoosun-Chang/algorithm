/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumTripletValue(nums) {
    let M = 0;
    let dist_M = 0;
    let bottom = nums[0];
    let top = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        M = Math.max(dist_M * num, M);

        if (top < num) {
            bottom += num - top;
            top = num;
        } else if (bottom > num) {
            bottom = num;
            dist_M = Math.max(dist_M, top - bottom);
        }
    }

    return M;
}

