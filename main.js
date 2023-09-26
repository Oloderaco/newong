// 1.1

let getName = prompt('Введите свое имя');
let getCurrentAge = +prompt('Введите год рождения');
let res;

let getCurrentTime = new Date();

const currentYear = getCurrentTime.getFullYear();


function postRes() {
    res = currentYear - getCurrentAge
    return res
}
postRes()
console.log(getName + ' , ' + res + ' лет');

// 1.2

let getI = +prompt('Количество задач ?');
let min = +prompt('min  диапазон ?');
let max = +prompt('max  диапазон ?');

const operators = ['+', '-', '*', '/'];

let number1;
let number2;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

let result;

for (let i = 1; i <= getI; i++) {
    number1 = getRandom(min, max);
    number2 = getRandom(min, max);
    let randomOperator = operators[Math.floor(Math.random() * operators.length)];
    switch (randomOperator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            console.log('Invalid operator');
    }
    let ans = +prompt(`${number1} ${randomOperator} ${number2} = ?`)
    if (ans === result) {
        alert("Congrats ! you answered the question correctly " + "(" + ans + ")");
    } else {
        alert("Oops, сorrect answer " + result + " Your answer to the question was - " + ans)
    }
}

console.log('the correct answer was ' + result);