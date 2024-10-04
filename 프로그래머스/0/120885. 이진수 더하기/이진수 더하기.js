function solution(bin1, bin2) {
    let decimalSum = parseInt(bin1, 2) + parseInt(bin2, 2); // 2진수를 10진수로 변환 후 더하기
    return decimalSum.toString(2); // 결과를 다시 2진수로 변환
}
