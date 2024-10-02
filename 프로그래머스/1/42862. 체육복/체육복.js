function solution(n, lost, reserve) {
    let realLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    let realReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);
    
    let cnt = n - realLost.length;

    realLost.forEach(l => {
        let idx = realReserve.findIndex(r => Math.abs(r - l) === 1);
        if (idx !== -1) {
            cnt++;
            realReserve.splice(idx, 1);
        }
    });

    return cnt;
}
