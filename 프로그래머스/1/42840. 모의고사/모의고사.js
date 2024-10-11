function solution(answers) {
    // 각 수포자의 답안 패턴을 정의합니다.
    const student1 = [1, 2, 3, 4, 5]; // 1번 수포자의 반복 패턴
    const student2 = [2, 1, 2, 3, 2, 4, 2, 5]; // 2번 수포자의 반복 패턴
    const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 3번 수포자의 반복 패턴

    // 각 수포자의 점수를 저장할 배열
    const scores = [0, 0, 0];

    // 주어진 정답 배열을 순회합니다.
    for (let i = 0; i < answers.length; i++) {
        // 현재 답이 1번 수포자의 답안 패턴과 일치하는지 확인합니다.
        if (answers[i] === student1[i % student1.length]) {
            scores[0]++; // 1번 수포자의 점수를 증가시킵니다.
        }
        // 현재 답이 2번 수포자의 답안 패턴과 일치하는지 확인합니다.
        if (answers[i] === student2[i % student2.length]) {
            scores[1]++; // 2번 수포자의 점수를 증가시킵니다.
        }
        // 현재 답이 3번 수포자의 답안 패턴과 일치하는지 확인합니다.
        if (answers[i] === student3[i % student3.length]) {
            scores[2]++; // 3번 수포자의 점수를 증가시킵니다.
        }
    }

    // 최고 점수를 찾습니다.
    const maxScore = Math.max(...scores);

    // 최고 점수를 받은 수포자(들)의 번호를 저장할 배열
    const result = [];

    // 각 수포자의 점수가 최고 점수와 같은지 확인합니다.
    for (let j = 0; j < scores.length; j++) {
        if (scores[j] === maxScore) {
            result.push(j + 1); // 수포자의 번호(1, 2, 3)를 결과 배열에 추가합니다.
        }
    }

    // 최고 점수를 받은 수포자 번호 배열을 반환합니다.
    return result;
}
