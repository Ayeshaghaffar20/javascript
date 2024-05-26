

// ....Question:01


// var arr = [];


// ....Question:02


// var objectB = new Object()



// ....Question:03


// var stringArray = ["ayesha", "fahad", "Memona", "Maria", "Hassaan", "Khuzaima"]
// console.log(stringArray)


// ....Question:04


// var numArray = [1, 2, 3, 4, 5, 6]
// console.log(numArray)


// ....Question:05


// var boolArray = [true, false, true, false]
// console.log(boolArray[2])


// ....Question:06


// var mixArray = ["Abdul ghaffar", 1, 2, 3, 4, true, false]
// console.log(mixArray)


// ....Question:07

// var eductionQualification = "<strong> Qualification In Pakistan </strong>"
// document.write(eductionQualification + "<br>")
// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]
// document.write("<ol>");
// for (var i = 0; i < qualification.length; i++) {
//     document.write(qualification[i] + "<br>");
// }
// document.write("</ol>");



// ...Question:08


// var studentName = ["kinza", "hashim", "yousuf"];
// var studenMarks = [320, 230, 490]
// var totalMarks = (500);
// var percentage = (studenMarks[0] / totalMarks) * 100;
// document.write("Score of Student Kinza " + studenMarks[0] + " Percentage: " + percentage + "%" + "<br>")
// var percentage = (studenMarks[1] / totalMarks) * 100;
// document.write("Score of Student hashim " + studenMarks[1] + " Percentage: " + percentage + "%" + "<br>")
// var percentage = (studenMarks[2] / totalMarks) * 100;
// document.write("Score of Student yousuf " + studenMarks[2] + " Percentage: " + percentage + "%")



// ...Question:10


// var num = [9, 8, 7, 6, 5, 4, 3, 2, 1]
// num.sort()
// document.write(num)


// ...Question:11


// var cities = ["karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = ("Selected Cities List");
// document.write(selectedCities + ":" + "<br>")
// document.write(cities[1] + ", " + cities[2])


// ...Question:12


// var joinArray = ["This", "is", "my", "Cat"]
// var joinedString = joinArray.join(" ");
// document.write(joinedString)


// ...Question:13


// var fruitsName = ["Apple", "Banana", "orange", "Mango", 'pineapple']

// var outElement = fruitsName.shift(0) + "<br>"
// document.write(outElement)
// var outElement = fruitsName.shift(1) + "<br>"
// document.write(outElement)
// var outElement = fruitsName.shift(2) + "<br>"
// document.write(outElement)
// var outElement = fruitsName.shift(3) + "<br>"
// document.write(outElement)
// var outElement = fruitsName.shift(4)
// document.write(outElement)

// document.write(fruitsName)

// ...Question:15


var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<select>');
for (var i = 0; i < manufacturers.length; i++) {
    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}
document.write('</select>');