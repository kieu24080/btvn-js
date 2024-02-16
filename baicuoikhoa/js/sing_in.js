
let login = document.getElementById('login')
login.addEventListener("submit", (event) => {
    event.preventDefault();

    let person = JSON.parse(localStorage.user);
    let us = document.getElementById('username');
    let pw = document.getElementById('password');

    for (let i = 0; i < person.length; i++) {
        if (us.value.trim() == person[i].us
            && pw.value.trim() == person[i].pw) {
            window.location.href = "../trangchu.html"
        }
    }
})