/*
민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 
그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
(키는 공백으로 구분하여 입력됩니다.)

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input) => {
    const heights = input.split(" ").map(Number); // 입력된 키들을 공백으로 구분하여 숫자 배열로 변환합니다.
    let isOrdered = true; // 키가 순서대로 섰는지를 확인하기 위한 변수를 초기화합니다.

    for (let i = 1; i < heights.length; i++) {
        if (heights[i] < heights[i - 1]) { // 현재 키가 이전 키보다 작으면
            isOrdered = false; // 순서가 잘못되었다고 표시합니다.
            break; // 더 이상 확인할 필요가 없으므로 반복문을 종료합니다.
        }
    }

    if (isOrdered) {
        console.log("YES"); // 순서가 올바르면 YES를 출력합니다.
    } else {
        console.log("NO"); // 순서가 잘못되었으면 NO를 출력합니다.
    }

    rl.close(); // 입력 처리 후에 readline 인터페이스를 닫습니다.
});
