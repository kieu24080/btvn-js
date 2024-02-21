
// let login = document.getElementById('sing_in')
// register.addEventListener("submit", (event) => {
//     alert("hello")
   
// })
let singin = document.getElementById('sing_in')
singin.addEventListener("submit", (event) => {
    event.preventDefault();

    let person = JSON.parse(localStorage.users);
    let us = document.getElementById('email');
    let pw = document.getElementById('password');

    for (let i = 0; i < person.length; i++) {
        if (us.value.trim() == person[i].email
            && pw.value.trim() == person[i].pw) {
                window.location.href = "./trangchu.html"
        }
    }
})