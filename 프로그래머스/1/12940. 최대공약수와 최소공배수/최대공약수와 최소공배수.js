function solution(a, b) {
    function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
    
    function lcm(x, y) {
        return (x * y) / gcd(x, y);
    }

    const gcdValue = gcd(a, b);
    const lcmValue = lcm(a, b);
    
    return [gcdValue, lcmValue];
}