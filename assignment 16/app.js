let series = [];

// Loop from 1 to 15
for (let i = 1; i <= 15; i++) {
    series.push(i);
}

// Join the series array into a string with commas and print it
console.log(series.join(", "));



// Initialize an empty array to store the series
let reverseSeries = [];

// Loop from 10 to 1
for (let i = 10; i >= 1; i--) {
    reverseSeries.push(i);
}

// Join the series array into a string with commas and print it
console.log(reverseSeries.join(", "));


// Initialize an empty array to store the series
let evenSeries = [];

// Loop from 0 to 20 with a step of 2
for (let i = 0; i <= 20; i += 2) {
    evenSeries.push(i);
}

// Join the series array into a string with commas and print it

console.log(evenSeries.join(", "));


// Initialize an empty array to store the series
let oddSeries = [];

// Loop from 1 to 19 with a step of 2
for (let i = 1; i < 20; i += 2) {
    oddSeries.push(i);
}

// Join the series array into a string with commas and print it
console.log(oddSeries.join(", "));


// Initialize an empty array to store the series
let seriesK = [];

// Loop from 2 to 20 with a step of 2
for (let i = 2; i <= 20; i += 2) {
    seriesK.push(i + "k");
}

// Join the series array into a string with commas and print it
console.log(seriesK.join(", "));



var cake = ["cake", "apple pie", "cookie", "chips", "patties"]
var userhoice = prompt("which flovor would you like to try")
var isFound = "found"
for (var i = 0; i <= cake.length; i++) {
    if (cake[i] == userhoice) {
        indexNo = i
        isFound = "found"
        break
    }
}

if (isFound == "found") {
    alert("your cake is here at " + indexNo + " index number")
}
else {
    alert("sorry we dont have")
}


// Define the array
let A = [24, 53, 78, 91, 12];

// Initialize the variable to store the largest number, starting with the first element
let largest = A[0];

// Loop through the array to find the largest number
for (let i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

// Print the largest number
console.log("The largest number in the array is: " + largest);


// Initialize an empty array to store the multiples of 5
let multiplesOfFive = [];

// Loop from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the number is a multiple of 5
    if (i % 5 === 0) {
        multiplesOfFive.push(i);
    }
}

// Join the array into a string with commas and print it
console.log(multiplesOfFive.join(", "));
