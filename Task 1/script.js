let menu = document.querySelector('#icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
menu.classList.toggle('icon');
navbar.classList.toggle('open');
}

const sr= ScrollReveal({
    distance:'40px',
    duration:2500,
    reset:true
})

sr.reveal('.logo',{delay:200,origin:'left'});
sr.reveal('.navbar',{delay:400,origin:'top'});
sr.reveal('.menu_btn',{delay:520,origin:'right'});

sr.reveal('.home_text span',{delay:600,origin:'top'});
sr.reveal('.home_text h1',{delay:680,origin:'left'});
sr.reveal('.home_text p',{delay:750,origin:'right'});

sr.reveal('.share',{delay:950,origin:'bottom'});

sr.reveal('.home_img',{delay:1000,origin:'bottom'});