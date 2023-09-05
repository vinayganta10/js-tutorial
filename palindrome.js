function isPalindrome(str) {
    l = str.split('');
    if(l === l.reverse())
        return true;
    return false;
}

console.log(isPalindrome("mam"));