function solution(absolutes, signs) {
    var answer = 123456789;
    for(let i = 0; i<signs.length; i++){
        if(!signs[i]) absolutes[i] = -absolutes[i];
    }
    
    answer = absolutes.reduce((a, b) => a + b, 0);
    return answer;
}