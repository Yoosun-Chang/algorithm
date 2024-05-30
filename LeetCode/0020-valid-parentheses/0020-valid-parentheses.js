/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 괄호 쌍을 저장하는 맵
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    // 스택 초기화
    const stack = [];
    
    for (let char of s) {
        if (char in bracketMap) {
            stack.push(char);
        } else {
            const topElement = stack.pop();
            if (bracketMap[topElement] !== char) {
                return false; 
            }
        }
    }
    return stack.length === 0;
};
