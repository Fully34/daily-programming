/* 

Standard deviation is one of the most basic measurments in statistics. For some collection of values (known as a "population" in statistics), 
it measures how dispersed those values are. If the standard deviation is high, it means that the values in the population are very spread 
out; if it's low, it means that the values are tightly clustered around the mean value.
For today's challenge, you will get a list of numbers as input which will serve as your statistical population, and you are then going to 
calculate the standard deviation of that population. There are statistical packages for many programming languages that can do this for you, 
but you are highly encouraged not to use them: the spirit of today's challenge is to implement the standard deviation function yourself.
The following steps describe how to calculate standard deviation for a collection of numbers. For this example, we will use the following values:

5 6 11 13 19 20 25 26 28 37

First, calculate the average (or mean) of all your values, which is defined as the sum of all the values divided by the total number of 
values in the population. For our example, the sum of the values is 190 and since there are 10 different values, the mean value is 190/10 = 19
Next, for each value in the population, calculate the difference between it and the mean value, and square that difference. So, in our example, 
the first value is 5 and the mean 19, so you calculate (5 - 19)2 which is equal to 196. For the second value (which is 6), you calculate 
(6 - 19)2 which is equal to 169, and so on.

Calculate the sum of all the values from the previous step. For our example, it will be equal to 196 + 169 + 64 + ... = 956.
Divide that sum by the number of values in your population. The result is known as the variance of the population, and is equal to the square 
of the standard deviation. For our example, the number of values in the population is 10, so the variance is equal to 956/10 = 95.6.
Finally, to get standard deviation, take the square root of the variance. For our example, sqrt(95.6) ≈ 9.7775.
Formal inputs & outputs

Input

The input will consist of a single line of numbers separated by spaces. The numbers will all be positive integers.
Output

Your output should consist of a single line with the standard deviation rounded off to at most 4 digits after the decimal point.
Sample inputs & outputs

Input 1

5 6 11 13 19 20 25 26 28 37
Output 1

9.7775
Input 2

37 81 86 91 97 108 109 112 112 114 115 117 121 123 141
Output 2

23.2908
Challenge inputs

Challenge input 1

266 344 375 399 409 433 436 440 449 476 502 504 530 584 587
Challenge input 2

809 816 833 849 851 961 976 1009 1069 1125 1161 1172 1178 1187 1208 1215 1229 1241 1260 1373
Notes

For you statistics nerds out there, note that this is the population standard deviation, not the sample standard deviation. 
We are, after all, given the entire population and not just a sample.

If you have a suggestion for a future problem, head on over to /r/dailyprogrammer_ideas and let us know about it!

*/

function inputToArray(string){

	var inputs = string.split(" ");
	return inputs;
}

inputToArray("5 6 11 13 19 20 25 26 28 37");

function stdDev(list){

	var arr = inputToArray(list);
	var average = mean(list); //---> returns average from mean(){...};
	var diffSquareArr = diffSquare(list); // --> returns arr2 from diffSquare(){...};
	var groupVariance = variance(list);// --> returns variance from variance(){...};

	function mean(array){

		var array = arr;
		var total = 0;

		for (var i = 0; i<array.length; i++){
			array[i] = parseInt(array[i]);
			total = total + array[i];
			// console.log(total);
		}	
		var average = total/(array.length)
		return average; // --> gives mean value of array
	}

	function diffSquare(array){

		var arr2 = [];
		var array = arr; 

		for (var i = 0; i < array.length; i ++){
			value = (array[i] - average) * (array[i] - average);
			// console.log(value);
			arr2.push(value);
		}
		return arr2; 
	}

	function variance(array){
		var array = diffSquare(arr)
		// console.log(array);
		var total = 0
		for (var i = 0; i < array.length; i++){
			total += array[i];
		}
		return (total/(array.length));
	}

	function deviation(number){
		number = groupVariance;
		return Math.sqrt(number).toFixed(4);
	}
	return deviation(list);
}

console.log(stdDev("5 6 11 13 19 20 25 26 28 37"));


console.log("Challenge Output 1: " + stdDev("266 344 375 399 409 433 436 440 449 476 502 504 530 584 587"));
console.log("Challenge Output 2: " + stdDev("809 816 833 849 851 961 976 1009 1069 1125 1161 1172 1178 1187 1208 1215 1229 1241 1260 1373"));


