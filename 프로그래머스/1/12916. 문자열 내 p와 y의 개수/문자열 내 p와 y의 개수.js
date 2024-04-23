function solution(s){
    var answer = true;
    let p = 0;
    let y = 0;
        for(let i = 0; i<=s.length-1;i++){
            if(s[i]=='p' || s[i]=='P'){
                p += 1;
            }
            if(s[i]=='y' || s[i]=='Y'){
                y += 1;
            }
    }
    y == p ? answer = true : answer = false  
    return answer;
}