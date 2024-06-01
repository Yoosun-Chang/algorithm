## JavaScript 정렬
• JavaScript에서는 배열에 포함된 데이터를 정렬하는 `sort()` 함수를 제공한다.
• 최악의 경우 시간 복잡도 𝑂(𝑁𝑙𝑜𝑔𝑁)을 보장한다.
• 알고리즘 및 코딩 테스트 문제를 해결할 때 정렬 기능이 필요하다면, 단순히 `sort()` 함수를
사용하는 것을 권장한다.
• 만약, `sort()` 함수의 사용이 제한된다면, 병합 정렬과 같은 알고리즘을 직접 구현하여 사용하자.

다음과 같은 형태로 사용할 수 있다.
`arr.sort(CompareFunction);`
• 이때, compareFunction은 정렬 기준을 정해주는 함수다.
• 내림차순, 오름차순 등 구체적인 정렬 기준을 설정할 수 있다.

---

## JavaScript 정렬 기준 함수(Compare Function)
• JavaScript의 정렬 함수에서는 정렬 기준 함수가 사용된다.
• 두 개의 원소 a, b를 입력으로 받는다.
1. 반환 값이 0보다 작은 경우 → a가 우선순위가 높아, 앞에 위치한다.
2. 반환 값이 0보다 큰 경우 → b가 우선순위가 높아, 앞에 위치한다.
3. 반환 값이 0인 경우 → a와 b의 순서를 변경하지 않는다.

> 💡 참고 사항
• 정렬 기준 함수를 사용하지 않으면 각 원소는 문자열로 취급된다.
• 유니코드 값 순서대로 정렬된다.
• 따라서, 항상 정렬 기준 함수를 명시하는 습관을 들일 필요가 있다.

---
## 정수에 대한 오름차순 정렬 예시
```js
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];
function compare(a, b) {
    return a - b;
}
arr.sort(compare);
console.log(arr);
```
더 간단하게?
```js
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];
arr.sort(function(a, b) {
    return a - b;
});
console.log(arr);
```
더더 간단하게?
```js
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];
arr.sort((a, b) => a - b);
console.log(arr);
```

---
## 정수에 대한 내림차순 정렬 예시
```js
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];
function compare(a, b) {
    return b - a;
}
arr.sort(compare);
console.log(arr);
```
더 간단하게?
```js
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];
arr.sort(function(a, b) {
    return b - a;
});
console.log(arr);
```
더더 간단하게?
```js
let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];
arr.sort((a, b) => b - a);
console.log(arr);
```

---
## 문자열에 대한 오름차순 정렬 예시
• 별도로 비교 함수(compare function)을 사용하지 않으면, 유니코드 순으로 정렬된다.
• 따라서 함수를 적용하지 않음으로써, 간단히 문자열 정렬을 수행할 수 있다.
```js
let arr = ["fineapple", "banana", "durian", "apple", "carrot"];
arr.sort();
console.log(arr);
```
[실행 결과]
```
[ 'apple', 'banana', 'carrot', 'durian', 'fineapple' ]
```

---
## 문자열에 대한 내림차순 정렬 예시
```js
let arr = ["fineapple", "banana", "durian", "apple", "carrot"];
function compare(a, b) {
    if (a > b) 
        return -1;
    else if (a < b) 
        return 1;
    else 
        return 0;
    }
arr.sort(compare);
console.log(arr);
```
더 간단하게?
```js
let arr = ["fineapple", "banana", "durian", "apple", "carrot"];
arr.sort((a, b) => b.localeCompare(a));
console.log(arr);
```
[실행결과]
```
[ 'fineapple', 'durian', 'carrot', 'banana', 'apple' ]
```

---
## 문자열에 대한 오름차순 정렬 예시 (대소문자 구문X)
- toUpperCase() 메서드 사용

```js
let arr = ["fineapple", "Banana", "durian", "Apple", "carrot"];
function compare(a, b) {
    let upperCaseA = a.toUpperCase();
    let upperCaseB = b.toUpperCase();
    if (upperCaseA < upperCaseB) 
        return -1;
    else if (upperCaseA > upperCaseB) 
        return 1;
    else 
        return 0;
    }
arr.sort(compare);
console.log(arr);
```
[실행 결과]
```
[ 'Apple', 'Banana', 'carrot', 'durian', 'fineapple' ]
```

---
## 객체에 대하여 원하는 기준으로 오름차순 정렬 예시
- 성적 점수가 높은 순으로 학생 데이터를 나열할 수 있다.

```js
let arr = [
    {
        name: "홍길동",
        score: 90
    }, {
        name: "김철수",
        score: 85
    }, {
        name: "박영희",
        score: 97
    }
];
function compare(a, b) {
    return b.score - a.score;
}
arr.sort(compare);
console.log(arr);
```

[실행 결과]
```
[
  { name: '박영희', score: 97 },
  { name: '홍길동', score: 90 },
  { name: '김철수', score: 85 }
]
```