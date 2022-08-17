// Add event listener
document.getElementById('deposit-btn').addEventListener('click', function () {

    // Get deposit amount
    const depositField = document.getElementById('deposit-field');
    const depositFieldValue = depositField.value;
    const depositAmount = parseFloat(depositFieldValue);

    // Get current deposit
    const depositCurrent = document.getElementById('deposit-total');
    const depositCurrentValue = depositCurrent.innerText;
    const depositCurrentAmount = parseFloat(depositCurrentValue);

    // Get current balance
    const balanceCurrent = document.getElementById('balance-total');
    const balanceCurrentValue = balanceCurrent.innerText;
    const balanceCurrentTotal = parseFloat(balanceCurrentValue);

    // Clear field
    depositField.value = '';

    // Return error if empty field
    if (depositField.value === '') {
        return alert('Enter deposit amount first!!')
    }

    // Return error if deposit amount is negative
    if (depositAmount < 0) {
        return alert('Deposit amount cannot be negative!!')
    }

    // calculate total deposit
    const depositTotal = depositCurrentAmount + depositAmount;
    depositCurrent.innerText = depositTotal;

    // calculate total balance
    const balanceTotal = balanceCurrentTotal + depositAmount;
    balanceCurrent.innerText = balanceTotal;
})