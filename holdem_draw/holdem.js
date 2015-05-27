// deck DONE
// - construct

// shuffle DONE
// - random cards

// draw
// - players
// - community
// - remove cards from deck


//===========================================================================//
//===============================DECK CONTROLS===============================//

var deck = [];
var community = [];

function deckConstructor() {

    var suits = ["Clubs", "Diamonds", "Hearts", "Spades"]; 
    var values = ["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];

    for (var i = 0; i < suits.length; i ++) {

        var suit = suits[i];

        for (var x = 0; x < values.length; x ++) {
            deck.push(values[x] + " of " + suit); 
        }
    }
    return deck;
};

function clearDeck() {

    deck = [];

}



function shuffle(arr) {

    var counter = arr.length;
    var temp = null;
    var index = null;

    while (counter > 0) {

        index = Math.floor(Math.random()*counter);

        counter --;

        temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;

    }

    return arr;

}


//===========================================================================//
//=============================PLAYER CONTROLS===============================//

//initiate players with empty array as their value

var players = {

    human: []

}; 

function playerAdd(num) {

    for (var i = 1; i <= num; i ++) {
        players["CPU " + i] = [];
    }
    return players;
};

function playerClear(obj) {
    obj = {
        human: []
    } 
    return obj;
}

//===========================================================================//
//===============================DRAW CONTROLS===============================//

// Need to take cards out of 'deck' in the proper order and put them into the object.
// also need to 

