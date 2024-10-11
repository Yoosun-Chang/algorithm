function solution(triangle) {
    const n = triangle.length;
    
    // 맨 아래층부터 위로 올라가며 최대 합 계산
    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }

    // 최종적으로 맨 위의 값이 최대 합
    return triangle[0][0];
}

// 테스트 예제
const triangle = [
    [7],
    [3, 8],
    [8, 1, 0],
    [2, 7, 4, 4],
    [4, 5, 2, 6, 5]
];
console.log(solution(triangle)); // 출력: 30
