function solution(x) {
    const digitSum = Array.from(String(x), Number).reduce((acc, curr) => acc + curr, 0);
    
    const isHarshad = x % digitSum === 0;
    
    return isHarshad;
}