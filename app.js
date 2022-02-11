const display = document.querySelector('.display')
const numBtns = document.querySelectorAll('.num-btn')
const operatorBtns = document.querySelectorAll('.operator-btn')
const equals = document.querySelector('.equals')
const allClear = document.querySelector('.all-clear')
const clear = document.querySelector('.clear')

function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}


function operate(operator, num1, num2){
    switch (operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
    }
}

let num1, operation, num2


numBtns.forEach(button => button.addEventListener("click", (event)=>{
    display.textContent += event.target.textContent
    num1 += event.target.textContent
    console.log(num1)
  }))

operatorBtns.forEach(button => button.addEventListener('click', (event)=>{
   if(operation){ 
        operation = event.target.textContent
        display.textContent += event.target.textContent
        display.textContent = operate(operation, +eternal1, +num1);
    } 
    
    num1 = display.textContent
    const storeNum1 = num1
    num1 = ""
    parseInt(eternal1 = storeNum1)
    display.textContent += event.target.textContent
    operation = event.target.textContent
} ))
clear.addEventListener('click', () => {
    display.textContent = display.textContent.toString().slice(0, -1)
})
allClear.addEventListener('click', ()=>{
    display.textContent = "";

    operation = "";
    num1 = "";
})

equals.addEventListener('click', (event)=>{
    display.textContent += event.target.textContent
    display.textContent = operate(operation, +eternal1, +num1)
    console.log(display.textContent)
})

