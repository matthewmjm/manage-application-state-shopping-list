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
}

//          add items to shopping list
function addItem(state, itemObj) {
    state.items.push(itemObj);
};

//          check and uncheck items in shopping list
function checkItem(state, itemName) {
    var itemsArray = state.items;

    for (var i = 0; i < state.items.length; i++) {
        if (state.items[i].name === itemName) {
            state.items[i].checked = !state.items[i].checked;
        }
    }
}
//          delete items in shopping list
function deleteItem(state, itemName) {
    var itemsArray = state.items;
    for (var i = 0; i < state.items.length; i++) {
        if (state.items[i].name === itemName) {
            var index = i;
        }
    }
    itemsArray.splice(index, 1);
}

//          render shopping list
function renderList(state, JQueryElement) {
    var renderedHTML = state.items.map(function (item) {
        var row = '';
        row += '<li>';
        if (item.checked == false) {
            row += '<span class="shopping-item">' + item.name + '</span>';
        } else {
            row += '<span class="shopping-item shopping-item__checked">' + item.name + '</span>';
        }
        row += '<div class="shopping-item-controls">';
        row += '<button class="shopping-item-toggle">';
        row += '<span class="button-label">check</span>';
        row += '</button>';
        row += '<button class="shopping-item-delete">';
        row += '<span class="button-label">delete</span>';
        row += '</button>';
        row += '</div>';
        row += '</li>';

        return row;
    });
    JQueryElement.html(renderedHTML);
    // reset the input field to an empty value
    $('#shopping-list-entry').val('');
}
//
//STEP2: Using functions and objects
//
//  to add items to the shopping list after page loads
$(document).ready(function () {
    renderList(state, $('.shopping-list'));
    $('#js-shopping-list-form').on('submit keypress', function (event) {
        if (event.type === 'keypress' && event.which === 13 || event.type === 'submit') {
            event.preventDefault();
            var itemName = $('#shopping-list-entry').val();
            var shoppingItem = {
                name: itemName,
                checked: false
            }
            if (itemName) {
                addItem(state, shoppingItem);
                renderList(state, $('.shopping-list'));
            }
        }
    });
});
//
//  when click on the shopping list toggle button to check item
$('ul').on('click', 'button.shopping-item-toggle', function (event) {
    var itemName = $(this).closest('li').find('.shopping-item').text();
    checkItem(state, itemName);
    renderList(state, $('.shopping-list'));
});
//
// when click on the shopping list delete button to delete item
$('ul').on('click', 'button.shopping-item-delete', function (event) {
    var itemName = $(this).closest('li').find('.shopping-item').text();
    deleteItem(state, itemName);
    renderList(state, $('.shopping-list'));
});
