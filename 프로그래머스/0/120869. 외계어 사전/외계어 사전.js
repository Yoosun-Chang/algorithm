function solution(spell, dic) {
    let sortedSpell = spell.sort().join(''); // 알파벳 정렬 후 문자열로 변환
    for (let word of dic) {
        if (sortedSpell === word.split('').sort().join('')) {
            return 1;  // 일치하는 단어가 있으면 1 반환
        }
    }
    return 2;  // 없으면 2 반환
}
