// Budget Controller

let budgetController = (function() {}

)();

// UI Controller

let UIController = (function() {
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDomStrings: function() {
            return DOMstrings;
        }
    };

})();

// APP controller

let appController = (function(budgetCtrl, uiCtrl) {
    let DOM = uiCtrl.getDomStrings();
    // common function for DRY principle 
    let ctrlAddItem = function() {
        // 1. Get filed input data
        let input = uiCtrl.getInput();
        console.log('Input is::', input);
        // 2. Add item to budget controller
        // 3. Add item to UI controller
        // 4. Calculate the budget
        // 5. Display budget on UI
        console.log(' its worked');
    };
    // click button
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    // Enter Button press
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController, UIController);