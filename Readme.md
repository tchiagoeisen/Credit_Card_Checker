# CodeCademy Project: Credit Card Checker

## Overview
This project contains a series of open-ended requirements which describe the project you’ll be building.There are many possible ways to correctly fulfill 
all of these requirements.

Context: The company that you work for suspects that credit card distributors have been mailing 
out cards that have invalid numbers. In this project, you have the role of a clerk who checks if 
credit cards are valid.

## The Project
There are 15 arrays that each contain the digits of separate credit card numbers. They all have prefixes to reflect their status, i.e. variables that start with valid contain a valid number, whereas invalid do not, and mystery variables can be either. There is also a batch array that stores all of the provided credit cards in a single array.

Starting from the farthest digit to the right, AKA the check digit, iterate to the left.

As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.

Sum up all the digits in the credit card number.

If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.

## Credits
This was a project from CodeCademy. I used the the terminal and console.log() statements to check the functions.


