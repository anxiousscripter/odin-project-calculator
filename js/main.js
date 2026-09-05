const buttons = Array.from(document.querySelectorAll('button'));

let inputField = document.querySelector('.input-field');
let resultField = document.querySelector('.result-field');

let num1;
let num2;
let operator;

// test zone

buttons.map((element) => {
	element.addEventListener('click', () => {
		if (element.classList.contains('btn-number')) {
			inputField.textContent += element.textContent;
		}

		if (
			element.classList.contains('btn-operator') &&
			!element.classList.contains('btn-equals')
		) {
			inputField.textContent += ` ${element.textContent} `;
		}

		if (element.classList.contains('btn-equals')) {
			const splitInput = inputField.textContent.split(' ');
			num1 = Number(splitInput[0]);
			operator = splitInput[1];
			num2 = Number(splitInput[2]);
			resultField.textContent += operate(num1, operator, num2);
		}

		if (element.classList.contains('btn-clear')) {
			num1 = 0;
			num2 = 0;
			inputField.textContent = '';
			resultField.textContent = '';
		}
	});
});
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

function operate(num1, operator, num2) {
	switch (operator) {
		case '+':
			return add(num1, num2);
		case '-':
			return subtract(num1, num2);
		case 'x':
			return multiply(num1, num2);
		case '/':
			return divide(num1, num2);
	}
}
