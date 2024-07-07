# JavaScript Toy Problems

This repository contains solutions to three JavaScript toy problems: Student Grade Generator, Speed Detector, and Net Salary Calculator.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
  - [Student Grade Generator](#student-grade-generator)
  - [Speed Detector](#speed-detector)
  - [Net Salary Calculator](#net-salary-calculator)
- [Contributing](#contributing)
- [License](#license)

## Description

These toy problems are designed to practice basic JavaScript skills by implementing simple programs with specific functionalities:
1. **Student Grade Generator**: Determines the grade of a student based on marks entered.
2. **Speed Detector**: Calculates demerit points based on the speed of a car.
3. **Net Salary Calculator**: Calculates the net salary after deductions from the gross salary and benefits.

## Installation

To run these programs, you can use any JavaScript environment such as a web browser's console. There is no need for additional installations.

## Usage

Copy the code snippets for each challenge and paste them into your JavaScript environment. Follow the prompts to input the necessary values.

### Student Grade Generator

This program prompts the user to input student marks (between 0 and 100) and outputs the corresponding grade based on predefined criteria.

```javascript
function getStudentGrade() {
    let marks = prompt("Enter student marks (0-100):");
    marks = parseFloat(marks);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Marks should be between 0 and 100.");
        return;
    }

    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    console.log("The grade is: " + grade);
}

getStudentGrade();



