function solution(brown, yellow) {
    // 갈색과 노란색 타일의 전체 개수
    const total = brown + yellow;

    // 가로 길이(w)가 세로 길이(h) 이상인 경우를 찾습니다.
    for (let h = 3; h <= Math.sqrt(total); h++) {
        if (total % h === 0) { // h로 나누어 떨어질 때, 가능한 가로 길이 w를 계산
            let w = total / h;
            // 갈색 타일의 개수가 정확히 맞는지 확인
            if ((w - 2) * (h - 2) === yellow) {
                return [w, h]; // 조건을 만족하면 [가로, 세로] 반환
            }
        }
    }
}
