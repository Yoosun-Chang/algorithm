/* ============== 선택 정렬 ============== */
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i; // 가장 작은 원소의 인덱스
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}
/* =================================== */

/* ============== 버블 정렬 ============== */
function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) { // 오름차순으로 정렬하기 위해 조건 수정
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
/* =================================== */

/* ============== 삽입 정렬 ============== */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            } else {
                break;
            }
        }
    }
}
/* =================================== */

/* ============== 병합 정렬 ============== */
let sorted = []; // 전역 변수로 선언하여 모든 재귀 호출에서 접근 가능하도록 함

function merge(arr, left, mid, right) {
    let i = left;
    let j = mid + 1;
    let k = left; 
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) 
            sorted[k++] = arr[i++];
        else 
            sorted[k++] = arr[j++];
    }
    if (i > mid) {
        for (; j <= right; j++) 
            sorted[k++] = arr[j];
    } else {
        for (; i <= mid; i++) 
            sorted[k++] = arr[i];
    }
    for (let x = left; x <= right; x++) {
        arr[x] = sorted[x];
    }
}

function mergeSort(arr, left, right) {
    if (left < right) {
        let mid = parseInt((left + right) / 2); 
        mergeSort(arr, left, mid); 
        mergeSort(arr, mid + 1, right); 
        merge(arr, left, mid, right);
    }
}
/* =================================== */

/* 성능 측정을 위한 코드 */
function measureTime(sortFunction, arr, name) {
    let startTime = new Date().getTime();
    sortFunction(arr);
    let endTime = new Date().getTime();
    console.log(`${name} 소요 시간:`, endTime - startTime, "ms.");
}

let arr, startTime, endTime;

/* 1) 선택 정렬의 수행 시간 측정 */
arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));
measureTime(selectionSort, [...arr], '선택 정렬');

/* 2) 정렬된 배열에 대한 선택 정렬의 수행 시간 측정 */
arr = Array.from({ length: 30000 }, () => 7);
measureTime(selectionSort, [...arr], '정렬된 배열에 대한 선택 정렬');

/* 3) 버블 정렬의 수행 시간 측정 */
arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));
measureTime(bubbleSort, [...arr], '버블 정렬');

/* 4) 정렬된 배열에 대한 버블 정렬의 수행 시간 측정 */
arr = Array.from({ length: 30000 }, () => 7);
measureTime(bubbleSort, [...arr], '정렬된 배열에 대한 버블 정렬');

/* 5) 삽입 정렬의 수행 시간 측정 */
arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));
measureTime(insertionSort, [...arr], '삽입 정렬');

/* 6) 정렬된 배열에 대한 삽입 정렬의 수행 시간 측정 */
arr = Array.from({ length: 30000 }, () => 7);
measureTime(insertionSort, [...arr], '정렬된 배열에 대한 삽입 정렬');

/* 7) 병합 정렬의 수행 시간 측정 */
arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));
sorted = new Array(arr.length);
measureTime((arr) => mergeSort(arr, 0, arr.length - 1), [...arr], '병합 정렬');

/* 8) 정렬된 배열에 대한 병합 정렬의 수행 시간 측정 */
arr = Array.from({ length: 30000 }, () => 7);
sorted = new Array(arr.length);
measureTime((arr) => mergeSort(arr, 0, arr.length - 1), [...arr], '정렬된 배열에 대한 병합 정렬');
