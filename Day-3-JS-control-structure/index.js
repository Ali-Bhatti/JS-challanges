/**
 * Tasks/Activities:
    Activity 1:If-Else Statements
    Task 1:Write a program to check if a number is positive,negative,or zero,and log the result to the console.
    Task 2:Write a program to check if a person is eligible to vote (age >18)and log the result to the console.
    
    Activity 2:Nested If-Else Statements
    Task 3:Write a program to find the largest of three numbers using nested if-else statements.
   
    Activity 3:Switch Case
    Task 4:Write a program that uses a switch case to determine the day of the week based on a number(1-7)and log the day name to the console.
    Task 5:Write a program that uses a switch case to assign a grade (A,'B,'C,'D,F)based on a score and log the grade to the console.
    
    Activity 4:Conditional (Ternary)Operator
    Task 6:Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
    
    Activity 5:Combining Conditions
    Task 7:Write a program to check if a year is a leap year using multiple conditions (divisible by 4,but not 100 unless also divisible by 400)and log the
    result to the console.
    
    Feature Request:
    1.Number Check Script:Write a script that checks if a number is positive,negative,or zero using if-else statements and logs the result.
    2.Voting Eligibility Script:Create a script to check if a person is eligible to vote based on their age and log the result.
    3.Day of the Week Script:Write a script that uses a switch case to determine the day of the week based on a number(1-7)and logs the day name.
    4.Grade Assignment Script:Create a script that uses a switch case to assign a grade based on a score and logs the grade.
    5.Leap Year Check Script:Write a script that checks if a year is a leap year using multiple conditions and logs the result.
 */
/**Activity 1:If-Else Statements */
//Task 1:Write a program to check if a number is positive,negative,or zero and log the result to the console.
const number = 0;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
//Task 2:Write a program to check if a person is eligible to vote (age > 18)and log the result to the console.
const age = 18;
if (age >= 18) {
    console.log("The person is eligible to vote.");
} else {
    console.log("The person is not eligible to vote.");
}
/**Activity 2:Nested If-Else Statements */
//Task 3:Write a program to find the largest of three numbers using nested if-else statements
const num1 = 10;
const num2 = 20;
const num3 = 30;
if (num1 > num2) {
    if (num1 > num3) {
        console.log("The largest number is " + num1);
    } else {
        console.log("The largest number is " + num3);
    }
} else if (num2 > num3) {
    console.log("The largest number is " + num2);
} else {
    console.log("The largest number is " + num3);
}
/**Activity 3:Switch Case Statements */
//Task 4:Write a program to check the day of the week based on a number(1-7)and log the day name to the console.
const day = 1;
switch (day) {
    case 1:
        console.log("The day is Monday.");
        break;
    case 2:
        console.log("The day is Tuesday.");
        break;
    case 3:
        console.log("The day is Wednesday.");
        break;
    case 4:
        console.log("The day is Thursday.");
        break;
    case 5:
        console.log("The day is Friday.");
        break;
    case 6:
        console.log("The day is Saturday.");
        break;
    case 7:
        console.log("The day is Sunday.");
        break;
    default:
        console.log("Invalid day number.");
}
// Task 5:Write a program that uses a switch case to assign a grade (A,'B,'C,'D,F)based on a score and log the grade to the console.
const score = 95;
switch (true) {
    case (score >= 90):
        console.log("Grade is A");
        break;
    case (score >= 80):
        console.log("Grade is B");
        break;
    case (score >= 70):
        console.log("Grade is C");
        break;
    case (score >= 60):
        console.log("Grade is D");
        break;
    case (score >= 0):
        console.log("Grade is F");
        break;
    default:
        console.log("Invalid score");
}

/**
 * Activity 4:Conditional (Ternary)Operator
    Task 6:Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
 */
const n = 5;
console.log(n % 2 === 0 ? "Even" : "Odd");

/**
 * Activity 5:Combining Conditions
    Task 7:Write a program to check if a year is a leap year using multiple conditions (divisible by 4,but not 100 unless also divisible by 400)and log the
    result to the console.
 */
const year = 2020;
if (year % 4 === 0) {
    if (year % 100 !== 0 || (year % 100 === 0 && year % 400 == 0)) {
        console.log("Leap year");
    } else {
        console.log("Not a Leap year");
    }
} else {
    console.log("Not a Leap year");
}

/**Feature Request */
//1. NUmber Check Script: Write a script that checks if a number is positive,negative,or zero using if-else statements and logs the result.
let isPositiveOrNegativeOrZero = function (num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}
isPositiveOrNegativeOrZero(2);
isPositiveOrNegativeOrZero(-92);
isPositiveOrNegativeOrZero(0);

// 2. Voting Eligibility Script:Create a script to check if a person is eligible to vote based on their age and log the result.
let isEligibleToVote = function (age) {
    if (age >= 18) {
        console.log("Eligible to vote");
    } else {
        console.log("Not Eligible to vote");
    }
}
isEligibleToVote(17);
isEligibleToVote(18);

// 3.Day of the Week Script:Write a script that uses a switch case to determine the day of the week based on a number(1-7)and logs the day name.
let dayOfTheWeek = function (day) {
    switch (day) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.error("Invalid Day number");
    }
}
dayOfTheWeek(1);
dayOfTheWeek(4);
dayOfTheWeek(6);
dayOfTheWeek(8);
dayOfTheWeek(0);

// 4.Grade Assignment Script:Create a script that uses a switch case to assign a grade based on a score and logs the grade.
let gradeAssignment = function (score) {
    switch (true) {
        case (score >= 90):
            console.log("Grade is A");
            break;
        case (score >= 80):
            console.log("Grade is B");
            break;
        case (score >= 70):
            console.log("Grade is C");
            break;
        case (score >= 60):
            console.log("Grade is D");
            break;
        case (score >= 0):
            console.log("Grade is F");
            break;
        default:
            console.log("Invalid score");
    }
}
gradeAssignment(90);
gradeAssignment(56);
gradeAssignment(67);

// 5.Leap Year Check Script:Write a script that checks if a year is a leap year using multiple conditions and logs the result.
let isLeapYear = function (year) {
    if (year % 4 === 0) {
        if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0))
            return true;
    }
    return false;
}
console.log("2020", isLeapYear(2020));
console.log("2021", isLeapYear(2021));
console.log("2024", isLeapYear(2024));

