function solution(id_pw, db) {
    var answer = 'fail';
    for (data of db) {
        if (data[0] == id_pw[0]) {
            data[1] == id_pw[1] ? answer = 'login' : answer = 'wrong pw';
        } 
    }
    return answer;
}