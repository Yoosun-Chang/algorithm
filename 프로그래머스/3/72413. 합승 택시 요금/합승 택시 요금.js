function solution(n, s, a, b, fares) { //s 출발 a의도착 b의도착 fares 요금
    const INF = Infinity;
    const road = Array.from({length:n+1}, ()=>Array(n+1).fill(INF));
    
    for (let i = 1; i<=n; i++){
        road[i][i] = 0;
    }
    
    for (const [c, d, f] of fares) {
        road[c][d] = f;
        // road[d][c] = f;
    }
    
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                road[i][j] = Math.min(road[i][j], road[i][k] + road[k][j]);
            }
        }
    }
    
    let minFare = INF;
    for(let k = 1; k<=n; k++){
        minFare = Math.min(minFare,road[s][k]+road[k][a]+road[k][b]);
    }
    return minFare;
}