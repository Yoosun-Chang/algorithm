/*
숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
*/

function isPrime(num) {
  
    if(num === 2) {
      return true;
    }
    
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0){
        // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
        return false; 
      }
    }
    // 나눠진 수가 없다면 해당 수는 소수이므로 return true
    return true; 
  }

  const readline = require('readline');

  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });
  
  rl.on("line", (input) => {
      if (isPrime(input)=== true){
        console.log("YES");
      }
      else console.log("NO");
      rl.close();
  });
  