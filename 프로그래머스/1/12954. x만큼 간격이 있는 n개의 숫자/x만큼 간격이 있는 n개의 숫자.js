function solution(x, n) {
    const result = [];
    let current = x;

    // n번 반복하면서 x부터 시작하여 x씩 증가하는 숫자를 리스트에 추가
    for (let i = 0; i < n; i++) {
        result.push(current);
        current += x;
    }
    
    return result;
}
