// const numbers = document.querySelectorAll(".number")
// // console.log(numbers);

// numbers.forEach((number) =>{
//     number.addEventListener("click", (event) =>{
//         // console.log("number is pressed")
//         console.log(event.target.value)
//     })    
// })

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")


// numbers.forEach((number) =>{
//     number.addEventListener("click", (event) =>{  
//         updateScreen(event.target.value)
//     })    
// })

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }

}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        // console.log(event.target.value)
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    // console.log('ditekan')
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case "+":
            result = parseInt(prevNumber) + parseInt(currentNumber)
            break
        case "-":
            result = parseInt(prevNumber) - parseInt(currentNumber)
            break
        case "*":
            result = parseInt(prevNumber) * parseInt(currentNumber)
            break
        case "/":
            result = parseInt(prevNumber) / parseInt(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}


///belum jalan button allclear, karena gk muncul tulisan adaada
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    console.log('adaada')
})