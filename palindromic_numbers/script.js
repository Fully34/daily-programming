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


// TABLE OF CONTENTS:
    
    // 1. Palindromize(num); --> Does a lot of the heavy lifting, has the primary palindrome calculation logic. 

    // 2. Finding shared palindromes
        
        // - This is where we start doing a lot of calculations over (potentially) large ranges.  
        
        // The functions in this section use modules to start whittling down the elements of output arrays to only contain instances of palindromes with onlyPal(start, end); --> Then we take that list and chop it further by only looking at unique values unique(array); --> and finally we get rid of any palindrome/base sets that don't have multiple base values (since we want to look at the palindromes that have multiple possible bases)
        
        // We also use a quicksort algorithm module to sort the final output of uniqueShared(start, end);

    //3. mostCommonPal(start, end); Finds the most common palindrome over a certain range.

        // Takes output of uniqueShared(); and finds the palindrome with the most common base numbers


//===========================================================================//
// ~~~ 1. PALINDROMIFICATION!!!! ~~~ //
//===========================================================================//

// palindromize(); is the base function for this entire operation.  It contains the logic for how to take in base numbers and iterate them into palindromes. 

// Also important to note that due to limitations in JavaScript, we need to have contingencies for numbers that are going to be too large for JavaScript to accurately determine.  

// Since we output string messages for all cases where a palindrome is not calculated, it is easy to filter those out of arrays later on to only focus on the palindromes. 

    // tl;dr - this function palindromizes a base number, and has messages that deal with situations where that is not possible.


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

    // Un - comment console.log() statement if you want to see the result of a single calculation
    // Comment console.log() if you are going to use other functions in here, or you are just going to have a lot of stuff to scroll through

    // console.log("Base Number: " + num + " | Palindrome: " + newNum );

    return [num, newNum];
}

//===========================================================================//
// ~~~ 2. FIND LIKE PALINDROMES BONUS ~~~ //
//===========================================================================//

// uniqueShared(); --> returns an array with the following structure:

    // [ [ palindrome, [base1, base2, base3, etc...] ] ]

        // It is sorted numerically using the palindrome integer
        // Does this by first finding the unique sub-arrays within the array sharedPal --> Then sorts them using the modified quicksort algorithm I unabashedly stole from Stack Overflow (user: Andriy). 

function uniqueShared(start, end) {

    var array = onlyPal(start, end);

    var tempSharedPal = [];
    var sharedPal = [];

    for (var i = 0; i < array.length; i ++) {

        tempSharedPal = []; //reset tempSharedPal for each outer loop reset

        for (var j = 0; j < array.length; j ++){

            if (array[i][1] === array[j][1]) {

                tempSharedPal.push(array[j][0]); 

                // This is a bit of terrible programming.  The array we are looking at was created using onlyPal(); which uses palindromize(); which returns values in the reverse order ([ baseNumber, palindrome]).  

                // That is why we are concerned with array[i/j][1]

                // If the palindrome is the same during the inner loop, we add the 0th element from the result of onlyPal();

                    // This is the base number that creates the same palindrome

                    // I understand if you are confused... I'm just dumb and I don't want to fix this right now.  
            }
        }
        
        sharedPal.push([array[i][1], tempSharedPal]); // Adding the palindrome and all of the base numbers that share that palindrome --> returns duplicate values for array[i][1]
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
}

//===========================================================================//
// ~~~ 3. MOST COMMON SHARED PALINDROME BONUS ~~~ //
//===========================================================================//

// Now we will find the palindrome with the most base numbers by checking -->array[i][1].length

// We will use a dummy value to store the location of the current largest list of base numbers and at the end, print out that value. 

function mostCommonPal(start, end) {

    var array = uniqueShared(start, end);
    var mostBase = [0,[]];

    for (var i = 0; i < array.length; i ++) {

        if (array[i][1].length > mostBase[1].length) {

            mostBase = array[i];
        }
    }

    return "The most common palindrome in that range is: \n\n" + " - " +mostBase[0] + " - " + " \n\nThere are " + mostBase[1].length + " Base Numbers: \n\n" + mostBase[1];
}


//===========================================================================//
// ~~~ Appendix - MODULARITY IS GOOD! ~~~ //
//===========================================================================//
// ~~~ a. UNIQUE VALUE MODULES ~~~ //
//===========================================================================//

// check(); checks for duplicates an array with the following structure:

    // [ [ palindrome, [base1, base2, base3] ], ... ]

    // The arrSpecific argument is actually a simple integer (which would be taken from the palindrome spot in the array above)

    // arrRange is a full array with many values with the above array structure

    // Returns a boolean value 

    // Used in tandem with unique();

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


// unique(); argument array and the array returned both follow the same structure: 
    
    // [ [ palindrome, [base1, base2, base3] ], ... ]

    // The input array potentially has duplicate values where the output array will not have any duplicate values

    // IE: each [palindrome, [base1,base2,base3,...]] sub-array will be unique

    // This is used in tandem with uniqueShared(); and sortUniqueShared(); below to return only unique values of the desired ranges.  

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


// Simple visualization of unique values of an array with the structure: 

    // [ [ palindrome, [base1, base2, base3] ], ... ]

function printUniques(array) {

    var uniques = unique(array);

    for (var i = 0; i < uniques.length; i ++) {

        if (uniques[i][1].length > 1) {

            console.log("Palindrome: " + uniques[i][0] + " | " + "Shared numbers: " + uniques[i][1]);
        }
    }
}


//===========================================================================//
// ~~~ b. SORTING MODULE ~~~ //
//===========================================================================//

// Lifted random quicksort from Stack Overflow and modified to sort the resulting array from uniqueShared numerically instead of lexicographically based on the palindrome value

// Posted by User: Andriy (1/15/2015)

// Modified for arrays with the structure:

    // [ [base1, palindrome1], [base2, palindrome2], ... ]

function sortUniqueShared(array, left, right) { 

    var i = left;
    var j = right;
    var tmp;
    var pivotidx = (left + right) / 2; 
     
    var pivot = parseInt(array[pivotidx.toFixed()]);  
    
     // partition 

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

     // recursion 

    if (left < j){

        sortUniqueShared(array, left, j);
    }
        
    if (i < right) {

        sortUniqueShared(array, i, right);
    }
    
    return array;
}

//===========================================================================//
// ~~~ c. Module to check if input is a palindrome ~~~ //
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
// ~~~ d. MODULES TO MANIPULATE INPUT NUMBERS ~~~ //
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

// reverseNum(); takes in num (integer) and returns a reversed version of num as an integer

function reverseNum(num) {

    var array = numToArray(num);

    var revNum = parseInt(array.reverse().join(""));

    return revNum;
}

//===========================================================================//
// ~~~ e. PRINTING SORTED LIST OF SHARED PALINDROMES ~~~ //
//===========================================================================//

// This will print the values of an array in a way we can easily read. 

// only useful for the following structure:  
    
    // [ [ palindrome , [base1, base2, base3] ], ... ] 

    // Initially made for use in tandem with the result of uniqueShared();

    // Mostly a visualization tool

function printShared(array) {

    for (var i = 0; i < array.length; i ++) {

        console.log("Palindrome: " + array[i][0] + " | Shared Base Numbers: " + array[i][1]); 
    }
}
