function solution(array, commands) {
    var answer = [];
    for(let arr of commands){
        let i = arr[0];
        let j = arr[1];
        let k = arr[2];
        let temp = array.slice(i-1,j);
        temp.sort((a, b) => a - b);
        answer.push(temp[k-1]);
    }
    return answer;
}