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

var players = [];

function playerAdd(num) {

    for (var i = 0; i <= num; i ++) {
    
            players[i] = [];

        }
    return players;
};

function clearPlayer() {
    players = [];
}


//===========================================================================//
//===============================DRAW CONTROLS===============================//

// Need to take cards out of 'deck' in the proper order and put them into the object.
// also need to push cards to community and burned piles.

var community = [];
var burned = [];


function deal() {

    var card = null;
    var playerLength = null;
    // players
    for (var j = 0; j < 2; j ++){

        for (var i = 0; i < players.length; i ++) {

            playerLength = players[i];

            for (var x = 0; x < 1; x ++){

                var card = deck.pop();
                players[i].push(card);

            }
        }
    }

    for (var k = 0; k < 3; k ++){

        if (k === 0) { // --> FLOP

            for (var s = 1; s < 1; s ++) {
                card = deck.pop();
                burned.push(card);

                for (var n = 0; n < 3; n ++) {
                    card = deck.pop();
                    community.push(card);
                    console.log("Supposed to be FLOP")
                }

            }

        } else { // --> TURN AND RIVER

            for (var y = 0; y < 1; y ++) {

                card = deck.pop();
                burned.push(card);

                for (var z = 0; z < 1; z ++){
                    card = deck.pop();
                    community.push(card);

                }

            }
        }

    }

    return players;

}



//===========================================================================//
//===============================  BIG RESET  ===============================//

function reset() {
    
    clearPlayer();
    clearDeck();

    deckConstructor();
    shuffle(deck);

    playerAdd(5);

    return deck;
}
