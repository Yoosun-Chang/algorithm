function solution(numbers) {
    const numberWords = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };

    let result = numbers;
    for (let [word, num] of Object.entries(numberWords)) {
        result = result.split(word).join(num); // 단어를 숫자로 변환
    }

    return parseInt(result);
}
