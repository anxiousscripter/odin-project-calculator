const btnNumbers = Array.from(document.querySelectorAll('.btn-number'));
const btnOperators = Array.from(document.querySelectorAll('.btn-operator'));

const input = document.querySelector('.input-field');
const result = document.querySelector('.result-field');
const btnClear = document.querySelector('.btn-clear');
const btnBackspace = document.querySelector('.btn-backspace');

const divideByZeroError = 'Really dude? 🤨';

let value1;
let value2;
let operator;

function calculator() {
	// if a number button is clicked
	btnNumbers.map((button) =>
		button.addEventListener('click', () => {
			// append a number to the input field
			input.textContent += button.textContent;
		}),
	);

	// if an operator button is clicked
	btnOperators.map((button) =>
		button.addEventListener('click', () => {
			// append an operator if...
			// input has atleast a number,
			// input does not end with an operator,
			// and input has no operator present
			if (
				!button.classList.contains('btn-equals') &&
				input.textContent !== '' &&
				!input.textContent.endsWith(' ') &&
				!input.textContent.includes(' ')
			) {
				// append operator to the input field
				input.textContent += ` ${button.textContent} `;

				// but, if input has atleast a number,
				// and input already has an operator present,
				// evaluate current expression, append new operator next to result
			} else if (
				!button.classList.contains('btn-equals') &&
				input.textContent !== '' &&
				input.textContent.includes(' ') &&
				!input.textContent.endsWith(' ')
			) {
				convertValues();
				if (isDividingByZero()) {
					value1 = 0;
					value2 = 0;
					input.textContent = divideByZeroError;
					result.textContent = '';
				} else {
					result.textContent = operate(value1, operator, value2);
					input.textContent = `${result.textContent} ${button.textContent} `;
				}
			}

			// if the equals button is clicked
			if (button.classList.contains('btn-equals')) {
				// only calculate if all inputs are provided
				if (
					input.textContent !== '' &&
					input.textContent.includes(' ') &&
					!input.textContent.endsWith(' ')
				) {
					convertValues();
					if (isDividingByZero()) {
						value1 = 0;
						value2 = 0;
						input.textContent = divideByZeroError;
						result.textContent = '';
					} else {
						input.textContent = operate(value1, operator, value2);
						result.textContent = '';
					}
				}
			}
		}),
	);

	// if the backspace button is clicked
	btnBackspace.addEventListener('click', () => {
		if (input.textContent !== '') {
			deleteLastInput();
		}
	});

	// if the clear all (AC) button is clicked
	btnClear.addEventListener('click', () => {
		clearDisplay();
	});
}

function add(value1, value2) {
	return value1 + value2;
}

function subtract(value1, value2) {
	return value1 - value2;
}

function multiply(value1, value2) {
	return value1 * value2;
}

function divide(value1, value2) {
	return value1 / value2;
}

function operate(value1, operator, value2) {
	switch (operator) {
		case '+':
			return add(value1, value2);
		case '-':
			return subtract(value1, value2);
		case 'x':
			return multiply(value1, value2);
		case '/':
			return divide(value1, value2);
	}
}

function convertValues() {
	// get whatever is being displayed and split it into value1, the operator, and value2
	const splitInput = input.textContent.split(' ');
	// convert value1 and value2 to numbers and assign each value to its respective variable
	value1 = Number(splitInput[0]);
	operator = splitInput[1];
	value2 = Number(splitInput[2]);
}

function isDividingByZero() {
	return operator === '/' && value2 === 0;
}

function deleteLastInput() {
	input.textContent = input.textContent.substring(
		0,
		input.textContent.length - 1,
	);
}

function clearDisplay() {
	value1 = 0;
	value2 = 0;
	input.textContent = '';
	result.textContent = '';
}

calculator();
