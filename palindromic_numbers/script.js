// [2015-06-08] Challenge #218 [Easy] Making numbers palindromic
// submitted 16 hours ago by jnazario2 0
// Description

// To covert nearly any number into a palindromic number you operate by reversing the digits and adding and then repeating the steps until you get a palindromic number. Some require many steps.
// e.g. 24 gets palindromic after 1 steps: 66 -> 24 + 42 = 66
// while 28 gets palindromic after 2 steps: 121 -> 28 + 82 = 110, so 110 + 11 (110 reversed) = 121.
// Note that, as an example, 196 never gets palindromic (at least according to researchers, at least never in reasonable time). Several numbers never appear to approach being palindromic.
// Input Description

// You will be given a number, one per line. Example:
// 11
// 68
// Output Description

// You will describe how many steps it took to get it to be palindromic, and what the resulting palindrome is. Example:
// 11 gets palindromic after 0 steps: 11
// 68 gets palindromic after 3 steps: 1111
// Challenge Input

// 123
// 286
// 196196871
// Challenge Output

// 123 gets palindromic after 1 steps: 444
// 286 gets palindromic after 23 steps: 8813200023188
// 196196871 gets palindromic after 45 steps: 4478555400006996000045558744
// Note

// Bonus: see which input numbers, through 1000, yield identical palindromes.
// Bonus 2: See which numbers don't get palindromic in under 10000 steps. Numbers that never converge are called Lychrel numbers.
"use strict";

// ~~~ Modules to manipulate input numbers ~~~ //

function numToArray(num) {

    var array = num.toString().split("");

    for (var i = 0; i < array.length; i++) {

        array[i] = parseInt(array[i], 10);
    }

    return array;
}

function reverseNum(num) {

    var array = numToArray(num);

    var revNum = parseInt(array.reverse().join(""));

    return revNum;
}


// ~~~ Check if input is a palindrome ~~~ //

function isPal(num) {

    var array = numToArray(num);
    var pal = true;

    for (var i = 0, j = array.length-1;  i < array.length/2; i++, j--) {

        // debugger;

        if (array[i] !== array[j]) {
            pal = false;
            break;
        }
    }

    return pal;
}



function palindromize(num) {

    var newNum = null;
    var rev = null;
    var base = null;
    var count = 0;

    if (isPal(num)) {

        return "That number is already a palindrome!";

    } else {

        while (!isPal(newNum)){
            if (count === 0) {

                rev = reverseNum(num);
                newNum = num + rev;
                base = newNum;
                
            } else {


            newNum = base + rev;
            rev = reverseNum(num);
            }
        }

    }
}