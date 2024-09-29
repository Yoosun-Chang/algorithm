function solution(priorities, location) {
    let queue = priorities.map((priority, index) => ({ priority, index }));
    let executionOrder = 0;

    while (queue.length) {
        let current = queue.shift();
        
        // 우선순위 비교
        if (queue.some(process => process.priority > current.priority)) {
            queue.push(current);  // 우선순위가 더 높으면 다시 큐에 넣음
        } else {
            executionOrder++;  // 실행
            if (current.index === location) {
                return executionOrder;  // 원하는 프로세스가 실행되면 종료
            }
        }
    }
}
