function speedDetector() {
    // Prompt the user to input the speed of the car
    let speed = prompt("Enter the speed of the car:");
    speed = parseFloat(speed);

    // Check if the input is a valid number
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Speed should be a positive number.");
        return;
    }

    // Define the speed limit and demerit points calculation
    const speedLimit = 70;
    const pointsPerUnit = 5;
    const maxPoints = 12;

    // Determine the result based on the speed
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / pointsPerUnit);
        if (demeritPoints > maxPoints) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}

// Call the function
speedDetector();
