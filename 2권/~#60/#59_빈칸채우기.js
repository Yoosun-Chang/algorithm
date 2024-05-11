const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function 빈칸채우기(str) {
    const n = 25 + parseInt((str.length/2), 10);

    //왼쪽부터 채우기
    const a = str.padStart(n, '='); 
    
    //오른쪽까지 채워서 출력
    console.log(a.padEnd(50, '='));

}

rl.question("문자열을 입력하세요: ", (input) => {
    빈칸채우기(input);
    rl.close();
});