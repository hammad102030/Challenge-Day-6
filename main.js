// Create a simple calculator that can perform addition, subtraction, multiplication, and division.
// 1. *Functional Programming Approach:*
//    - Write functions for each operation: add, subtract, multiply, and divide.
//    - Implement a function calculate that takes two numbers and an operation (as a string) and returns the result of the operation.
function calculate(operation, num1, num2) {
    if (operation === "ADDITION") {
        return num1 + num2;
    }
    else if (operation === "SUBTRACTION") {
        return num1 - num2;
    }
    else if (operation === "DIVISION") {
        if (num2 === 0) {
            return "Division by zero is not allowed!";
        }
        return num1 / num2;
    }
    else if (operation === "MULTIPLICATION") {
        return num1 * num2;
    }
    else {
        return "Invalid operation!";
    }
}
console.log(calculate("ADDITION", 3, 2)); // Output: 5
console.log(calculate("SUBTRACTION", 15, 10)); // Output: 5
console.log(calculate("DIVISION", 10, 5)); // Output: 2
console.log(calculate("MULTIPLICATION", 5, 5)); // Output: 25
console.log(calculate("DIVISION", 10, 0)); // Output: Division by zero is not allowed!
console.log(calculate("UNKNOWN", 10, 5)); // Output: Invalid operation!
// 2. *Object-Oriented Programming (OOP) Approach:*
//    - Create a Calculator class with methods for each operation.
//    - Implement a method calculate in the class that takes two numbers and an operation (as a string) and returns the result of the operation.
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (n1, n2) {
        console.log(n1 + n2);
    };
    Calculator.prototype.sub = function (n1, n2) {
        console.log(n1 - n2);
    };
    Calculator.prototype.div = function (n1, n2) {
        console.log(n1 / n2);
    };
    Calculator.prototype.mul = function (n1, n2) {
        console.log(n1 * n2);
    };
    return Calculator;
}());
;
var newCal = new Calculator();
newCal.add(2, 4);
newCal.sub(10, 5);
newCal.div(20, 4);
newCal.mul(10, 2);
// Question 12: Separate Elements by Type
// *Task:*
// Given an array with mixed types of elements, separate them into different arrays based on their type (number, string, boolean).
function mixedArray(arr1) {
    var num = [];
    var str = [];
    var bool = [];
    for (var i = 0; i < arr1.length; i++) {
        if (typeof arr1[i] === "number") {
            num.push(arr1[i]);
        }
        else if (typeof arr1[i] === "string") {
            str.push(arr1[i]);
        }
        else if (typeof arr1[i] === "boolean") {
            bool.push(arr1[i]);
        }
    }
    return [num, str, bool];
}
var multipleValues = [5, "Hello!", true, 10, "Hammd", false,];
var _a = mixedArray(multipleValues), num = _a[0], str = _a[1], bool = _a[2];
console.log('Numbers:', num);
console.log('Strings:', str);
console.log('Boolean:', bool);
