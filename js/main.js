const buttons = Array.from(document.querySelectorAll('button'));

let inputField = document.querySelector('.input-field');
let resultField = document.querySelector('.result-field');

let num1;
let num2;
let operator;

// test zone

buttons.map((element) =>
	element.addEventListener('click', () => {
		if (element.classList.contains('btn-number')) {
			inputField.textContent += element.textContent;
			resultField.textContent = inputField.textContent;
		}

		if (element.classList.contains('btn-operator')) {
			if (inputField.textContent === '') {
				num1 = 0;
			} else {
				num1 = Number(inputField.textContent);
				inputField.textContent += ` ${element.textContent} `;
			}
		}
	}),
);

// end test zone

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate(num1, operand, num2) {
	switch (operand) {
		case '+':
			return add(num1, num2);
		case '-':
			return subtract(num1, num2);
		case '*':
			return multiply(num1, num2);
		case '/':
			return divide(num1, num2);
	}
}
