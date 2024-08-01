function solution(phone_number) {
    var stars = '*'.repeat(phone_number.length - 4);
    var lastFourDigits = phone_number.slice(-4);
    return stars + lastFourDigits;
}