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


// ---------- FUNCTION 4 -------------//
var numbers = [5, 2, 11, 18];

var sumArray = numbers.reduce(function (total, amount) {
    return total + amount;
});
console.log(sumArray);

// ---------- FUNCTION 5 -------------//
var numbers2 = [3.5, 2, 1, 7];
function multiplyArray(a, b, c, d) {
    return a * b * c * d;
};
console.log(multiplyArray(3.5, 2, 1, 7));