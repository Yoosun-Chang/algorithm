function solution(t, p) {
    let count = 0;
    const pLength = p.length;
    const pValue = parseInt(p);
    
    for (let i = 0; i <= t.length - pLength; i++) {
        if (parseInt(t.slice(i, i + pLength)) <= pValue) {
            count++;
        }
    }
    
    return count;
}