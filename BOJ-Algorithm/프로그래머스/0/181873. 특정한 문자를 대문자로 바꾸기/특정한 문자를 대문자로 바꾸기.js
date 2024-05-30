function solution(my_string, alp) {
    // my_string 문자열에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 반환합니다.
    return my_string.split('').map(char => char === alp ? char.toUpperCase() : char).join('');
}