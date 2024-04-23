function sumOfSet(set) {
    let sum = 0;
    for (let item of set) {
        sum += item;
    }
    return sum;
}

function solution(n) {
    var ans = new Set();
    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            ans.add(i);
        }
    }
    return sumOfSet(ans);
}
