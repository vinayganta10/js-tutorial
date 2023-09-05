function patternPrint(n){
    for(let i = 0;i<n;i++){
        strings = "";
        if(i===0 || i == n-1){
            for(let j = 0;j<n;j++){
                strings += '*';
            }
        }
        else{
            strings += '*';
            for(let i = 0;i<n-2;i++){
                strings += " ";
            }
            strings += '*';
        }
        console.log(strings);
    }
}

patternPrint(100);