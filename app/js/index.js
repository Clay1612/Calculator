'use strict'

let historyDisplay = document.querySelector('.calculator__history');
let resultDisplay = document.querySelector('.calculator__result');
let values = ['','',''];
let historyVariable = [];

let Arithmetic = {
  '+' : function(a, b) {return a + b},
  '-' : function(a, b) {return a - b},
  '×' : function(a, b) {return a * b},
  '÷' : function(a, b) {return a / b},
};

class Calculator {
  constructor() {
    this.historyDisplay = historyDisplay;
    this.resultDisplay = resultDisplay;
    this.values = values;
    this.historyVariable = historyVariable;
    this.arithmetic = Arithmetic;

    // for(let number of document.querySelectorAll('.number')) {
    //   number.addEventListener('click', CLK());
    // }

    // for(let operator of document.querySelectorAll('.operator')) {
    // operator.addEventListener('click', function() {
    //   if(values[1]) {
    //     printToValuesArray(resultDisplay.value);
    //     computeFunction();

    //     if(resultDisplay.value == Infinity) {
    //       resultDisplay.value = 'Деление на 0 запрещено!'
    //       historyFunction('');
    //     } else {
    //       historyFunction(`${values.join('')}=${resultDisplay.value}`);
    //       printToValuesArray(resultDisplay.value);
    //       printToValuesArray(this.innerHTML);
    //       resultDisplay.value = '';
    //     }

    //     } else {
    //       printToValuesArray(resultDisplay.value);
    //       printToValuesArray(this.innerHTML);
    //       resultDisplay.value = '';
    //     }
    //   })
    // }

  }
  historyFunction(valueOfResult) {
    historyVariable.push(valueOfResult);
    historyDisplay.append(historyVariable[historyVariable.length-1]);
    historyDisplay.append(document.createElement('br'));
  }

  printToValuesArray(value) {
	  values.push(value);
	  values.shift();
  }

  computeFunction() {
    const [value1, operator, value2] = values;
    resultDisplay.value = Arithmetic[operator](Number(value1), Number(value2)).toFixed(2);
  }

  CLK() { //**FIX ME
    resultDisplay.value = `${resultDisplay.value}${this.innerHTML}`;
  }
}

const calculator = new Calculator();
console.log(calculator); //**FIX ME

for(let number of document.querySelectorAll('.number')) {
  number.addEventListener('click', calculator.CLK);
}

for(let operator of document.querySelectorAll('.operator')) {
  operator.addEventListener('click', function() {
    if(values[1]) {
      calculator.printToValuesArray(resultDisplay.value);
      calculator.computeFunction();

      if(resultDisplay.value == Infinity) {
        resultDisplay.value = 'Деление на 0 запрещено!'
        calculator.historyFunction('');
      } else {
        calculator.historyFunction(`${values.join('')}=${resultDisplay.value}`);
        calculator.printToValuesArray(resultDisplay.value);
        calculator.printToValuesArray(this.innerHTML);
        resultDisplay.value = '';
      }

    } else {
      calculator.printToValuesArray(resultDisplay.value);
      calculator.printToValuesArray(this.innerHTML);
      resultDisplay.value = '';
    }
  })
}


// //Global variable
// let historyDisplay = document.querySelector('.calculator__history');
// let resultDisplay = document.querySelector('.calculator__result');
// let values = ['','',''];
// let historyVariable = [];

// //Print on History Display function
// let historyFunction = function(valueOfResult) {
//   historyVariable.push(valueOfResult);
//   historyDisplay.append(historyVariable[historyVariable.length-1]);
//   historyDisplay.append(document.createElement('br'));
// }

// //printToValuesArray function
// let printToValuesArray = function(value) {
// 	values.push(value);
// 	values.shift();
// }

// // Arithmetic functions
// let Arithmetic = {
//   '+' : function(a, b) {return a + b},
//   '-' : function(a, b) {return a - b},
//   '×' : function(a, b) {return a * b},
//   '÷' : function(a, b) {return a / b},
// };

// let computeFunction = function() {
//   const [value1, operator, value2] = values;
//   resultDisplay.value = Arithmetic[operator](Number(value1), Number(value2)).toFixed(2);
// }

// //Event Listeners
// for(let number of document.querySelectorAll('.number')) {
//   number.addEventListener('click', function() {
//   resultDisplay.value = `${resultDisplay.value}${this.innerHTML}`;
//   })
// }

// for(let operator of document.querySelectorAll('.operator')) {
//   operator.addEventListener('click', function() {
//     if(values[1]) {
//       printToValuesArray(resultDisplay.value);
//       computeFunction();

//       if(resultDisplay.value == Infinity) {
//         resultDisplay.value = 'Деление на 0 запрещено!'
//         historyFunction('');
//       } else {
//         historyFunction(`${values.join('')}=${resultDisplay.value}`);
//         printToValuesArray(resultDisplay.value);
//         printToValuesArray(this.innerHTML);
//         resultDisplay.value = '';
//       }

//     } else {
//       printToValuesArray(resultDisplay.value);
//       printToValuesArray(this.innerHTML);
//       resultDisplay.value = '';
//     }
//   })
// }

// let reset = document.querySelector('.functionality__reset-button');
// reset.addEventListener('click', function(){
//   historyDisplay.innerHTML = '';
//   resultDisplay.value = '';
//   historyVariable = [];
//   values = ['','',''];
// })

// let compute = document.querySelector('.functionality__compute-button');
// compute.addEventListener('click', function() {
//   printToValuesArray(resultDisplay.value);
//   computeFunction();

//   if(resultDisplay.value == Infinity) {
//     resultDisplay.value = 'Деление на 0 запрещено!'
//     historyFunction('');
//   } else {
//     historyFunction(`${values.join('')}=${resultDisplay.value}`);
//   }
//   values = ['','',''];
// })