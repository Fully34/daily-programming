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


var toDo = [];

//=============================== ADDING ITEM ==============================//

function addItem() {

    var item = prompt("What would you like to add to your to-do list?");

    toDo.push(item.toLowerCase());

    // PLAYING WITH HOW TO GET THE TO DO LIST NUMBERED

    // for (var i = 0; i < toDo.length; i ++) {

    //     toDo[i] = (i + 1) + ") " + toDo[i];
    // }

    return toDo;

}

//=============================  DELETE ITEM  =============================//

function deleteItem() {

    var item = prompt("What have you completed?");

    for (var i = 0; i < toDo.length; i ++) {

        if(item === toDo[i]) {

            toDo.splice(i,1);

            console.log("Good job on getting that out of the way!");
            return "Here is your updated to-do list" + " : " + toDo;
            break;
        }

    }
    return "That's not on your to-list!";
}

//==============================  VIEW LIST  ================================//

function viewList() {

    for (var i = 0; i < toDo.length; i ++) {

        console.log(i + ") " + toDo[i]);
    }
}

//=============================  CHECK LIST  ===============================//

