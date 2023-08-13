//---------------------Question 1 ------------------------------------------------
// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?
function findPairsWithSum(arr, targetSum) {
    const pairs = [];

    // Create an object to store the occurrences of each number in the array
    const numOccurrences = {};

    for (const num of arr) {
        const complement = targetSum - num;

        if (numOccurrences[complement]) {
            // If the complement exists in the numOccurrences object, add the pair to the result
            pairs.push([num, complement]);
        }

        // Increment the occurrence count of the current number
        numOccurrences[num] = (numOccurrences[num] || 0) + 1;
    }

    return pairs;
}

const array = [2, 4, 3, 1, 5, 6, 9, 8, 7];
const target = 10;
const pairs = findPairsWithSum(array, target);
console.log("-------------------------Question 1--------------------------------");
console.log("Pairs with sum", target, "are:", pairs);



//---------------------Question 2 ------------------------------------------------
// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
function reverseArrayInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
const originalArray = [1, 2, 3, 4, 5];
console.log("-------------------------Question 2--------------------------------");
console.log("Original Array:", originalArray);
reverseArrayInPlace(originalArray);
console.log("Reversed Array:", originalArray);


//---------------------Question 3 ------------------------------------------------
// Q3. Write a program to check if two strings are a rotation of each other?
function areStringsRotations(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const concatenated = str1 + str1;

    return concatenated.includes(str2);
}

const string1 = "abcdef";
const string2 = "defabc";
console.log("-------------------------Question 3--------------------------------");

if (areStringsRotations(string1, string2)) {
    console.log("The strings are rotations of each other.");
} else {
    console.log("The strings are not rotations of each other.");
}


//---------------------Question 4 ------------------------------------------------
// Q4. Write a program to print the first non-repeated character from a string?
function findFirstNonRepeatedChar(str) {
    const charCount = {};
    
    console.log("-------------------------Question 4--------------------------------");
    // Count occurrences of each character in the string
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with count 1 (non-repeated)
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

const inputString = "aabbccdeeffg";
const firstNonRepeated = findFirstNonRepeatedChar(inputString);

if (firstNonRepeated !== null) {
    console.log("The first non-repeated character:", firstNonRepeated);
} else {
    console.log("No non-repeated character found in the string.");
}



//---------------------Question 5 ------------------------------------------------
// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
        console.log(`Move disc 1 from ${source} to ${destination}`);
        return;
    }
    
    towerOfHanoi(n - 1, source, destination, auxiliary);
    console.log(`Move disc ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, auxiliary, source, destination);
}

console.log("-------------------------Question 5--------------------------------");
const numDiscs = 3;
const sourceRod = "A";
const auxiliaryRod = "B";
const destinationRod = "C";

console.log(`Tower of Hanoi with ${numDiscs} discs:`);
towerOfHanoi(numDiscs, sourceRod, auxiliaryRod, destinationRod);



//---------------------Question 6 ------------------------------------------------
// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}

function postfixToPrefix(postfix) {
    const stack = [];
    for (const char of postfix) {
        if (isOperator(char)) {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            const expression = char + operand1 + operand2;
            stack.push(expression);
        } else {
            stack.push(char);
        }
    }
    return stack.pop();
}

const postfixExpression = "23*5+";
const prefixExpression = postfixToPrefix(postfixExpression);
console.log("-------------------------Question 6--------------------------------");
console.log("--------Infix Expression: This is the common notation used by humans, where operators are placed between operands. For example: 2 + 3 * 4.Prefix Expression: In this notation, operators are placed before the operands. For example: + 2 * 3 4. ");
console.log("Postfix Expression: Also known as Reverse Polish Notation (RPN), this notation places operators after their operands. For example: 2 3 4 * +.");
console.log("output for Postfix Expression:", postfixExpression);
console.log("output for Prefix Expression:", prefixExpression);




//---------------------Question 7 ------------------------------------------------
// Q7. Write a program to convert prefix expression to infix expression.
function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}

function prefixToInfix(prefix) {
    const stack = [];
    for (let i = prefix.length - 1; i >= 0; i--) {
        const char = prefix[i];
        if (isOperator(char)) {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            const expression = `(${operand1}${char}${operand2})`;
            stack.push(expression);
        } else {
            stack.push(char);
        }
    }
    return stack.pop();
}

const prefixExpression1 = "+*23*45";
const infixExpression1 = prefixToInfix(prefixExpression1);

console.log("-------------------------Question 7--------------------------------");
console.log("Prefix Expression:", prefixExpression1);
console.log("Infix Expression:", infixExpression1);



//---------------------Question 8 ------------------------------------------------
// Q8. Write a program to check if all the brackets are closed in a given code snippet.
function areBracketsClosed(code) {
    const stack = [];
    const openingBrackets = "({[";
    const closingBrackets = ")}]";

    for (const char of code) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const lastOpeningBracket = stack.pop();
            const correspondingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
            
            if (lastOpeningBracket !== correspondingOpeningBracket) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log("-------------------------Question 8--------------------------------");
const codeSnippet = "(a + [b * {c - d}])";
if (areBracketsClosed(codeSnippet)) {
    console.log("All brackets are properly closed.");
} else {
    console.log("Brackets are not properly closed.");
}



//---------------------Question 9 ------------------------------------------------
//Q9.  Write a program to reverse a stack.
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

function reverseStack(stack) {
    const auxStack = new Stack();

    while (!stack.isEmpty()) {
        auxStack.push(stack.pop());
    }

    while (!auxStack.isEmpty()) {
        stack.push(auxStack.pop());
    }
}

const originalStack = new Stack();
originalStack.push(1);
originalStack.push(2);
originalStack.push(3);
originalStack.push(4);
originalStack.push(5);

console.log("-------------------------Question 9--------------------------------");
console.log("Original Stack:", originalStack.items);
reverseStack(originalStack);
console.log("Reversed Stack:", originalStack.items);



//---------------------Question 10 -----------------------------------------------
//Q10. Write a program to find the smallest number using a stack.

class Stack1 {
    constructor() {
        this.items = [];
        this.minStack = [];
    }

    push(item) {
        this.items.push(item);

        if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(item);
        }
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        const poppedItem = this.items.pop();
        
        if (poppedItem === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }

        return poppedItem;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getMin() {
        if (this.minStack.length === 0) {
            return null;
        }
        return this.minStack[this.minStack.length - 1];
    }

    size() {
        return this.items.length;
    }
}

const stack1 = new Stack1();
stack1.push(50);
stack1.push(20);
stack1.push(80);
stack1.push(10);
stack1.push(70);
console.log("-------------------------Question 10--------------------------------");

console.log("Smallest Number:", stack1.getMin());


