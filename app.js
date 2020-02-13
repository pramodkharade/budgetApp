// Budget Controller

let budgetController = (function() {}

)();

// UI Controller

let UIController = (function() {
    DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    return {
        getInput: function() {
            return {
                type: document.querySelector('.add__type').value, // will be either inc or exp
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            };
        },
    };

})();

// APP controller

let appController = (function(budgetCtrl, uiCtrl) {
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
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    // Enter Button press
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController, UIController);