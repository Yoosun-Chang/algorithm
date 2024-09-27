function solution(x) {
    let x1 = x.toString().split('');
    
    let sum = x1.reduce((a, b) => Number(a) + Number(b), 0);
    
    return x % sum === 0;
}
