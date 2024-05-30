function solution(array) {
    const maxNumber = Math.max(...array); // 배열의 최댓값 구하기
    const counts = new Array(maxNumber + 1).fill(0); // 최댓값만큼의 배열 생성 및 초기화

    // 각 숫자의 등장 횟수를 세기
    array.forEach(element => {
        counts[element]++;
    });

    let mode = -1;

    // 최댓값을 가진 숫자 찾기
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] === Math.max(...counts)) {
            if (mode === -1) {
                mode = i;
            } else {
                // 최빈값이 여러 개일 경우
                mode = -1;
                break;
            }
        }
    }

    return mode;
}

