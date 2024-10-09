const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    // 첫 번째 줄: N과 M
    const [N, M] = input[0].split(' ').map(Number);
    // 두 번째 줄: 강의의 길이
    const lectures = input[1].split(' ').map(Number);

    // 이진 탐색 범위 설정
    let start = Math.max(...lectures); // 최소 블루레이 크기
    let end = lectures.reduce((a, b) => a + b, 0); // 최대 블루레이 크기
    let answer = end;

    // 이진 탐색 시작
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let count = 1; // 블루레이 개수
        let sum = 0; // 현재 블루레이에 저장된 강의 길이 합

        // 강의 길이를 순회하며 블루레이에 녹화
        for (let length of lectures) {
            if (sum + length > mid) {
                // 현재 블루레이에 더 넣을 수 없다면 새로운 블루레이 필요
                count++;
                sum = length;
            } else {
                // 현재 블루레이에 강의를 추가
                sum += length;
            }
        }

        // 블루레이의 개수가 M 이하이면 크기를 줄여도 됨
        if (count <= M) {
            answer = mid;
            end = mid - 1;
        } else {
            // 블루레이의 개수가 M보다 많으면 크기를 늘려야 함
            start = mid + 1;
        }
    }

    console.log(answer);
    process.exit();
});
