let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let words = [];
for (let i = 1; i <= n; i++) {
    words.push(input[i]);
}

function compare(a, b) {
    if (a.length === b.length) {
        return a.localeCompare(b);  
    } else {
        return a.length - b.length; 
    }
}

words.sort(compare);

let uniqueWords = [...new Set(words)];

let answer = "";
for (let i = 0; i < uniqueWords.length; i++) {
    answer += uniqueWords[i] + "\n";
}
console.log(answer);
