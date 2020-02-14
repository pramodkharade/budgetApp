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
    return {
        addItem: function(type, des, val) {
            let newItem, ID;
            // create New ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id;
            } else {
                ID = 1;
            }
            // create new item based on 'exp' or 'inc
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            // push item to data structure 
            data.allItems[type].push(newItem);
            return newItem;
        }
    };
})();

// UI Controller

let UIController = (function() {
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer:'.income__list',
        expenseContainer:'.expenses__list',
    };
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        addListItem: function(obj, type) {
            let html,newHTML,element;
            // create HTM with  placeholder Text
            if(type==='inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type==='exp'){
                element = DOMstrings.expenseContainer;
                html='<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            // replace placeholder text with actual text
            newHTML = html.replace('%id%',obj.id);
            newHTML = newHTML.replace('%description%',obj.description);
            newHTML = newHTML.replace('%value%',obj.value);
            // insert HTML into DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHTML);
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
        let input, newItem;
        // 1. Get filed input data
        input = uiCtrl.getInput();
        console.log('Input is::', input);
        // 2. Add item to budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. Add item to UI controller
        uiCtrl.addListItem(newItem,input.type);
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