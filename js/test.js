let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]

function camelize(string) {
    return string.split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}

function filterRange(arr, a, b) {
    return arr.filter((num => (num >= a && num <= b)));
}

function filterRangeInPlace(arr, a, b){
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
    
        // remove if outside of the interval
        if (val < a || val > b) {
          arr.splice(i, 1);
          i--;
        }
      }
}

function testPush (){
    //adding comment to push back to big machine
}