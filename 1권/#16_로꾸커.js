/* 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다. */

/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input) => {
    let answer = "";
    for(let i = input.length-1; i >=0; i--){
        answer += input[i]; 
    }
    console.log(answer)
    rl.close();
});
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input) => {
    const reverseString = input.split('').reverse().join('');
    console.log(reverseString);
    rl.close();
});

/*
* split() 메서드는 문자열을 배열로 만들어 반환하고,
* reverse() 메서드는 배열의 순서를 반전하며,
* join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
*/