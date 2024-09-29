function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = Array(bridge_length).fill(0); // 다리 상태
    let bridgeWeight = 0; // 다리 위 트럭의 총 무게

    while (truck_weights.length > 0 || bridgeWeight > 0) {
        time++;

        // 다리에서 트럭이 나감
        bridgeWeight -= bridge.shift();

        // 새로운 트럭이 올라갈 수 있는지 확인
        if (truck_weights.length > 0 && bridgeWeight + truck_weights[0] <= weight) {
            let truck = truck_weights.shift();
            bridge.push(truck);
            bridgeWeight += truck;
        } else {
            bridge.push(0); // 트럭이 없으면 빈 자리 채움
        }
    }

    return time;
}
