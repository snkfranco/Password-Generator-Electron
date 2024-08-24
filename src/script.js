const pass = document.querySelector('#pass');
const newPassword = document.querySelector('#newPassword');

function generatePass(){

    newPassword.innerHTML = '';

    // Convert pass.value to a number and validate
    const length = parseInt(pass.value, 10);

    if (isNaN(length) || length <= 0 || length > 30) {
        alert('Type a valid password length between 1 and 30!');
        return;
    }
    
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";

    for (let i = 0; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    let result = document.createTextNode(password);
    return newPassword.appendChild(result);

}