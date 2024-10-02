function solution(people, limit) {
    people.sort((a, b) => a - b); // 무게 순 정렬
    let left = 0;
    let right = people.length - 1;
    let boats = 0;

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++; // 가장 가벼운 사람 태움
        }
        right--; // 가장 무거운 사람 태움
        boats++; // 보트 사용
    }

    return boats;
}
