// Add event listener
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawAmount = getInputAmountById('withdraw-field');
    const withdrawCurrentTotal = getCurrentTotalById('withdraw-total');
    const balanceCurrentTotal = getCurrentTotalById('balance-total');

    // Return error if empty field
    if (isNaN(withdrawAmount)) {
        return alert('Enter withdraw amount first!!');
    }

    // Return error if input amount is negative
    if (withdrawAmount < 0) {
        return alert('Withdraw amount cannot be negative!!');
    }

    // Return error if withdraw is more than current balance
    if (balanceCurrentTotal < withdrawAmount) {
        return alert('Withdraw amount cannot be more than balance!!')
    }

    // Calculate total withdraw
    const withdrawTotal = withdrawAmount + withdrawCurrentTotal;
    setTotalAmountById('withdraw-total', withdrawTotal);

    // Calculate total balance
    const balanceTotal = balanceCurrentTotal - withdrawAmount;
    setTotalAmountById('balance-total', balanceTotal);
})