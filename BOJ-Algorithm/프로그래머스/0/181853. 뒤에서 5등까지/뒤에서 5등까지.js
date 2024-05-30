function solution(num_list) {
    num_list.sort((a,b)=>(a-b));
    var answer = [];
    for(let i = 0; i<5; i++){
        answer.push(num_list[i]);
    }
    return answer;
}