/*
크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. 

은비를 위해 프로그램을 작성해 주세요.
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('크리스마스 트리의 높이를 입력하세요: ', (answer) => {
  const height = parseInt(answer);
  
  // 크리스마스 트리 출력
  for (let i = 1; i <= height; i++) {
    console.log(' '.repeat(height - i) + '*'.repeat(2 * i - 1));
  }

  rl.close();
});
