function solution(keyinput, board) {
    let position = [0, 0]; 

    const maxX = Math.floor(board[0] / 2); 
    const maxY = Math.floor(board[1] / 2); 

    for (let key of keyinput) {
        if (key === "up" && position[1] < maxY) {
            position[1] += 1;
        } else if (key === "down" && position[1] > -maxY) {
            position[1] -= 1;
        } else if (key === "left" && position[0] > -maxX) {
            position[0] -= 1;
        } else if (key === "right" && position[0] < maxX) {
            position[0] += 1;
        }
    }

    return position;
}
