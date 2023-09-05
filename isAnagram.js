function isAnagram(str1, str2) {
    let arr1 = str1.split("");
    let arr2 = str2.split(""); 
    if(arr1.length !== arr2.length)
        return false
    freq1 = {};
    freq2 = {};
    for(let i of arr1){
        freq1[i] = (freq1[i] || 0) + 1; 
    }
    for(let i of arr2){
        freq2[i] = (freq2[i] || 0) + 1; 
    }
    for(let key in freq1){
        if(freq1[key] !== freq2[key]){
            return false;
        }
    }
    return true;
}


module.exports = isAnagram