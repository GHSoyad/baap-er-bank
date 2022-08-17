// Add event listener
document.getElementById('withdraw-btn').addEventListener('click', function () {

    // Get withdraw amount
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValue = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawFieldValue);

    // Get current withdraw
    const withdrawCurrent = document.getElementById('withdraw-total');
    const withdrawCurrentValue = withdrawCurrent.innerText;
    const withdrawCurrentTotal = parseFloat(withdrawCurrentValue);

    // Get current balance
    const balanceCurrent = document.getElementById('balance-total');
    const balanceCurrentValue = balanceCurrent.innerText;
    const balanceCurrentTotal = parseFloat(balanceCurrentValue);

    // Return error if empty field
    if (withdrawField.value === '') {
        return alert('Enter deposit amount first!!')
    }

    // Clear withdraw field
    withdrawField.value = '';

    // Return error if withdraw amount is negative
    if (withdrawAmount < 0) {
        return alert('Withdraw amount cannot be negative!!');
    }

    // Return error if withdraw is more than current balance
    if (balanceCurrentTotal < withdrawAmount) {
        const depositNeeded = withdrawAmount - balanceCurrentTotal;
        return alert('Cannot withdraw this amount. Deposit first!!', depositNeeded);
    }

    // Calculate total withdraw
    const withdrawTotal = withdrawAmount + withdrawCurrentTotal;
    withdrawCurrent.innerText = withdrawTotal;

    // Calculate total balance
    const balanceTotal = balanceCurrentTotal - withdrawAmount;
    balanceCurrent.innerText = balanceTotal;
})