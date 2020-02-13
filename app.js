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
                type: document.querySelector()
            }
        },
    };

})();

// APP controller

let appController = (function(budgetCtrl, uiCtrl) {
    // click button
    document.querySelector('.add__btn').addEventListener('click', function() {
        // 1. Get filed input data
        // 2. Add item to budget controller
        // 3. Add item to UI controller
        // 4. Calculate the budget
        // 5. Display budget on UI
    });
    // Enter Button press
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            // 1. Get filed input data
            // 2. Add item to budget controller
            // 3. Add item to UI controller
            // 4. Calculate the budget
            // 5. Display budget on UI
            console.log('Enter was pressed');
        }
    });
})(budgetController, UIController);