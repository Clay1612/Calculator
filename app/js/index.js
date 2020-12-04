"use strict"

function getHistory() {
  return document.querySelector('.calculator__history').innerHTML;
}

function printHistory(num) {
  return document.querySelector('.calculator__history').innerHTML = num;
}

function getResult() {
  return document.querySelector('.calculator__result').value;
}

function printResult(num) {
  return document.querySelector('.calculator__result').value = num;
}

for (let operator of document.querySelectorAll(".operator")) {
  operator.addEventListener("click", function () {
    if(this.id == "Reset") {
      printHistory("");
      printResult("");
    } else {
        let result = getResult();
        let history = getHistory();
        if(result!="") {
          history = history+result;
          if(this.id=="=") {
            let res = eval(history);
            printResult(res);
            printHistory("");
          } else {
            history=history+this.id;
            printHistory(history);
            printResult("");
          }
        }
    }
  });
}

for (let number of document.querySelectorAll(".number")) {
  number.addEventListener("click", function () {
    let res = getResult();
    res=res+this.id;
    printResult(res);
  });
}