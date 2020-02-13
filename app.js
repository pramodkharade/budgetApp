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
    document.querySelector('.add__btn').addEventListener('click', function() {
        console.log("Calling");
    });
})(budgetController, UIController);