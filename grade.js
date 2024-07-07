function getStudentGrade() {
    // Prompt the user to input student marks
    let marks = prompt("Enter student marks (0-100):");
    marks = parseFloat(marks);

    // Check if the input is within the valid range
    if (isNaN(marks) || marks < 0 || marks > 100) {
       console.log("Invalid input. Marks should be between 0 and 100.");
        return;
    }

    // Determine the grade based on the input marks
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

    // Output the corresponding grade
    console.log("The grade is: " + grade);
}

// Call the function
getStudentGrade();
