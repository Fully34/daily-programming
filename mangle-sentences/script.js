// [2015-06-22] Challenge #220 [Easy] Mangling sentences
// submitted 3 days ago * by XenophonOfAthens2 1
// Description

// In this challenge, we are going to take a sentence and mangle it up by sorting the letters in each word. So, for instance, if you take the word "hello" and sort the letters in it, you get "ehllo". If you take the two words "hello world", and sort the letters in each word, you get "ehllo dlorw".
// Inputs & outputs

// Input

// The input will be a single line that is exactly one English sentence, starting with a capital letter and ending with a period
// Output

// The output will be the same sentence with all the letters in each word sorted. Words that were capitalized in the input needs to be capitalized properly in the output, and any punctuation should remain at the same place as it started. So, for instance, "Dailyprogrammer" should become "Aadegilmmoprrry" (note the capital A), and "doesn't" should become "denos't".
// To be clear, only spaces separate words, not any other kind of punctuation. So "time-worn" should be transformed into "eimn-ortw", not "eimt-norw", and "Mickey's" should be transformed into "Ceikms'y", not anything else.
// Edit: It has been pointed out to me that this criterion might make the problem a bit too difficult for [easy] difficulty. If you find this version too challenging, you can consider every non-alphabetic character as splitting a word. So "time-worn" becomes "eimt-norw" and "Mickey's" becomes ""Ceikmy's". Consider the harder version as a Bonus.
// Sample inputs & outputs

// Input 1

// This challenge doesn't seem so hard.

// Output 1

// Hist aceeghlln denos't eems os adhr.

// Input 2

// There are more things between heaven and earth, Horatio, than are dreamt of in your philosophy. 

// Output 2

// Eehrt aer emor ghinst beeentw aeehnv adn aehrt, Ahioort, ahnt aer ademrt fo in oruy hhilooppsy.
// Challenge inputs

// Input 1

// Eye of Newt, and Toe of Frog, Wool of Bat, and Tongue of Dog.

// Input 2

// Adder's fork, and Blind-worm's sting, Lizard's leg, and Howlet's wing. 

// Input 3

// For a charm of powerful trouble, like a hell-broth boil and bubble.


//===========================================================================//
                        /* ~~~ Main Function ~~~ */ 
//===========================================================================//
'use strict';

var input1 = 'This challeege doesn\'t seem so hard.';

// function mangle(string) {

//     var stringArr = strToArr(string);
//     var splitArr = letterArr(stringArr);

//     var punctIndexArr = wherePunct(string);
//     var capIndexArr = isCapital(string);

//     // debugger;

    
    


// }





//===========================================================================//
                        /* ~~~ CAPITALIZATION ~~~ */ 
//===========================================================================//


//============================== Find Capitals ==============================//

//returns indices of capital letters in an array
function isCapital(string) {

    var capitalized = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    var stringArr = string.split('');

    var capIndexArr = [];

    for (var i = 0; i < stringArr.length; i ++){

    // debugger;

        for (var j = 0; j < capitalized.length; j ++) {

            if (stringArr[i] === capitalized[j]) {

                capIndexArr.push( i );

            }
        }
    }

    return capIndexArr;
}

//===========================================================================//
                        /* ~~~ Punctuation ~~~ */ 
//===========================================================================//


//========================= Invoke the functions ===========================//
        
function bigDaddyPunc(string) {

    //Gives me an array of sub-arrays where the sub arrays are each word from original string

    var splitArr = letterArr(strToArr(string));

    var puncObj = wherePunct(splitArr);
    console.log(puncObj);

    var puncGone = takePuncOut(splitArr, puncObj);

    var sorted = sortSubs(puncGone);

    var puncInsert = returnPunct(sorted, puncObj);

    for (var i = 0; i < puncInsert.length; i ++){

        puncInsert[i] = puncInsert[i].join('');
    }

    
    return puncInsert.join(' ');
}

//============================== FIND THE PUNC ==============================//
        
// Seeing if a string contains punctuation        
//DOENSN'T WORK IF THE STRING HAS LENGTH > 9 BECAUSE PARSEINT RETURNS TWO NUMBERS -- FIXED
function wherePunct(array) {

    var inlinePunct = './,?!-\''.split('');

    // var stringArr = string.split('');

    var punctIndexArr = [];

    //loop through each word
    for (var i = 0; i < array.length; i ++){

        var word = array[i]; //-> reference the index, rather than look up every time

        // looping through each letter of word[i]
        for (var x = 0; x < word.length; x ++){

            var character = word[x];

            // ****** Make the conditional a helper function **** 
            // if ( (inlinePunct.indexOf(character) > -1 ){
                // punctIndexArr.push( { 'word' : i , 'letter' : x, 'punctuation' : character } );
            // }
                // -> replaces the for and if below:
            for (var j = 0; j < inlinePunct.length; j ++) {

                if (character === inlinePunct[j]) {

                    //Push object with index and punctuation values to punctIndexArr
                    punctIndexArr.push( { 'word' : i , 'letter' : x, 'punctuation' : character } );
                }
            }
        }
    }

    return punctIndexArr;
}


//============================== Take Punc Out ==============================//
        
function takePuncOut(array, puncObj) {


    //target proper outer array element

    for (var i = 0; i < puncObj.length; i ++){

        //This is insanity 
        array[ puncObj[i]['word'] ].splice(puncObj[i]['letter'], 1);
        // Since I know exactly where the punctuation is with puncObj, I can go in and remove it from the array created by using:
            // letterArr(stringToArr(input1)); -> This essentially breaks the full string down into an array of sub-arrays
            // The sub arrays' elements are the letters of each word
    }

    return array;
}


//============================ Sort w/out punc ==============================//


function sortSubs(array) {

    for (var i = 0; i < array.length; i ++){

        array[i].sort();
    }

    return array;
}


//============================== Return Punc ==============================//
        

function returnPunct(array, obj) {

    var punctIndexArr = obj;

    for (var i = 0; i < punctIndexArr.length; i ++) {

        array[ punctIndexArr[i]['word'] ].splice(punctIndexArr[i]['letter'], 0, punctIndexArr[i].punctuation);
    }

    return array;
}


//===========================================================================//
                        /* ~~~ Array Modules ~~~ */ 
//===========================================================================//

function strToArr(string) {

    var splitArr = string.split(' ');

    return splitArr;
}

function letterArr(arr) {

    var array = [];

    for (var i = 0; i < arr.length; i ++) {

        array.push( arr[i].split('') );
        // console.log(arr[i]);
    }

    return arr;
}
