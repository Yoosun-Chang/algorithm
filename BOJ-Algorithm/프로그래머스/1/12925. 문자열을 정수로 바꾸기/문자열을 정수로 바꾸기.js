function solution(s) {
    let num = s
    var answer = parseInt(num);
    if (s[0]=='+'||s[0]=='-'){
        num = s.slice(1);
        s[0]=='+' ? answer = parseInt(num) : -parseInt(num) 
    }
    return answer;
}