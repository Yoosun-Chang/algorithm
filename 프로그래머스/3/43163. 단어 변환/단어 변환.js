function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0; // target이 words에 없으면 변환할 수 없음
    }

    const queue = [[begin, 0]]; // [현재 단어, 변환 횟수]
    const visited = new Set();

    while (queue.length > 0) {
        const [currentWord, count] = queue.shift();

        if (currentWord === target) {
            return count; // target 단어에 도달하면 변환 횟수 반환
        }

        for (const word of words) {
            if (!visited.has(word) && canTransform(currentWord, word)) {
                visited.add(word);
                queue.push([word, count + 1]); // 변환 횟수를 1 증가시켜 큐에 추가
            }
        }
    }

    return 0; // target에 도달할 수 없는 경우
}

// 두 단어가 한 글자만 다른지 확인하는 함수
function canTransform(word1, word2) {
    let difference = 0;

    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            difference++;
        }
        if (difference > 1) {
            return false; // 한 글자 이상 다르면 변환할 수 없음
        }
    }

    return difference === 1; // 정확히 한 글자만 다른 경우에만 변환 가능
}
