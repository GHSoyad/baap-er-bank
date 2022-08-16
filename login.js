document.getElementById('btn-login').addEventListener('click', function () {
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;

    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;
    console.log(userEmail);
    console.log(userPassword);

    if (userEmail == 'golam@gmail.com' && userPassword == 'qwerty123') {
        alert('Logged in!!');
    } else {
        alert('Invalid Credentials!!');
        userEmailField.value = '';
        userPasswordField.value = '';
    }

})