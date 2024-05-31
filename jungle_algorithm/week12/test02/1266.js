/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let totalTime = 0;

    for (let i = 0; i < points.length - 1; i++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[i + 1];
        
        const dx = Math.abs(x2 - x1);
        const dy = Math.abs(y2 - y1);
        
        totalTime += Math.max(dx, dy);
    }

    return totalTime;
};
