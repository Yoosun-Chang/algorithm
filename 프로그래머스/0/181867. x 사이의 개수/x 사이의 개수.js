function solution(myString) {
    var answer = [];
    str = myString.split('x');
    for (let i = 0; i<str.length; i++){
        answer.push(str[i].length);
    }
    return answer;
}