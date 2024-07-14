// following code will display different types of JS
let num = 123;
let str = "Hello World";
let bool = true;
let obj = { n: 345 };
let symbol = Symbol("Special")
console.log(`type: ${typeof num}, value:`, num);
console.log(`type: ${typeof str}, value:`, str);
console.log(`type: ${typeof bool}, value:`, bool);
console.log(`type: ${typeof obj}, value:`, obj);
console.log(`type: ${typeof symbol}, value:`, symbol);

// following code will display the difference between COST and VAR
let variable = 123;
const constant = 4567;

constant = 6789;
variable = 789;

console.log("Constant",constant);
console.log("Variable",variable);