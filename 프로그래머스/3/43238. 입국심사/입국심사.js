function solution(n, times) {
    let start = 1;
    let end = Math.max(...times) * n;
    let answer = end;
    
    while(start <= end) {
        let mid = parseInt((start + end)/2);
        let total = 0;
        
        for(let time of times) {
            total += parseInt(mid / time);
        }
        if(total >= n) {
            answer = mid;
            end = mid -1;
        }
        else start = mid + 1;
    }
    return answer;
}