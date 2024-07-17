/**
 * Day 4:Loops
    Tasks/Activities:
    Activity 1:For Loop
    Task 1:Write a program to print numbers from 1 to 10 using a for loop.
    Task 2:Write a program to print the multiplication table of 5 using a for loop.
    
    Activity 2:While Loop
    Task 3:Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
    Task 4:Write a program to print numbers from 10 to 1 using a while loop.
    
    Activity 3:Do...While Loop
    Task 5:Write a program to print numbers from 1 to 5 using a do...while loop.
    Task 6:Write a program to calculate the factorial of a number using a do...while loop.
    
    Activity 4:Nested Loops
    Task 7:Write a program to print a pattern using nested for loops:
    *
    **
    ***
    ****
    *****
    
    Activity 5:Loop Control Statements
    Task 8:Write a program to print numbers from 1 to 10,but skip the number 5 using the continue statement.
    Task 9:Write a program to print numbers from 1 to 10,but stop the loop when the number is 7 using the break statement.
    
    Feature Request:
    1.Number Printing Script:Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
    2.Multiplication Table Script:Create a script that prints the multiplication table of 5 using a for loop.
    3.Pattern Printing Script:Write a script that prints a pattern of stars using nested loops.
    4.Sum Calculation Script:Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
    5.Factorial Calculation Script:Create a script that calculates the factorial of a number using a do...while loop.
 */

/** Activity 1 For Loop */
// Task 1:Write a program to print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Task 2:Write a program to print the multiplication table of 5 using a for loop
for (let i = 0; i < 10; i++) {
    console.log(`5 X ${(i + 1)} = ${5 * (i + 1)}`);
}
/** Activity 2 While Loop */
// Task 3:Write a program to calculate the sum of numbers from 1 to 10 using a while loop
let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log("Sum of first 10 numbers", sum);
// Task 4:Write a program to print numbers from 10 to 1 using a while loop
let n = 10;
while (n >= 1) {
    console.log(n);
    n--;
}
/** Activity 3 Do...While Loop */
// Task 5:Write a program to print numbers from 1 to 5 using a do..while loop
let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);
// Task 6:Write a program to calculate the factorial of a number using a do...while loop.
let factorial = 1;
let num1 = 6;
let iterator = 1;
do {
    factorial *= iterator;
    iterator++;
} while (iterator <= num1);
console.log(`factorial of ${num1} is ${factorial}`);
/**
 *     Activity 4:Nested Loops
    Task 7:Write a program to print a pattern using nested for loops:
    *
    **
    ***
    ****
    *****
 */
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`*`);
    }
    console.log("");
}

/** Activity 5:Loop Control Statements */
// Task 8:Write a program to print the numbers from 1 to 10 but skip the number 5 using the continue statement.
console.log("CONTINUE LOOP")
let skip = 5;
for (let i = 1; i <= 10; i++) {
    if (i == skip) continue;
    console.log(i);
}

// Task 9:Write a program to print numbers from 1 to 10,but stop the loop when the number is 7 using the break statement.
console.log("BREAK LOOP")
let stop = 7;
for (let i = 1; i <= 10; i++) {
    if (i == stop) break;
    console.log(i);
}

// all feature requests done above
