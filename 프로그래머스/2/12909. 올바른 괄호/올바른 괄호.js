function solution(s) {
    var answer = true;
    let open = [];
    
    for(let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            open.push('(');
        } else {
            if (open.length === 0) {
                return false;  // 스택이 비었는데 닫는 괄호가 온 경우
            }
            open.pop();
        }
    }

    if (open.length != 0) answer = false;  // 모든 괄호가 짝을 이루지 않는 경우
    
    return answer;
}
