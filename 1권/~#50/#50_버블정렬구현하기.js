function bubble(arr) {
    let result = arr.slice(); 
  
    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; j<result.length-i; j++) {
        if (result[j] > result[j + 1]) {
            var tmp = result[j];
            result[j] = result[j+1];
            result[j+1] = tmp;
        }
      }
    }
    return result;
  }
  
  const items = prompt('입력해주세요.').split(' ').map((n) => {
    return parseInt(n, 10);
  });
  
  console.log(bubble(items));