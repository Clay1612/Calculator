'use strict'

//Global variable
let values = [];
let HistoryDisplay = document.querySelector('.calculator__history');
let result = document.querySelector('.calculator__result');
let val = ['','',''];
let res = 0;
let Hist = [];

//Print on Result and History Displays
let display = function() {
	result.value = values.join('');
}

let History = function(valueOfResult) {
  Hist.push(valueOfResult);
  HistoryDisplay.innerHTML = Hist.join( document.createElement('br') );
}

//Update function
let update = function(value) {
	val.push(value);
	val.shift();
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
  })
}

for(let operator of document.querySelectorAll('.operator')) {
  operator.addEventListener('click' , function () {
    if(res) {
      update(res);
      update(this.innerHTML);
      values = [];
      display();
    } else {
      update(values.join(''));
      update(this.innerHTML);
      values = [];
      display();
    }
  })
}

// Reset and Compute
let reset = document.querySelector('.functionality__reset-button');
reset.addEventListener('click' , function(){
  HistoryDisplay.innerHTML = '';
  result.value = '';
  values = [];
  res = 0;
  Hist = [];
})

let compute = document.querySelector('.functionality__compute-button');
compute.addEventListener('click', function() {
  update(values.join(''));
  if (val[1] === '+') {
    result.value = Arithmetic.summary(Number(val[0]) , Number(val[2]));
  } else if (val[1] === '-') {
    result.value = Arithmetic.subtract(Number(val[0]) , Number(val[2]));
  } else if (val[1] === '*') {
    result.value = Arithmetic.multiply(Number(val[0]) , Number(val[2]));
  } else if (val[1] === '/') {
    result.value = Arithmetic.divide(Number(val[0]) , Number(val[2]));
  }

  History(val.join('') + '=' + result.value);
  res = result.value;
  console.log(Hist);
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
