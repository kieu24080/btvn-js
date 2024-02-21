
let register = document.getElementById('register');
register.addEventListener("submit", (event) => {
    event.preventDefault()
    let us = document.getElementById('username');
    let email = document.getElementById('email');
    let pw = document.getElementById('password');
    let cpw = document.getElementById('cPassword');
    // console.log("test: " + us.value + email.value + pw.value + cpw.value)

    let emailRegex = /^[a-zA-Z0-9]+@(gmail|yahoo)\.com$/;
    let passRegex = /^[a-zA-Z0-9]{6,}$/;
    let cpassRegex = /^[a-zA-Z0-9]{6,}$/;
    // let lowText = /[a-z]/g
    // let upperTexxt = /[A-Z]/g
    // let numbers = /[0-9]/g

    if (email.value.trim().length == 0 && pw.value.trim().length == 0 && us.value.trim().length == 0 && cpw.value.trim().length == 0) {
        alert("Mời bạn điền đầy đủ thông tin")
        // return
    } else if (email.value.trim().length == 0) {
        alert(" Mời bạn nhập email ")
        // return
    } else if (pw.value.trim().length == 0) {
        alert(" Mời bạn nhập password ")
        // return
    } else if (us.value.trim().length == 0) {
        alert("Mời bạn nhập tên đăng nhập")
        // return
    } else if (cpw.value.trim().length == 0) {
        alert("Mời bạn nhập lại mật khẩu")
        // return
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
    }
    else {
        if (localStorage.users) {
            let users = JSON.parse(localStorage.users)
            users.push({
                us: us.value.trim(),
                email: email.value.trim(),
                pw: pw.value.trim(),
                cpw: cpw.value.trim()
            })
            localStorage.setItem("users", JSON.stringify(users))
        } else {

            localStorage.setItem("users", JSON.stringify(
                [
                    {
                        us: us.value.trim(),
                        email: email.value.trim(),
                        pw: pw.value.trim(),
                        cpw: cpw.value.trim()
                    }
                ]
            ))
        }
        alert("Đăng ký thành công")
        window.location.href = "./sing_in.html"


    }
})