'use strict';

const buttons = document.querySelectorAll(".btn");
const display = document.querySelector("input");
const acBtn = document.querySelector(".ac-btn");
const delBtn = document.querySelector(".del-btn");
const equalBtn = document.querySelector(".equal-btn");


buttons.forEach(button => {
	button.addEventListener("click", () => {
		let number = button.textContent;
		display.value += number;
	});
});

equalBtn.addEventListener("click", () => {
	display.value = eval(display.value);
});

acBtn.addEventListener("click", () => {
	display.value = "";
});

delBtn.addEventListener("click", () => {
	let lastNumber = display.value.substring("", display.value.length - 1);
	display.value = lastNumber;
});