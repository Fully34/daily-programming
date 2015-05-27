    // deck - DONE
    // - construct

    // shuffle - DONE
    // - random cards

    // draw - DONE
    // - players
    // - community
    // - remove cards from deck

    // reset - DONE

    //=======================================================================//
    //===========================DECK CONTROLS===============================//

    var deck = [];

    function deckConstructor() {

        var suits = ["Clubs", "Diamonds", "Hearts", "Spades"]; 
        var values = ["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];

        for (var i = 0; i < suits.length; i ++) {

            var suit = suits[i];

            for (var x = 0; x < values.length; x ++) {
                deck.push(" " + values[x] + " of " + suit); 
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


    //=======================================================================//
    //=========================PLAYER CONTROLS===============================//

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


    //=======================================================================//
    //===========================DRAW CONTROLS===============================//

    // Need to take cards out of 'deck' in the proper order and put them into the object.
    // also need to push cards to community and burned piles.

    var community = [];
    var burned = [];


    function playerDeal() {

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
        return deck;
    }


    function takeTop(arr) {

        var card = arr.pop();

        return card;
    }

    function burn() {

        var card = takeTop(deck);
        burned.push(card);

        return deck;

    }

    function flop() {

        var flop = [];

        for (var i = 0; i < 3; i ++) {
            var card = takeTop(deck);
            flop.push(card);
        }

        community.push(flop);

        return deck;
    }

    function turnRiver() {

        var card = takeTop(deck);
        community.push(card);

        return deck;
    }

    function fullDeal() {

        playerDeal();
        burn();
        flop();
        burn();
        turnRiver(); // --> TURN
        burn();
        turnRiver(); // --> RIVER

        for (var i = 0; i < players.length; i ++) {
            if (i === 0) {
                console.log("Your hand: " + players[i]);
            } else {
                console.log("CPU " + i + " hand: " + players[i]);
            }
        }

        console.log("Flop: " + community[0]);
        console.log("Turn: " + community[1]);
        console.log("River: " + community[2]);
    }
    //=======================================================================//
    //===========================  BIG RESET  ===============================//

    function reset() {
        
        var input = prompt("How many computers would you like to add?  (between 1 and 7!)")

        clearPlayer();
        clearDeck();
        burned = [];
        community = [];

        deckConstructor();
        shuffle(deck);

        playerAdd(input);

        return deck;
    }
