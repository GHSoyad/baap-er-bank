// Get amount from input field
function getInputAmountById(input) {
    const inputField = document.getElementById(input);
    const inputFieldValue = inputField.value;
    const inputAmount = parseFloat(inputFieldValue);
    inputField.value = '';
    return inputAmount;
}

// Get current total
function getCurrentTotalById(amount) {
    const amountCurrent = document.getElementById(amount);
    const amountCurrentValue = amountCurrent.innerText;
    const amountCurrentTotal = parseFloat(amountCurrentValue);
    return amountCurrentTotal;
}

// Set new total
function setTotalAmountById(field, result) {
    const setField = document.getElementById(field);
    setField.innerText = result;
}