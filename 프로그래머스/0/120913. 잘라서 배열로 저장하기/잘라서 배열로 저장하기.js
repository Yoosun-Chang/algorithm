function solution(my_str, n) {
    let result = [];
    for (let i = 0; i < my_str.length; i += n) {
        result.push(my_str.slice(i, i + n)); // i에서 i+n까지의 부분 문자열을 잘라 배열에 추가
    }
    return result;
}
