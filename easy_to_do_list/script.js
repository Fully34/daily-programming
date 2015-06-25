    "use strict";
    // Description

    // Todays challenge will be something slightly different! Atleast I think the challenge is meant to be for today? Wait, am I meant to even be submitting today?
    // Okay maybe I need some help on organising my thoughts before I submit my challenge. A to-do list would be fine, just something so that I can organise my thoughts!
    // It should have the following basic functionality
    // Add an item to the to-do list
    // Delete a selected item from the to-do list
    // And obviously, print out the list so I can see what to do!
    // Formal Inputs & Outputs

    // Output description

    // Any output that is created should be user-friendly. When I'm viewing my to-do list, I should be able to easily discern one list item from another.
    // Examples

    // Input:
    // addItem('Take a shower');
    // addItem('Go to work');
    // viewList();
    // Output:
    // Take a shower
    // Go to work
    // Further Input:
    // addItem('Buy a new phone');
    // deleteItem('Go to work');
    // viewList();
    // Outputs:
    // Take a shower
    // Buy a new phone
    // Finally

    // Have a good challenge idea?
    // Consider submitting it to /r/dailyprogrammer_ideas


    // Functions to call:
        // addItem();
        // deleteItem();
        // viewList();
        // importantAdd();

    var toDo = ["1) hello", "2) goodbye", "3) greetings"];

    //=============================== ADDING ITEM ==============================//

    function addItem() {

        var item = prompt("What would you like to add to your to-do list?");

        toDo.push(item.toLowerCase());

        // PLAYING WITH HOW TO GET THE TO DO LIST NUMBERED

        for (var i = toDo.length - 1; i < toDo.length; i ++) {

            toDo[i] = (i + 1) + ") " + toDo[i];
        }

        return viewList();
    }
            

    //============================ ADD IMPORTANT ===============================//

    // Need to place new item at front and re-number all the subsequent items

    function importantAdd () {

        var item = prompt (" what would you like to add to the top of your list?");

        toDo.unshift(item.toLowerCase());

        for (var i = 0; i < toDo.length; i ++) {

            // Normal addItem(); function for the new first item

            if (i === 0) {
            
                toDo[i] = (i + 1) + ") " + toDo[i];

            } else { // RE-NUMBER SUBSEQUENT ITEMS BY GETTING RID OF THE "#) " and replacing it with the new (i + 1) value.

                toDo[i] = (toDo[i].slice(3, toDo[i].length));

                toDo[i] = (i + 1) + ") " + toDo[i];
            }
        }
        return toDo;
    }

    //=============================  DELETE ITEM  =============================//


    function deleteItem() {

        var item = prompt("What have you completed?");

        if (typeof(checkList(item)) !==  "string") {

            toDo.splice(checkList(item), 1);

    // //EASILY COULD BE MORE MODULAR HERE: SAME LOGIC AS IN BOTH ADD FUNCTIONS, too lazy to abstract right now

            for (var i = 0; i < toDo.length; i ++) {

                toDo[i] = toDo[i] = (toDo[i].slice(3, toDo[i].length));

                toDo[i] = (i + 1) + ") " + toDo[i];
            }

            return toDo;
        }

        return "That's not on your to-do list!"
    }


    //==============================  VIEW LIST  ================================//

    function viewList() {

        if (toDo.length < 1 ) {

            return "You don't have anything on your to-do list!";

        } else {
        
            for (var i = 0; i < toDo.length; i ++) {

                console.log(toDo[i]);
            }
        }
    }


    //=============================  CHECK LIST  ===============================//

    // checking current toDo array to see if an item is there.  
    // This works nicely with the numbered return that addItem(); creates.
    // NEED TO RETURN THE INDEX OF THE ITEM IF IT'S IN THE ARRAY SO THAT WE CAN DELETE IT.  
    function checkList(item) {

        for (var i = 0; i < toDo.length; i ++) {

            if(item === (toDo[i].slice(3, toDo[i].length))) {

                return i;
            }
        }
        return "Not here";
    }

