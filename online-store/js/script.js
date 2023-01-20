// -----------------------------------------Header------------------------------

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};


let shoppingcart = document.querySelector('.shopping-cart');
document.querySelector('#shop-btn').onclick = () =>{
    shoppingcart.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};



let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
     loginForm.classList.toggle('active');
     navbar.classList.remove('active');
     searchForm.classList.remove('active');
     shoppingcart.classList.remove('active');
};


let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginForm.classList.remove('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginForm.classList.remove('active');
};


var swiper = new Swiper(".product-slider", {
    loop: true,
    grabeCursor : true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});



var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabeCursor : true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});