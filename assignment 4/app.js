
let a = 3
let b = 5
let sum = 3 + 5
console.log("Sum of 5 and 3 is " + sum)

a = 3
b = 5
let minus = b - a
console.log("Substraction of 5 and 3 is " + minus)

let division = b / a
console.log("Division of 5 and 3 is " + division)

let multiply = a * b
console.log("Multiplication of 5 and 3 is " + multiply)


let newVariable;
document.write("Value after variable decleration is " + newVariable + "</br>")

newVariable = 5
document.write("Initial value is " + newVariable + "</br>")
let update = ++newVariable
document.write("value after increment " + update + "</br>")

let newVariableSum = update + 7
document.write("Value after addition is " + newVariableSum + "</br>")

let updation = --newVariableSum
document.write("Value after Decrement " + updation + "</br>")

let divide = updation % 3
document.write("The remainder is " + divide + "</br></br></br>")


let ticketCost = 600
let person = 5
let totalPrice = ticketCost * person
document.write("Total cost to buy " + person + " ticket to a movie is " + totalPrice + "PKR" + "</br></br></br>")


document.write("Table of 5 " + "</br>")
let tableNumber = 5
for (let i = 1; i <= 10; i++) {
    let result = tableNumber + " x " + i + " = " + tableNumber * i + "</br>"
    document.write(result)
}


