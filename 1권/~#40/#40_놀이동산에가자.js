const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;
let count = 0;

rl.question("제한 무게를 입력하세요: ", (limit) => {
    rl.question("인원수를 입력하세요: ", (n) => {
        console.log("무게를 입력하세요:");

        rl.on("line", (input) => {
            total += parseInt(input, 10);
            count++;

            if (count >= parseInt(n) || total > parseInt(limit)) {
                console.log(count);
                rl.close();
            }
        });
    });
});
