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



// ---------- FUNCTION 6 -------------//
// ---------- FUNCTION 6 -------------//
// ---------- FUNCTION 6 -------------//
// NEED TO FINISH

/*
var numArgs = function(a, b, c, d) {
    var longest = '';
    for (var i = 0; i < arguments.length; i++) {
        if (numArgs[i].length > longest.length) {
            longest= numArgs[i];
        }
    }
} console.log(longest);
*/


// ---------- FUNCTION 7 -------------//

function reverseString(str) {
    var splitString = str.split ('');
    // var splitString = 'hello.split('');
    // [ 'h' , 'e' , 'l' , 'l', 'o' ]

    var reverseArray = splitString.reverse();
    //var reverseArray to ['o', 'l', 'l', 'e', 'h']

    var joinArray = reverseArray.join('');
    //var joinArray = merges letters and changes to string: 'olleh'

    return joinArray;
    //return str;
}

reverseString('rockstar');
console.log(reverseString('rockstar'));



// ---------- FUNCTION 8 -------------//
// ---------- FUNCTION 8 -------------//
// ---------- FUNCTION 8 -------------//
// ---------- FUNCTION 8 -------------//
/*
var wordList = 'May the force be with you'
var longestWordLength = function(wordList) {
    //1. Split list/string of words into an array of strings
    var wordListSplit = wordList.split(' ');

    //2. Create variable to hold longest word length
    var longestWord = 0;

    //3. Create loop
    for (var i = 0; i < wordListSplit.length[i]; i++) {
        if (wordListSplit[i].length > longestWord) {
            longestWord = wordListSplit[i].length;
        };
    };
    //4. Return Longest word & print longest word
    //return longestWordLength;
    console.log(longestWord);
};
*/



var stringsLongerThan = ['touch', 'me', 'in', 'the', 'morning']
var overFourChar = stringsLongerThan.filter(function(element) {
    return element.length > 4;
});
console.log(overFourChar);