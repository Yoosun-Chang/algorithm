function solution(score) {
    const avgScores = score.map(s => (s[0] + s[1]) / 2);
    const sortedScores = [...avgScores].sort((a, b) => b - a); // 평균 점수 내림차순 정렬
    
    return avgScores.map(s => sortedScores.indexOf(s) + 1); // 등수 계산
}
