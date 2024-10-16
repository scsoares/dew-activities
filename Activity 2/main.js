//write your JS code here:

const OPERATIONS = [
    { operation: "push", data: [[1, 2, 3], 4] },
    { operation: "+", data: [1, 2, 3] },
    { operation: "+", data: [3] },
    { operation: "*", data: [2, 3] },
    { operation: "filter", data: [[1, 2, 3], 3] },
    { operation: "merge", data: [[1, 2, 3], [4, 5], [6], [7]] },
];


function opSum(data) {

    let sum = 0;

    // for (let i = 0; i < data.length; i++) {
    //     sum += data[i];
    // }

    data.forEach(elemento => sum += elemento)

    return sum;
}

function opMul(data) {

    let mul = 1;

    // for (let number of op.data) { 
    //     mul = mul * number;
    // }

    data.forEach(elemento => { mul = mul * elemento })

    // tiene que usar reduce, revisar

    return mul;
}

function opPush(data) {
    // let arr2 = data[0];
    // arr2.push(data[1]);

    // return data + "," + arr2;

    // se puede hacer con reduce, revisar
    // let a = [1, 2 ,3]
    // ...a es igual a 1, 2, 3
    // [...a, "a"] == [1, 2, 3, "a"]

    let [first, ...rest] = data;
    console.log("esto es lo que tiene rest:", rest);
    return [...first, ...rest];

}

function opFilter(data) {

    let arr2 = data[0];
    arr2[0].filter[1];
}


function opMerge(data) {

    return [].concat(...data);
}



function batchProcessing(operations) {

    for (i = 0; i < operations; i++) {
        const op = operations[i];
        switch (op.operation) {
            case "+": opSum(op.data);
                break;
            case "*": opMul(op.data);
                break;
            case "push": opPush(op.data);
                break;
            case "merge": opMerge(op.data);
                break;
            case "filter": opFilter(op.data);
                break;
        }
    }


}


//////////



// const num1 = 5;
// const num2 = 10;

// console.log(15 + 5);







// function checkValue() {
//     const value = 58;

//     if (value <= 50) {
//         console.log("Insufficient");
//     } else if ()
// }


let persona = {
    name: "Ana",
    age: 29,
    dni: "G4959523R"
}


function isEven(number) {
    const isEven = false;

    number % 2 == 0 ? true : false;

    return isEven;
}




function showOverTen() {
    let numbers = [5, 12, 8, 3, 23];
    let arr2 = [];

    for (let number of numbers) {
        if (number > 10) {
            arr2.push(number);
        }
    }

    return arr2;
}


function matrix() {

    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]]


    console.log(matrix);
}






function howMany() {
    let fruits = [apple, orange, orange, banana, banana, banana, pear, pear]

    let numApples = 0;
    let numOranges = 0;
    let numBananas = 0;
    let numPears = 0;

    for (let fruit of fruits) {
        if (fruit === "apple") {
            numApples += 1;
        }
    }
}