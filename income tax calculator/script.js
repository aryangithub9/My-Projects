
    let income = document.getElementById("input");
    let btn = document.getElementById('submit');
    let taxOutput = document.querySelector('.tax p');

    function calculateTax(income) {
    income = parseFloat(income);
    if (isNaN(income) || income < 0) {
        return 'Invalid input';
    }
    let taxableIncome, tax;
    if (income <= 300000) {
        tax = 0; 
    }
    else if (income <= 600000) {
        tax = income * 0.05; 
    }
        else if (income <= 900000) {
        const taxRebate = Math.min(income * 0.1, 70000); // 10% Tax Rebate u/s 87A up to Rs 7 lakh
        taxableIncome = income - taxRebate;
        tax = taxableIncome * 0.1;
    } 
    else if (income <= 1200000) {
        taxableIncome = income;
        tax = taxableIncome * 0.15; // 15% tax rate
    } 
    else if (income <= 1500000) {
        taxableIncome = income;
        tax = taxableIncome * 0.2; // 20% tax rate
    }
    else {
        taxableIncome = income;
        tax = taxableIncome * 0.3; // 30% tax rate for income above Rs. 15,00,000
    }
    return tax;
    }

    btn.addEventListener('click', function() {
    let incomeValue = income.value.trim();
    if (incomeValue === '') {
        taxOutput.textContent = 'Please enter your income';
        return;
    }
    let taxValue = calculateTax(incomeValue);
    if (typeof taxValue === 'string') {
        taxOutput.textContent = taxValue;
    } 
    else {
        taxOutput.textContent = `Your tax amount is: Rs. ${taxValue.toFixed(2)}`;
    }
    });
