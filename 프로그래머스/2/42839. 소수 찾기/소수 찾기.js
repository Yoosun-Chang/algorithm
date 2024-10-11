function solution(numbers) {
    // 주어진 문자열을 숫자 배열로 변환합니다.
    const nums = numbers.split('');
    // 소수 집합을 사용하여 중복된 소수를 방지합니다.
    const primeSet = new Set();

    // 모든 가능한 순열을 생성하는 함수
    function getPermutations(arr, fixed) {
        // 현재까지 생성된 숫자를 정수로 변환합니다.
        if (fixed.length > 0) {
            const num = parseInt(fixed);
            // 소수인지 확인하고, 집합에 추가합니다.
            if (isPrime(num)) {
                primeSet.add(num);
            }
        }

        // 숫자 배열을 순회하며 순열을 만듭니다.
        for (let i = 0; i < arr.length; i++) {
            // 선택된 숫자를 제외한 나머지 배열을 생성합니다.
            const newArr = arr.slice();
            newArr.splice(i, 1);
            // 선택된 숫자를 고정된 문자열에 추가하고 재귀 호출합니다.
            getPermutations(newArr, fixed + arr[i]);
        }
    }

    // 소수인지 확인하는 함수
    function isPrime(num) {
        if (num < 2) return false; // 2보다 작은 숫자는 소수가 아님
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false; // 나누어 떨어지면 소수가 아님
        }
        return true; // 소수일 경우 true 반환
    }

    // 주어진 숫자로 만들 수 있는 모든 순열을 생성합니다.
    getPermutations(nums, '');

    // Set에 저장된 소수의 개수를 반환합니다.
    return primeSet.size;
}
