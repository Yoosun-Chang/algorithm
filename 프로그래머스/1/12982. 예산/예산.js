function solution(d, budget) {
    // 요청된 예산을 오름차순으로 정렬
    d.sort((a, b) => a - b);
    
    let total = 0;
    let count = 0;

    for (let i = 0; i < d.length; i++) {
        // 현재 부서의 요청을 총 예산에 추가
        total += d[i];
        
        // 총 예산이 남아있다면
        if (total <= budget) {
            count++; // 지원 가능한 부서 수 증가
        } else {
            break; // 예산 초과 시 종료
        }
    }
    
    return count; // 최대 지원 부서 수 반환
}