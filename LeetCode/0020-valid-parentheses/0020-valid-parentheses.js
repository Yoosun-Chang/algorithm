/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
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
