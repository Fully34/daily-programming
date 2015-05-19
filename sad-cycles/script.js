/*
[2015-05-18] Challenge #215 [Easy] Sad Cycles
submitted 1 day ago * by Elite68091 1
 (Easy): Sad Cycles

Take a number, and add up the square of each digit. You'll end up with another number. If you repeat this process over and over again, you'll see that one of two things happen:
You'll reach one, and from that point you'll get one again and again.
You'll reach a cycle of 4, 16, 37, 58, 89, 145, 42, 20, 4, 16, 37, ...
For example, starting with the number 12:
12+22=5
52=25
22+52=29
22+92=85
82+52=89
82+92=145
From this point on, you'll join the cycle described above.
However, if we start with the number 13:
12+32=10
12+02=1
12=1
12=1
We get the number 1 forever.
The sequence of numbers that we end up with is called a sad cycle, and it depends on the number you start with. If you start the process with a number n, the sad cycle for n is the cycle which ends up eventually repeating itself; this will either just be the cycle 1, or the cycle 4, 16, 37, 58, 89, 145, 42, 20.
But what if we cube the digits instead of squaring them? This gives us a different set of cycles all together. For example, starting with 82375 and repeatedly getting the sum of the cube of the digits will lead us to the cycle 352, 160, 217. Other numbers gravitate toward certain end points. These cycles are called 3-sad cycles (as the digits are raised to the power 3). This can be extended toward higher powers. For example, the 7-sad cycle for 1060925 is 5141159, 4955606, 5515475, 1152428, 2191919, 14349038, 6917264, 6182897, 10080881, 6291458, 7254695, 6059210. Your challenge today, will be to find the b-sad cycle for a given n.
Formal Inputs and Outputs

Input Description

You will input the base b on the first line, and the starting number n on the second line, like so:
5
117649
Output Description

Output a comma-separated list containing the b-sad cycle for n. For example, the 5-sad cycle for 117649 is:
10933, 59536, 73318, 50062
The starting point of the cycle doesn't matter - you can give a circularly permuted version of the cycle, too; rotating the output around, wrapping from the start to the end, is also a correct output. The following outputs are equivalent to the above output:
59536, 73318, 50062, 10933
73318, 50062, 10933, 59536
50062, 10933, 59536, 73318
Sample Inputs and Outputs

Sample 1

Input

6
2
Output

383890, 1057187, 513069, 594452, 570947, 786460, 477201, 239459, 1083396, 841700
Sample 2

Input

7
7
Output

5345158, 2350099, 9646378, 8282107, 5018104, 2191663
Sample 3

Input

3
14
Output

371

*/
function numArr(num) {

	var array = [];
	var sNum = num.toString();

	for (var i = 0; i < sNum.length; i++) {
		array.push(+sNum.charAt(i));
	}
	return array;
}

function sumPower(base, power){
	
	array = numArr(base);
	var finalNumber = 0

	for (var x = 0; x < array.length; x++) {
		finalNumber = finalNumber + Math.pow(array[x], power);
	}
	return finalNumber;
}

function sad(b, n) {

	var eachSum = sumPower(b, n);
	var array = [];
	var indexOne = null;
	var indexTwo = null;
	var dup = null; 

	for (var i = 0; i < 3000; i++) {

		eachSum = sumPower(eachSum, n);
		array.push(eachSum);

		for (var x = 0; x < (array.length - 1); x++){

			indexOne = x;

			if (array[x] === eachSum) {

				console.log("index " + indexOne + " | " + array[indexOne] + " index " + array.length + " | " + array[(array.length-1)]); //Shows which indexes in the array contain the b-sad-cycle
				console.log(array);
				return array.slice(indexOne, (array.length - 1));
				break;
			}
		}
	}
}


console.log(sad(117649, 5));
console.log(sad(2, 6));
console.log(sad(7,7));
console.log(sad(14, 3));
console.log(sad(2, 11));