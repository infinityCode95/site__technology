"use strict";


// ! Subscribe

const subscribeBtn = document.querySelector('.contentabout__btn');
const modalWindow = document.querySelector('.modal');
const closeModalWindowBtn = document.querySelector('.modal__icon-close');

subscribeBtn.addEventListener('click', () => {
     modalWindow.classList.add('modal__active');
});

closeModalWindowBtn.addEventListener('click', () => {
     modalWindow.classList.remove('modal__active');
});


// ! Burger

const burgegBtn = document.querySelector('.burger__btn');
const burgerBody = document.querySelector('.bodyburger');

burgegBtn.addEventListener('click', () => {
     burgerBody.classList.toggle('bodyburger__active');    
});

// ! Greeting

const greetingWindow = document.querySelector('.greeting');
const greetingClose = document.querySelector('.greeting__close');

function showGreeting() {
     greetingWindow.classList.add('greeting__active');
}

setTimeout(showGreeting, 1500);

greetingClose.addEventListener('click', () => {
     greetingWindow.classList.remove('greeting__active');
});