function shuffle(arr){
    let tempArr = [];
    for ( let i = 0 ; i < arr.length ; i++){
        let randomIndex = Math.floor(Math.random() * arr.length);
        if (tempArr.includes(arr[randomIndex])){
            i--;
            continue;
        } else {
            tempArr.push(arr[randomIndex]);
        }
    }
    // arr = tempArr;
    return tempArr;
}