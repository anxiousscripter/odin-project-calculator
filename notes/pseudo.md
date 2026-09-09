# PSEUDOCODE

## Problem Breakdown Guide

1. What am I being asked to do?
2. What information am I given?
3. What should I give back?
4. If I had to do this without programming, what would I do?

### Problem 1: Add

- create a function that adds two numbers together
- two numbers
- a number: the sum of the first two given numbers
- get the first two numbers, add them and return the sum

### Problem 2: Subtract

- create a function that calculates the difference between two numbers
- two numbers
- a number: the difference
- get the first two numbers, subtract the second from the first and return the difference

### Problem 3: Multiply

- create a function that calculates the product of two numbers
- two numbers
- a number: the product
- get the first two numbers, multiply the first one by the second one and return the product

### Problem 4: Divide

- create a function that calculates the dividend between two numbers
- two numbers
- a number: the dividend
- get the first two numbers, divide the first by the second and return the dividend

### Problem 5: Operate Function

- create a function that takes two numbers and an operator, and runs a calculation/calls previous functions on the two numbers depending on the operand selected
- two numbers, an operand
- a number: sum, difference, product, or dividend
- get the first two numbers, check which operator was used, calculate the result depending on the operator used and return the result

### Problem 6: Update Number Variables

**Sub-problem 1**

- create a function to update the first number variable when the calculator's digit buttons are clicked and display the value
- a button pressed with it's corresponding number
- a number: the number that was pressed
  _Steps_
- ...

### Problem 7: Single Pair Evaluation

- evaluate a single pair of numbers at a time
- two numbers and an operator
- a number: the result, and an operator if another is added to the expression
  _Steps_

### Problem 8: Rounding Long Decimals

### Problem 9: Evaluation Before All Input Is Provided

- prevent any calculations before all input is provided
- two numbers and an operator
- nothing if any part of the expression is missing. a number: the result if all input is provided
  _Steps_

### Problem 10: Clearing Display

- wipe out any existing data when the clear button is pressed
- a button: the clear button
- any empty input field, an empty result field, no values for the first number, second number, and operator
  _Steps_
- check whether the clear button has been pressed
  if it has...
- delete whatever is currently in the input field
- delete whatever is currently result field
- set the first number to 0
- set the second number to 0
- set the operator to nothing

### Problem 11: Prevent Divide By Zero

- display a snarky error message when the user tries to divide by zero
- the divide operator, zero
- a snarky error message
  _Steps_

### Problem 12: Replace Operators In Succession

- if an operator pressed is immediately followed by another operator, replace the first one with the most recently pressed one
- two operators: the first one pressed and the second one pressed
- an operator: the second or most recent one pressed
  _Steps_

### Problem 13: Clear Screen On New Digit Input

- clear the screen if a number is pressed and is not preceeded by an operator or an already evaluated expression
- a number
- that number displayed on the screen
  _Steps_
- check if the screen input field is empty
- if it is, display the number on screen
  if it is not...
- check if the last value in the input field is an operator
- if it is, append the number to the input field to make a new expression
- if it is not, clear both the input field and result field and display that number in the input field
