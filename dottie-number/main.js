// [2015-08-24] Challenge #229 [Easy] The Dottie Number
// submitted 2 days ago * by Cosmologicon2 2
// Description

// Write a program to calculate the Dottie number. This is the number you get when you type any number into a scientific calculator and then repeatedly press the cos button, with the calculator set to radians. The number displayed updates, getting closer and closer to a certain number, and eventually stops changing.
// cos here is the trigonometric function cosine, but you don't need to know any trigonometry, or what cosine means, for this challenge. Just do the same thing you would with a handheld calculator: take cosine over and over again until you get the answer.
// Notes/Hints

// Your programming language probably has math functions built in, and cos is probably set to radians by default, but you may need to look up how to use it.
// The Dottie number is around 0.74. If you get a number around 0.99985, that's because your cosine function is set to degrees, not radians.
// One hard part is knowing when to stop, but don't worry about doing it properly. If you want, just take cos 100 times. You can also try to keep going until your number stops changing (EDIT: this may or may not work, depending on your floating point library).
// Optional challenges

// The Dottie number is what's known as the fixed point of the function f(x) = cos(x). Find the fixed point of the function f(x) = x - tan(x), with a starting value of x = 2. Do you recognize this number?
// Find a fixed point of f(x) = 1 + 1/x (you may need to try more than one starting number). Do you recognize this number?
// What happens when you try to find the fixed point of f(x) = 4x(1-x), known as the logistic map, with most starting values between 0 and 1?


var fixedPointFunc = function(number, operation) {

  // > initialize fixedPoint variable
  var fixedPoint = null;

  //> ---------------------------- cos calulation branch ------------------------------------------
  if (operation === Math.cos) {

    //> Set inital fixedPoint value to Math.cos(number);
    fixedPoint = operation(number);

    //> stop the loop when we get a duplicate fixedPoint result
    for (var i = 0;  ( operation(fixedPoint) !== fixedPoint ) ; i++) {

      //> do the stuff
      fixedPoint = operation(fixedPoint);
    };

    // > Math.cos seems to converge on about 90 iterations to arrive at a duplicate fixed point
    return "HERE'S YOUR FIXED POINT FOR COSINING THE CRAP OUT OF THAT NUMBER!!!  --  " + fixedPoint + "\n" + "AND HERE'S HOW MANY ITERATIONS IT TOOK!  --  " + (i+1);
  }

  // > ------------------------- tan calculation branch -------------------------------------------
  if (operation === Math.tan) {

    //> set fixedPoint to the number argument
    fixedPoint = number;

    //> This calculation can only be done with the number 2
    if (number !== 2) {

      alert("If you're using Math.tan, you can only put the number: 2 as an input")

    } else {

      //> stop the loop when we get a duplicate result
      for (var i = 0; ( fixedPoint - operation(fixedPoint) !== fixedPoint ); i++ ){

        //> do the stuff
        fixedPoint = fixedPoint - operation(fixedPoint); 
      };

    //> COOL!!!
    return "HEY, IT'S A PIE!!!!  -->  " + fixedPoint;
    };
  };

  // ------------------------------ f(x) = 1 + 1/x branch -----------------------------------------
  if (operation === 'gold') {

    //> set initial fixedPoint value to number
    fixedPoint = number;

    //> stop the loop when we get a duplicate fixedPoint result
    for (var i = 0; ( 1 + ( 1/fixedPoint) !== fixedPoint); i++) {

      //> do the stuff
      fixedPoint = 1 + ( 1/fixedPoint );
    };

    return "- HERE'S YOUR FIXED POINT!!!  --  " + fixedPoint + "  -- SO GOLDEN!!!" + "\n" + "\n" + "- AND HERE'S HOW MANY ITERATIONS IT TOOK!  --  " + (i + 1);
  };

  // --------------------------------- f(x) = 4x(1-x) branch --------------------------------------
  if (operation === 'logisticMap') {

    //> only take numbers between 0 and 1
    if (number < 0 || number > 1) {

      alert("YOU CAN ONLY DO THAT OPERATION WITH NUMBERS BETWEEN 0 AND 1!!")

    } else {

      //> set initial fixedPoint value to number
      fixedPoint = number;

      //> stop loop when we get a duplicate fixedpoint result OR when there is not convergence within 1000 iterations
      for (var i = 0; 4 * fixedPoint * ( 1 - fixedPoint )  !== fixedPoint; i++) {
        
        debugger;
        //> no convergence 
        if (i === 1000) {

          return "NO CONVERGENCE!!!"
        }

        //> do the stuff
        fixedPoint = 4 * fixedPoint * (1 - fixedPoint); 
      };

    return "- HERE'S YOUR FIXED POINT!!!  --  " + fixedPoint + "\n" + "\n" + "- AND HERE'S HOW MANY ITERATIONS IT TOOK!  --  " + (i + 1);
    }
  };
};
















