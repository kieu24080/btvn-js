
let register = document.getElementById('register');
register.addEventListener("users", (event) => {
    event.preventDefault()
    let us = document.getElementById('username');
    let email = document.getElementById('email');
    let pw = document.getElementById('password');
    let cpw = document.getElementById('cPassword');

    let emailRegex = /^[a-zA-Z0-9]+@(gmail|yahoo)\.com$/;
    let passRegex = /^[a-zA-Z0-9]{6,}$/;
    let cpassRegex = /^[a-zA-Z0-9]{6,}$/;


    if (email.value.trim().length == 0 && pw.value.trim().length == 0 && us.value.trim().length == 0 && cpw.value.trim().length == 0) {
        alert("Mời bạn điền đầy đủ thông tin")
        return
    } else if (email.value.trim().length == 0) {
        alert(" Mời bạn nhập email ")
        return
    } else if (pw.value.trim().length == 0) {
        alert(" Mời bạn nhập password ")
        return
    } else if (us.value.trim().length == 0) {
        alert("Mời bạn nhập tên đăng nhập")
        return
    } else if (cpw.value.trim().length == 0) {
        alert("Mời bạn nhập lại mật khẩu")
        return
    }
    if (!emailRegex.test(email.value)) {
        alert("Email sai định dạng")
        return
    }
    else if (!passRegex.test(pw.value)) {
        alert("Mật khẩu cần ít nhất 6 ký tự")
        return
    } else if (!cpassRegex.test(cpw.value)) {
        alert("Mật khẩu không đúng")
        return
    } else {
        // console.log(12);
        let users = JSON.parse(localStorage.getItem("user"))
        users.push({
            email: email.value.trim(),
            pw: pw.value.trim()
        })
        localStorage.setItem("user", JSON.stringify(users))
        alert("Đăng ký thành công")
        window.location.href = "../sing_in.html"
    }
})