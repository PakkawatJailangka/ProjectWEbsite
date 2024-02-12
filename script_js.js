let menu = decument.querySelector('#menu-btn');
let navbar = decument.querySelector('.navbar');

// เปลี่ยน icon เมื่อกด
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () => {

    if (window.scrollY > 0) {
        decument.querySelector('.header').classList.add('active');
    } else {
        decument.querySelector('.header').classList.remove('active');
    }

    // กดกลับ
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload = () => {

    if (window.scrollY > 0) {
        decument.querySelector('.header').classList.add('active');
    } else {
        decument.querySelector('.header').classList.remove('active');
    }
}


