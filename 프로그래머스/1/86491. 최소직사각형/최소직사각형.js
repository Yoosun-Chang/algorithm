function solution(sizes) {
    // 각 열의 최대값을 찾기 위한 변수
    let maxWidth = 0;
    let maxHeight = 0;

    sizes.forEach(([width, height]) => {
        // 너비와 높이를 정렬하여 최대 너비와 높이를 업데이트
        if (width > height) {
            maxWidth = Math.max(maxWidth, width);
            maxHeight = Math.max(maxHeight, height);
        } else {
            maxWidth = Math.max(maxWidth, height);
            maxHeight = Math.max(maxHeight, width);
        }
    });

    // 직사각형의 면적을 반환
    return maxWidth * maxHeight;
}
