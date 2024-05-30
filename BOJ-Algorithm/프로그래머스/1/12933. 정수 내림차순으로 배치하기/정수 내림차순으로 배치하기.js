function solution(n) {
    // 주어진 숫자를 문자열로 변환하여 각 자릿수를 분리합니다.
    let digits = n.toString().split('');

    // 분리된 각 자릿수를 내림차순으로 정렬합니다.
    digits.sort((a, b) => b - a);

    // 정렬된 자릿수를 다시 하나의 숫자로 합칩니다.
    let sortedNumber = parseInt(digits.join(''));

    return sortedNumber;
}