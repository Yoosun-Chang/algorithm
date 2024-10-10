function solution(nums) {
    const maxPick = nums.length / 2; 
    const uniqueCount = new Set(nums).size;

    return Math.min(maxPick, uniqueCount);
}
