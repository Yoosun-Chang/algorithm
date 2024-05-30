function solution(my_string, target) {
    for (let i = 0; i <= my_string.length - target.length; i++) {
        if (my_string.substring(i, i + target.length) === target) {
            return 1; 
        }
    }
    return 0; 
}
