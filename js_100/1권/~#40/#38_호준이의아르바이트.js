const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (input) => {
    let scores = input.split(' ').map(function(n){
        return parseInt(n, 10);
      });

      scores.sort((a, b) => {
        return a-b;
      });

      let count = 0;
      let arr = [];
      
      while (arr.length < 3) {
        let n = scores.pop();
        if (!arr.includes(n)){
          arr.push(n);
        }
        count += 1;
      }
      
      console.log(count);

    rl.close();
});