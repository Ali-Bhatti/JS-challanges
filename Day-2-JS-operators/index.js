// Ref link for operators in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators

/** Active # 1 */
// Task 1:Write a program to add two numbers and log the result to the console
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum);
// Task 2:Write a program to subtract two numbers and log the result to the console
let sub = num1 - num2;
console.log(sub);
// Task 3:Write a program to multiply two numbers and log the result to the console
let mul = num1 * num2;
console.log(mul);
// Task 4:Write a program to divide two numbers and log the result to the console
let div = num1 / num2;
console.log(div);
// Task 5:Write a program to find the remainder when one number is divided by another
let rem = num1 % num2;
console.log(rem);
/** Active # 2 */
// Task 6:Use the += to add a number to a variable and log the
let num3 = 10;
num3 += 20;
console.log(num3);
// Task 7:Use the -= to subtract a number from a variable and log the
let num4 = 10;
num4 -= 5;
console.log(num4);
/** Active # 3 */
// Task 8:Write a program to compare two numbers using > and < and log the result to console
let num5 = 10;
let num6 = 20;
if (num5 > num6) {
    console.log("num5 is greater than num6");
} else if (num5 < num6) {
    console.log("num5 is less than num6");
}
// Task 9:Write a program to compare two numbers using >= and <= and log the result to console
let num7 = 10;
let num8 = 20;
if (num7 >= num8) {
    console.log("num7 is greater than or equal to num8");
} else if (num7 <= num8) {
    console.log("num7 is less than or equal to num8");
}
// Task 10:Write a program to compare two numbers using == and == and log the result to the console.
let num9 = 10;
let num10 = "10";
if (num9 == num10) {
    console.log("num9 is loosely equal to num10");
}
if (num9 === num10) {
    console.log("num9 is strictly equal to num10");
}

/**Activity 4:Logical Operators */
//Task 11:Write a program that uses the & operator to combine two conditions and log the result to the console.
let num11 = 10;
let num12 = 20;
if (num11 > 5 & num12 > 5) {
    console.log("num11 and num12 are greater than 5");
}
//Task 12:Write a program that uses the || operator to combine two conditions and log the result to console
let num13 = 10;
let num14 = 20;
if (num13 > 5 || num14 > 5) {
    console.log("num13 or num14 are greater than 5");
}
// Task 13:Write a program that uses the ! operator to negate a condition and log the result to the console.
let num15 = 10;
if (!num15 > 5) {
    console.log("num15 is not greater than 5");
}
/** Activity 5:Ternary Operator*/
// Task 14:Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let num16 = 10;
console.log(num16 > 0 ? "num16 is +ve number" : "num16 is -ve number");

/**Feature Request */
// 1.Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition,subtraction,multiplication,division,remainder)on two numbers and logs the results.
let arithmeticOperation = function (num1, operator, num2) {
    let result = 0;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
    }
    console.log(`${num1}${operator}${num2}`, result);
}

arithmeticOperation(2, '+', 3);
arithmeticOperation(2, '-', 3);
arithmeticOperation(2, '*', 3);
arithmeticOperation(2, '/', 3);
arithmeticOperation(2, '%', 3);

// 2.Comparison and Logical Operators Script:Create a script that compares two numbers using different comparison operators and combines conditions using logical operators,logging the results.
let logicalComparison = function (num1, operator, num2) {
    let result = 0;
    switch (operator) {
        case '==':
            result = num1 == num2;
            break;
        case '!=':
            result = num1 != num2;
            break;
        case '<':
            result = num1 < num2;
            break;
        case '>':
            result = num1 > num2;
            break;
        case '<=':
            result = num1 <= num2;
            break;
        case '>=':
            result = num1 >= num2;
            break;
        case '&&':
            result = num1 && num2;
            break;
        case '||':
            result = num1 || num2;
            break;
    }
    console.log(`${num1}${operator}${num2}`, result);
}
logicalComparison(2, '==', 3);
logicalComparison(2, '!=', 3);
logicalComparison(2, '<', 3);
logicalComparison(2, '>', 3);
logicalComparison(2, '<=', 3);
logicalComparison(2, '>=', 3);
logicalComparison(2, '&&', 3);
logicalComparison(2, '||', 3);



// 3.Ternary Operator Script:Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
let isPositive = function (number) {
    return number > 0 ? 'positive' : 'negative';
}
console.log(isPositive(2));
console.log(isPositive(-11));


