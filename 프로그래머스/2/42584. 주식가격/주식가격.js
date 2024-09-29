function solution(prices) {
    var answer = [];
    for (let i = 0; i < prices.length; i++) {
        let time = 0;
        for (let j = i + 1; j < prices.length; j++) {
            time++;
            if (prices[i] > prices[j]) {
                break;  // 가격이 떨어지면 멈춤
            }
        }
        answer.push(time);
    }
    return answer;
}
