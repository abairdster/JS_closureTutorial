// Lexical Scope defines how  variable names are resolved in nested functions.

// Nested (child) functions have access to the scope of their parent functions.

// This is often confused with closure, but lexical scope is only an important part of closure.

// w3schools: "A closure is a function having access to the parent scope, even after the parent function has closed."

// A closure is created when we define a function,  not when a function is executed.

// global scope
/* let x = 1;

const parentFunction = () => {
    //local scope
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue += 1);
    }

    childFunction();
}

parentFunction();  */


/* // childFunction has access to the parentFunction even after it has closed.
let x = 1;

const parentFunction = () => {
    //local scope
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue += 1);
    }

    return childFunction;
}

const result = parentFunction();
console.log(result);

result();
result();
result();
console.log(x);
console.log(myValue); // reference error, private value */

//--------------------------------------------------------------------------------
// IIFE (Immediately Invoked Function Expression)
/* const privateCounter = (() => {
    let count =0;
    console.log(`initial value: ${count}`);
    return () => { count +=1; console.log(count) }
})();

privateCounter();
privateCounter();
privateCounter(); */


const credits = ((num) => {
    let credits = num;
    console.log(`initial credits value: ${credits}`);
    return () => {
        credits -= 1;
        if (credits > 0) AbortController.log(`playing game, ${credits} credits(s) remaining`);
        if (credits <= 0) console.log('not enough credits');
    }
})(3);

credits();
credits();
credits();