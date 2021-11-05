let a = -5;
let b = 1;

function rightShift(a, b) {
    if (a < 0){
        a = Math.floor(a / (2 ** b));
    }
    else {
        a = Math.trunc(a / (2 ** b));
    }
    return a;
}

console.log(rightShift(a,b));