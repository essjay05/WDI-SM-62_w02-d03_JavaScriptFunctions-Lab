// ---------- FUNCTION 1 -------------//

function maxOfTwoNumbers (x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

console.log(maxOfTwoNumbers(3, 9));


// ---------- FUNCTION 2 -------------//

var maxOfThree = function(x, y, z) {
    if ((x > y) && (x > z)) {
        console.log(`${x} is the largest of the three.`);
    } else if ((y > z) && (y > x)) {
        console.log(`${y} is the largest of the three.`);
    } else {
        console.log(`${z} is the largest of the three.`);
    };
}
console.log(maxOfThree(2, 8, 3.4));


// ---------- FUNCTION 3 -------------//

function isCharAVowel (letter) {
    return letter.match('a|e|i|o|u') ? true: false};

console.log(isCharAVowel('i'));