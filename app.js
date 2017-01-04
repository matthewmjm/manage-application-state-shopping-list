//Requirements
//In terms of user experience, your shopping list app must allow users to:
//  enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
//  check and uncheck items on the list by clicking the "Check" button
//  permanently remove items from the list
//Additionally:
//  You must use a CDN-hosted version of jQuery
//  Put your application code in a file called app.js and link to it in index.html
//  Be sure to put both script elements at the bottom of the <body> element.
//  Do not alter index.html or main.css other than adding the links to the external JavaScript. Write JavaScript code that works with the           existing HTML and CSS to implement the required features.
//Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().
//
//STEP1: Define funtions and objects
//          global variable
var state = {
    items: [
        {
            name: "apples",
            checked: false
            },
        {
            name: "oranges",
            checked: false
            },
        {
            name: "milk",
            checked: true
            },
        {
            name: "bread",
            checked: false
            }
                ]
};

//          add items to shopping list
function addItem(state, itemObj) {
    state.items.push(itemObj);
};

//          check and uncheck items in shopping list
function checkItem(state, itemName) {
    var itemsArray = state.items;
    for (var = 0; i < state.items.length; i++) {
        if (state.items[i] === itemName) {
            state.items[i].checked = !state.items[i].checked;
        }
    }
}
//          delete items in shopping list
function deleteItem(state, itemName) {
    var itemsArray = state.items;
    for (var = 0; i < state.items.length; i++) {
        if (state.items[i] === itemName) {
            var index = i;
        }
    }
    itemsArray.splice(index, 1);
}
