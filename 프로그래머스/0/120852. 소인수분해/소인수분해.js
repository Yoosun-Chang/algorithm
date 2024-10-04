function solution(n) {
    const answer = [];
    let divisor = 2;

    while (n > 1) {
        if (n % divisor === 0) {
            if (!answer.includes(divisor)) {
                answer.push(divisor);
            }
            n /= divisor;
        } else {
            divisor++;
        }
    }

    return answer;
}
