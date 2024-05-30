function solution(myString, pat) {
    // 문자열 내의 "A"를 "B"로, "B"를 "A"로 바꿉니다.
    const replacedString = myString.replaceAll('A', 'temp').replaceAll('B', 'A').replaceAll('temp', 'B');
    
    // 변경된 문자열에서 주어진 패턴이 존재하는지 확인합니다.
    if (replacedString.includes(pat)) {
        return 1;
    } else {
        return 0;
    }
}