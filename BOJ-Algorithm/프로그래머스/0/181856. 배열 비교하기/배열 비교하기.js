function solution(arr1, arr2) {
    // 두 배열의 길이를 비교하여 길이가 다르면 더 긴 배열이 큽니다.
    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    } else { // 배열의 길이가 같은 경우
        // 각 배열의 원소의 합을 계산합니다.
        const sum1 = arr1.reduce((acc, curr) => acc + curr, 0);
        const sum2 = arr2.reduce((acc, curr) => acc + curr, 0);
        // 두 배열의 원소의 합을 비교하여 대소관계를 결정합니다.
        return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1;
    }
}
