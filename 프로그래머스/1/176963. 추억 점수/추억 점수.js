function solution(name, yearning, photo) {
    var answer = [];
    for(let p of photo){
        let result = 0;
        for(let i = 0; i<p.length; i++){
            if (name.indexOf(p[i]) >= 0){
                let index = name.indexOf(p[i])
                let score = yearning[index];
                result += score;
            }
        }
        answer.push(result);
    }
    return answer;
}