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

// ONLY USE FIRST FUNCTION.  THE OTHERS ARE MODULES USED WITHIN palindromize();

//===========================================================================//
// ~~~ PALINDROMIFICATION!!!! ~~~ //
//===========================================================================//

// This is the base function for this entire operation.  It contains the logic for how to take in base numbers and iterate them into palindromes

// Also important to note that due to limitations in JavaScript, we need to have contingencies for numbers that are going to be too large for JavaScript to accurately determine.  

// tl;dr - this function palindromizes a base number, and has messages that deal with situations where that is not possible.  

// Since we output string messages for all cases, it is easy to filter those out of arrays later on 

function palindromize(num) {

    var newNum = null;
    var rev = null;
    var base = null;
    var count = 1;


    if (isPal(num)) {

        return "That number is already a palindrome!";

    } else {


        rev = reverseNum(num);
        newNum = num + rev;
        base = newNum;
        
        while (!isPal(newNum)){

            rev = reverseNum(base);
            newNum = base + rev;
            base = newNum;

            count ++;

            if ((count > 10000) || (newNum > 100000000000000000)) {

                return "That's a hell of a big number... Does not compute";
            }
        }
    }

    return [num, newNum];
}

//===========================================================================//
// ~~~ Modules to manipulate input numbers ~~~ //
//===========================================================================//

// Taking a number and turning it into an array
// Useful in reverseNum(); function

function numToArray(num) {

    var array = num.toString().split("");

    for (var i = 0; i < array.length; i++) {

        array[i] = parseInt(array[i], 10);
    }

    return array;
}

// Using the numToArray(); function to help in reversing a number

function reverseNum(num) {

    var array = numToArray(num);

    var revNum = parseInt(array.reverse().join(""));

    return revNum;
}

//===========================================================================//
// ~~~ Module to check if input is a palindrome ~~~ //
//===========================================================================//

// Simple test to return a boolean value which describes a numbers' palindromeness

    // Used in palindromize(); as a conditional check

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



//===========================================================================//
// ~~~ UNIQUE VALUE MODULES ~~~ //
//===========================================================================//

// This function checks for duplicates an array with the following structure:

    // [ [ palindrome, [base1, base2, base3] ], ... ]

    // The arrSpecific argument is actually a simple integer (which would be taken from the palindrome spot in the array above)

    // 

    // Returns a boolean value 

function check(arrSpecific, arrRange) {

    var isIn = false;

    for (var i = 0; i < arrRange.length; i ++) {

        var array = arrRange[i][0];
        var comparing = arrSpecific[0];

        if (array === comparing){
            
            isIn = true;
            return isIn;
        }
    }

    return isIn;
}

function unique(array) {

    var newArray = [];

    for (var i = 0; i < array.length; i ++) {

        // debugger; 

        if ( !check(array[i], newArray) && (array[i][1].length > 1) ) {

            newArray.push(array[i]);
        }
    }

    return newArray;
}

function printUniques(array) {

    var uniques = unique(array);

    for (var i = 0; i < uniques.length; i ++) {

        if (uniques[i][1].length > 1) {

            console.log("Palindrome: " + uniques[i][0] + " | " + "Shared numbers: " + uniques[i][1]);
        }
    }
}

//===========================================================================//
// ~~~ FIND LIKE PALINDROMES BONUS ~~~ //
//===========================================================================//

// uniqueShared(); --> returns an array with the following structure:

    // [ [ palindrome, [base1, base2, base3, etc...] ] ]

        // It is sorted numerically using the palindrome integer

function uniqueShared(start, end) {

    var array = onlyPal(start, end);

    var tempSharedPal = [];
    var sharedPal = [];

    for (var i = 0; i < array.length; i ++) {

        tempSharedPal = [];

        for (var j = 0; j < array.length; j ++){

            if (array[i][1] === array[j][1]) {

                tempSharedPal.push(array[j][0]);
            }
        }
        
        sharedPal.push([array[i][1], tempSharedPal]);
    }

    return sortUniqueShared( unique(sharedPal), 0, unique(sharedPal).length-1 );
};


// onlyPal(); --> returns an array with the following structure:
    
    // [ [base1, palindrome1], [base2, palindrome2], ... ]

    //  All base numbers which do not produce acceptable palindromes using the palindromize(); function will not appear in this result

    // This result will, however, include duplicate values since we are only looking at the palindromize(); result for exactly one base value.  

function onlyPal(start, end) {

    var basicArray = [];
    var palArray = [];

    for (var i = start; i <= end; i++) {

        basicArray.push(palindromize(i));
    }

    for (var j = 0; j < basicArray.length; j ++) {

        if (basicArray[j].length === 2) {

            palArray.push(basicArray[j]);
        }
    }

    return palArray;
};


//===========================================================================//
// ~~~ SORTING MODULE ~~~ //
//===========================================================================//

function sortUniqueShared(array, left, right) { 

// Lifted quicksort from Stack Overflow and modified to sort the resulting array from uniqueShared numerically instead of lexicographically based on the palindrome value

    var i = left;
    var j = right;
    var tmp;
    var pivotidx = (left + right) / 2; 
     
    var pivot = parseInt(array[pivotidx.toFixed()]);  
    
    /* partition */
    while (i <= j) {
    
        while (parseInt(array[i][0]) < pivot)
            i++;

        while (parseInt(array[j][0]) > pivot)
            j--;
        
            if (i <= j) {
               
                tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
                i++;
                j--;
            }
    }

    /* recursion */
    if (left < j){

        sortUniqueShared(array, left, j);
    }
        
    if (i < right) {

        sortUniqueShared(array, i, right);
    }
    
    return array;
}

//===========================================================================//
// ~~~ PRINTING SORTED LIST OF SHARED PALINDROMES ~~~ //
//===========================================================================//

// This will print the values of an array in a way we can easily read. 

// only useful for structure like this:  
    
    // [ [ pal , [base1, base2, base3] ], ... ] 

    // Initially made for use in tandem with the result of uniqueShared();

function printShared(array) {

    for (var i = 0; i < array.length; i ++) {

        console.log("Palindrome: " + array[i][0] + " | Shared Base Numbers: " + array[i][1]); 
    }
}

//===========================================================================//
// ~~~ MOST COMMON SHARED PALINDROME ~~~ //
//===========================================================================//

// Now we will find the palindrome with the most base numbers by checking -->array[i][1].length

// We will use a dummy value to store the location of the current largest list of base numbers and at the end, print out that value. 

function mostCommonPal(array) {

    var mostBase = [0,[]];

    for (var i = 0; i < array.length; i ++) {

        if (array[i][1].length > mostBase[1].length) {

            mostBase = array[i];
        }
    }

    return "The most common palindrome is: " + mostBase[0] + " \n " + mostBase[1].length + " Bases: " + mostBase[1];
}