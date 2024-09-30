function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] === b[n]) {
            return a.localeCompare(b);  // n번째 문자가 같으면 사전순 정렬
        } else {
            return a[n].localeCompare(b[n]);  // n번째 문자 기준으로 정렬
        }
    });
}
