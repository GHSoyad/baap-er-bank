// Add event listener
document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositAmount = getInputAmountById('deposit-field');
    const depositCurrentTotal = getCurrentTotalById('deposit-total');
    const balanceCurrentTotal = getCurrentTotalById('balance-total');

    // Return error if empty field
    if (isNaN(depositAmount)) {
        return alert('Enter deposit amount first!!');
    }

    // Return error if input amount is negative
    if (depositAmount < 0) {
        return alert('Deposit amount cannot be negative!!')
    }

    // calculate total deposit
    const depositTotal = depositAmount + depositCurrentTotal;
    setTotalAmountById('deposit-total', depositTotal);

    // calculate total balance
    const balanceTotal = balanceCurrentTotal + depositAmount;
    setTotalAmountById('balance-total', balanceTotal);
})