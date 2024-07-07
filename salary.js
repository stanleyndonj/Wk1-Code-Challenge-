function netSalaryCalculator() {
    // Get inputs for basic salary and benefits
    let basicSalary = parseFloat(prompt("Enter basic salary:"));
    let benefits = parseFloat(prompt("Enter benefits:"));

    // Check if inputs are valid numbers
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Invalid input. Please enter positive numbers for salary and benefits.");
        return;
    }

    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE (tax) based on KRA tax rates
    function calculatePAYE(grossSalary) {
        let tax = 0;
        if (grossSalary <= 24000) {
            tax = grossSalary * 0.1;
        } else if (grossSalary <= 32333) {
            tax = 2400 + (grossSalary - 24000) * 0.25;
        } else {
            tax = 5825 + (grossSalary - 32333) * 0.3;
        }
        return tax;
    }

    // Calculate NHIF deductions
    function calculateNHIF(grossSalary) {
        if (grossSalary <= 5999) return 150;
        if (grossSalary <= 7999) return 300;
        if (grossSalary <= 11999) return 400;
        if (grossSalary <= 14999) return 500;
        if (grossSalary <= 19999) return 600;
        if (grossSalary <= 24999) return 750;
        if (grossSalary <= 29999) return 850;
        if (grossSalary <= 34999) return 900;
        if (grossSalary <= 39999) return 950;
        if (grossSalary <= 44999) return 1000;
        if (grossSalary <= 49999) return 1100;
        if (grossSalary <= 59999) return 1200;
        if (grossSalary <= 69999) return 1300;
        if (grossSalary <= 79999) return 1400;
        if (grossSalary <= 89999) return 1500;
        if (grossSalary <= 99999) return 1600;
        return 1700;
    }

    // Calculate NSSF deductions
    function calculateNSSF(grossSalary) {
        return Math.min(grossSalary * 0.06, 1080); // Capped at 1080
    }

    // Calculate deductions
    let payee = calculatePAYE(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);
    let totalDeductions = payee + nhif + nssf;

    // Calculate net salary
    let netSalary = grossSalary - totalDeductions;

    // Output the results
    console.log("Gross Salary: " + grossSalary.toFixed(2));
    console.log("PAYE: " + payee.toFixed(2));
    console.log("NHIF: " + nhif.toFixed(2));
    console.log("NSSF: " + nssf.toFixed(2));
    console.log("Total Deductions: " + totalDeductions.toFixed(2));
    console.log("Net Salary: " + netSalary.toFixed(2));
}

// Call the function
netSalaryCalculator();
