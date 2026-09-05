const buttons = Array.from(document.querySelectorAll('button'));

let inputField = document.querySelector('.input-field');
let resultField = document.querySelector('.result-field');

let num1;
let num2;
let operator;

// test zone
// end test zone

buttons.map((element) => {
	element.addEventListener('click', () => {
		// if the button clicked is a number
		if (element.classList.contains('btn-number')) {
			// display that number
			inputField.textContent += element.textContent;
			resultField.textContent = '';
		}

		// if the button clicked is an operator, is not the equals sign, and there is no other operator present
		if (
			!inputField.textContent.includes(' ') &&
			!element.classList.contains('btn-equals') &&
			element.classList.contains('btn-operator')
		) {
			// if the input field is not empty
			if (inputField.textContent !== '') {
				// display that operator next to whatever is already in the display
				inputField.textContent += ` ${element.textContent} `;
			}

			// however, if there already is an operator present and the other two conditions are met
		} else if (
			inputField.textContent.includes(' ') &&
			!element.classList.contains('btn-equals') &&
			element.classList.contains('btn-operator')
		) {
			// get whatever is being displayed and split it into num1, the operator, and num2
			const splitInput = inputField.textContent.split(' ');
			// convert num1 and num2 to numbers and assign each value to its respective variable
			num1 = Number(splitInput[0]);
			operator = splitInput[1];
			num2 = Number(splitInput[2]);
			// if the operator is divide and if the denominator is 0
			if (operator === '/' && num2 === 0) {
				resultField.textContent = 'Really dude?';
				num1 = 0;
				num2 = 0;
				inputField.textContent = '';
			} else {
				// call the operate function and display whatever it returns in the result field
				resultField.textContent = operate(num1, operator, num2);
				// update the input field to display the result of the previous calculation as num1
				// and to use the operator selected as the operator for the next calculation
				inputField.textContent = `${resultField.textContent} ${element.textContent} `;
			}
		}

		// if the button clicked is the equals sign
		if (element.classList.contains('btn-equals')) {
			const splitInput = inputField.textContent.split(' ');
			num1 = Number(splitInput[0]);
			operator = splitInput[1];
			num2 = Number(splitInput[2]);
			// if the operator is divide and if the denominator is 0
			if (operator === '/' && num2 === 0) {
				resultField.textContent = 'Really dude? 🤨';
				num1 = 0;
				num2 = 0;
				inputField.textContent = '';
			} else {
				resultField.textContent = operate(num1, operator, num2);
			}
		}

		// if the button clicked is the clear button
		if (element.classList.contains('btn-clear')) {
			num1 = 0;
			num2 = 0;
			inputField.textContent = '';
			resultField.textContent = '';
		}
	});
});

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
