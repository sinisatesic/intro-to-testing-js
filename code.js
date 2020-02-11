// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//
// const helloWorld = function() {
//     return "Hello, World!";
// }

//the const function expression version is interchangeable with first function for helloWorld


function sayHello(input) {

    if (input === undefined || input === true) {
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

// function sayHello(input) {
//     if (input === "Alex"){
//         return "Hello, Alex!";
//     } else if (input === "Jane"){
//         return "Hello, Jane!";
//     } else {
//         return "Hello, Pat!";
//     }
// }

// function sayHello(input){
//     var sayHelloContainer = '';
//
//     switch(input){
//         case typeof undefined:
//             sayHelloContainer = "Hello, " + input + "!";
//             break;
//         case typeof true:
//             sayHelloContainer = "Hello, " + input + "!";
//             break;
//         case typeof false:
//             sayHelloContainer = "Hello, " + input + "!";
//             break;
//         case typeof "string":
//             sayHelloContainer = "Hello, " + input + "!";
//             break;
//     }
//
//     return sayHelloContainer;
// }


// function sayHello(input) {
//     var sayHelloContainer = "";
//
//     switch (input) {
//         case true:
//             sayHelloContainer = "Hello, " + input + "!";
//             break;
//         case false:
//             sayHelloContainer = "Hello, " + input + "!";
//             break;
//     }
//
//     return sayHelloContainer;
// }


//
//
// function sayHello(input) {
//     return (input === undefined || input === false) ? "Hello, World!" : ("Hello, " + input + "!");
// }

// function sayHello(input) {
//     if (input === true){
//         return "Hello, World!";
//     }
// }

// function sayHello(input) {
//     if (input === true || input === false){
//         return "Hello, "+ input + "!";
//     }
// }

// function sayHello(input) {
//     if (input === true || input === false){
//         return "Hello, "+ input + "!";
//     } else {
//         return false;
//     }
// }

function isFive(input) {
    return parseFloat(input) === 5;
}

function isEven(input) {
    return parseFloat(input) % 2 == 0;
}


let isVowel = function (input) {

    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    for (var i = 0; i < vowels.length; i++) {
        if (input === vowels[i]) {
            return true;
        }
    }

    return false;

};

