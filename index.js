let navbar = document.querySelector(".header .link-head");
let menu = document.querySelector("#menu")
menu.onclick = () => {
    menu.classList.toggle("fa")
    navbar.classList.toggle('active')
}

let cart = document.querySelector("#container")

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.add('active');
}
document.querySelector('#close-form').onclick = () => {
    cart.classList.remove('active')
}

const swipers = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    cnteredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

var swiper = new Swiper(".mySwiper", {

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

setTimeout(() => {
    AOS.init({
        duration: 2500,
        once: true,
    });
}, 2500);

lightGallery(document.querySelector('.gallery .gallery-container'))

const form = document.querySelector("form");
const msg = document.querySelector(".msg");
const nameInput = document.querySelector(".First-Name");
const Email = document.querySelector(".Email");
const phone = document.querySelector(".phone");
const address = document.querySelector(".address");
const users = document.querySelector(".users");
const button = document.querySelector(".button");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nameValue = nameInput.value;
    let emailValue = Email.value;
    let phoneValue = phone.value;
    let addressValue = address.value;
    if (nameValue == "" || emailValue == "" || phoneValue == "" || addressValue == "") {
        showMessage("please enter all values 🙄", "error");
        return;
    }
    usersList.innerHTML += `<li><b>${nameValue}</b> <a href="#">${emailValue}</a></li> 
<li><b>${addressValue}</b> <a href="#">${phoneValue}</a></li>`;
    address.value = "";
    phone.value = "";
    Email.value = "";
    nameInput.value = "";
    showMessage("All Done", "success");
});
function showMessage(message, erorrOrSuccess) {
    msg.innerHTML = message;
    msg.classList.add(erorrOrSuccess);
    setTimeout(() => {
        msg.classList.remove(erorrOrSuccess);
        msg.innerHTML = "";
    }, 1500);
}
