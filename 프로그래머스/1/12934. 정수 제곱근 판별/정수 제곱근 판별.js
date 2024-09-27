function solution(n) {
    const sqrtN = Math.sqrt(n);
    
    if (Number.isInteger(sqrtN)) {
        return (sqrtN + 1) ** 2;  
    } else {
        return -1;  
    }
}