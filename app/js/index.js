"use strict"

let result = document.querySelector('.calculator__result');


// Обработчик события, передача значения кнопки в result
for (let number of document.querySelectorAll('.number')) {
  number.addEventListener('click', rem);
}

function rem(event) {
  let val = event.target.innerHTML;

  let res = document.querySelector('.calculator__result');
  res.value = val;
 }

// функция сложения

let summary = document.querySelector('.addition');
summary.addEventListener('click', sum);

function sum () {
  let i = document.querySelector('.calculator__result');
  console.log(i.value);
}



























// for (let numbers of document.querySelectorAll('.number')) {

//   numbers.addEventListener("click" , rem);
// }

// function rem(event) {
//   let a = event.target.innerHTML;

//   let result = document.querySelector('.calculator__result');
//   result.innerHTML += a;
//  }

// for (let oper of document.querySelectorAll('.operator')) {

//   oper.addEventListener("click" , rem);
// }

// // let a = document.getElementById('7');
// // let b = document.getElementById('8');

// // let c = +a.innerHTML + +b.innerHTML;

// // console.log(c);

// // for (let numbers of document.querySelectorAll('.number')) {

// // }
