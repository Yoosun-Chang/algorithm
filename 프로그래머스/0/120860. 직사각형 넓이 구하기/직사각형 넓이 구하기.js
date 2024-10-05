function solution(dots) {
    var xLength = Math.abs(dots[0][0] - dots[1][0]) || Math.abs(dots[0][0] - dots[2][0]);
    var yLength = Math.abs(dots[0][1] - dots[1][1]) || Math.abs(dots[0][1] - dots[2][1]);
    var answer = xLength * yLength;
    return answer;
}
