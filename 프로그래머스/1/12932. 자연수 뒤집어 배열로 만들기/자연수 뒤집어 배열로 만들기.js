function solution(n) {
    let str = n.toString();
    let num = str.split('');
    num = num.reverse().map(Number);
    return num;
}