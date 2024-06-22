let age = [2, 1, 4, 90, 12, 110];

console.table(findOldest(age));

function findOldest(array){
    let currentHigh;
    let sorted = array.sort((a,b) => {
        if (a > b) {
            console.log(`${a} is larger than ${b}`);
        } else {
            console.log(`${b} is larger than ${a}`);
        }
    });

    return currentHigh;
}