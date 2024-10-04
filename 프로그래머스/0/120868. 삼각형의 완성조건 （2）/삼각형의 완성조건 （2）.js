function solution(sides) {
    sides.sort((a, b) => a - b); 
    const [a, b] = sides; 

    const lowerBound = b - a + 1;
    const upperBound = a + b - 1;

    return upperBound - lowerBound + 1;  // 가능한 정수의 개수
}
