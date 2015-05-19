//Rövarspråket dailyprogrammer challenge
//basically, replace consonents as: consonent --> 'o' --> consonent: IE: L --> Lol
//leave vowels alone
//Swedish vowels are A, E, I, O, U, Y, Å, Ä and Ö 


var user_string = prompt("What would you like me to Rövarspråketify?");


var rov = function(string){

	var cut = function(string){
		return string.split('');
	};

	word_array = cut(string);
	// var vowels = "AaEeIiOoUuYyÅåÄäÖö".split('');  --> Maybe try and figure out how to check with this array??


	for (var i = 0; i<word_array.length; i++){
		if((word_array[i] !== 'A') && (word_array[i] !== 'a') && (word_array[i] !== 'E') && (word_array[i] !== 'e') && (word_array[i] !== 'I') 
			&& (word_array[i] !== 'i') && (word_array[i] !== 'O') && (word_array[i] !== 'o') && (word_array[i] !== 'U') && (word_array[i] !== 'u') 
			&& (word_array[i] !== 'Y') && (word_array[i] !== 'y') && (word_array[i] !== 'Å') && (word_array[i] !== 'å') && (word_array[i] !== 'Ä') 
			&& (word_array[i] !== 'ä') && (word_array[i] !== 'Ö') && (word_array[i] !== 'ö') && (word_array[i] !== ' ') &&  (word_array[i] !== '.')
			&& (word_array[i] !== ',') && (word_array[i] !== '!') && (word_array[i] !== '?') && (word_array[i] !== "'")){
			word_array[i] = (word_array[i] + 'o' + word_array[i].toLowerCase());
		}
	}
	word_array = word_array.join('');
	return word_array;
};

rov(user_string);
