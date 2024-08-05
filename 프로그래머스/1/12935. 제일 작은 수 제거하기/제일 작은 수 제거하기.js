function solution(arr) {
    let minValue = Math.min(...arr);
    
    let result = arr.filter(num => num !== minValue);
    
    if (result.length === 0) {
        return [-1];
    }
    
    return result;
}

