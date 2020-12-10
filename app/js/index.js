'use strict'

//Global variable
let values = [];
let hist = document.querySelector('.calculator__history');
let result = document.querySelector('.calculator__result');

let val = [];

//Print on History Display
let display = function() {
	hist.innerHTML = values.join("");
}

// Arithmetic functions
let Arithmetic = {
  summary : function sum(a , b) {return a + b},
  subtract : function sub(a , b) {return a - b},
  multiply : function mul(a , b) {return a * b},
  divide : function div(a , b) {return a / b},
};

//Event Listeners
for(let number of document.querySelectorAll('.number')) {
  number.addEventListener('click' , function () {
    values.push(this.innerHTML);
    display();

    console.log(values);
  })
}

for(let operator of document.querySelectorAll('.operator')) {
  operator.addEventListener('click' , function () {
    // val = values.join('');
    // val.push(this.innerHTML);
    values.push(this.innerHTML);
    display();
    console.log(values);
  })
}

// Reset and Compute
let reset = document.querySelector('.functionality__reset-button');
reset.addEventListener('click' , function(){
  hist.innerHTML = '';
  result.value = '';
  values = [];
})

let compute = document.querySelector('.functionality__compute-button');
compute.addEventListener('click', function() {
  if (values[1] === '+') {
    result.value = Arithmetic.summary(Number(values[0]) , Number(values[2]));
  } else if (values[1] === '-') {
    result.value = Arithmetic.subtract(Number(values[0]) , Number(values[2]));
  } else if (values[1] === '*') {
    result.value = Arithmetic.multiply(Number(values[0]) , Number(values[2]));
  } else if (values[1] === '/') {
    result.value = Arithmetic.divide(Number(values[0]) , Number(values[2]));
  }
})

//Previos version of Calculator

// function getHistory() {
//   return document.querySelector('.calculator__history').innerHTML;
// }

// function printHistory(num) {
//   return document.querySelector('.calculator__history').innerHTML = num;
// }

// function getResult() {
//   return document.querySelector('.calculator__result').value;
// }

// function printResult(num) {
//   return document.querySelector('.calculator__result').value = num;
// }

// for (let operator of document.querySelectorAll('.operator')) {
//   operator.addEventListener('click', function () {
//     if(this.id === 'Reset') {
//       printHistory('');
//       printResult('');
//     } else {
//         let result = getResult();
//         let history = getHistory();
//         if(result) {
//           history = history+result;
//           if(this.id === '=') {
//             let res = eval(history);
//             printResult(res);
//             printHistory('');
//           } else {
//             history = history + this.id;
//             printHistory(history);
//             printResult('');
//           }
//         }
//     }
//   });
// }

// for (let number of document.querySelectorAll('.number')) {
//   number.addEventListener('click', function () {
//     let res = getResult();
//     res = res + this.id;
//     printResult(res);
//   });
// }
