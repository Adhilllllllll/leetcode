
var isPalindrome = function (x) {
    let str = x.toString();
    let reversed = str.split('').reverse().join('');
    if (reversed === str) {
        console.log(true)
        return true

    } else {
        console.log(false);
        return false;
    }
    return reversed;
}; 