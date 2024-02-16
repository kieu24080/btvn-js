let register = document.getElementById('logi')
register.addEventListener("submit", (event) => {

    event.preventDefault()
    let email = document.getElementById('email');
    let pw = document.getElementById('password');

    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email.value.trim().lenght == 0 && pw.value.trim() == 0) {
        alert("mời bạn nhậm email và mật khẩu")
    } else if (email.value.trim().lenght == 0) {
        alert("mời bạn nhập email")
    } else if (pw.value.trim().lenght == 0) {
        alert("mời bạn nhập password")
    }
    else if (!emailRegex.test(email.value)) {
        alert("email sai định dạng")
    }
    else if (!passRegex.test(pw.value)) {
        alert("mật khẩu cần ít nhất 6 kí tự ")
    }

})
window.location.href = "./sign-in.html"