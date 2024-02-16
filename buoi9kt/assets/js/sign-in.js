const name = document.querySelector('.name');
const email = document.querySelector('.email');
const password = document.querySelector('.password')

let login = document.getElementById('login')
login.addEventListener("submit", (event) => {
    event.preventDefault();

    let person = JSON.parse(localStorage.users);
    let email = document.getElementById('email');
    let password = document.getElementById("password");

    for (let index = 0; index < person.length; index++) {
        if (email.value.trim() == person[index].email
            && pw.value.trim() == person[index].password) {
            alert("tk đã tồn tại")
            window.location.href = ""
        }
    }
})