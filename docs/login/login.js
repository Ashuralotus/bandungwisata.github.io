let username = {
    user: `aditya`,
    password: `ashuralotus`
}

function login() {
    let inputUserID = document.getElementById(`inputUserID`).value;
    let inputPassword = document.getElementById(`inputPassword`).value;
    if (inputUserID === username.user && inputPassword === username.password) {
        window.location.href = `../konten/index3.html`
    } else {
        alert(`User ID atau Password Salah`)
    }
}