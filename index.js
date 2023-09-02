const display = document.querySelector("#display");
let expression = ""; //expression is empty
function isOperator(value) {
    return value === "+" 
    || value === "-" 
    || value === "*"
    || value === "/"
    || value === ".";
}

const addToDisplay = (value) => {
//    expression += value; //we are adding values to expression 
//    display.value = expression; //display the current expression;
    if(isOperator(value) && expression === "") {
        return;
    }

    if(isOperator(value) && isOperator(expression[expression.length-1])){
    expression = expression.slice(0 , -1)
    }

    expression += value;
    display.value = expression;
};



//read on the eval function.
// function evaluate() {
//     const expression = display.value;
//     }

const calculate = _ => {
    // return display.value;
   let result = eval(expression);
   display.value = result;
   expression = "";
}

const clearAll = () => {
    display.value = "";
    expression = "";
}