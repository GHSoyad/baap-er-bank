// Add event listener
document.getElementById('deposit-btn').addEventListener('click', function () {

    // get deposit amount
    const depositField = document.getElementById('deposit-field');
    const depositFieldString = depositField.value;
    const depositFieldValue = parseFloat(depositFieldString);

    // get current deposit
    const depositCurrent = document.getElementById('deposit-total');
    const depositCurrentString = depositCurrent.innerText;
    const depositCurrentValue = parseFloat(depositCurrentString);

    // get current balance
    const balanceCurrent = document.getElementById('balance-total');
    const balanceCurrentString = balanceCurrent.innerText;
    const balanceCurrentValue = parseFloat(balanceCurrentString);

    // return error if empty field
    if (depositField.value === '') {
        return alert('Enter a valid amount!!')
    }

    // calculate total deposit
    const depositTotalValue = depositCurrentValue + depositFieldValue;
    depositCurrent.innerText = depositTotalValue;

    // calculate total balance
    const balanceTotalValue = balanceCurrentValue + depositFieldValue;
    balanceCurrent.innerText = balanceTotalValue;

    depositField.value = '';
})