// Budget Controller

let budgetController = (function() {
    // contructor Function
    let Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    // contructor Function
    let Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
})();

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
    let setupEventListners = function() {
        let DOM = uiCtrl.getDomStrings();
        // click button
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        // Enter Button press
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

    };

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
    return {
        init: function() {
            console.log('Application has been started');
            setupEventListners();
        }
    };

})(budgetController, UIController);

appController.init();