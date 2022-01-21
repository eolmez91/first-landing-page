/* RESPONSIVE NAV MENU */

const navMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const nav = document.querySelector('.nav-list');

    navbarToggler.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navbarToggler.classList.toggle('toggle');
    })
}

navMenu();

/* SERVICES SLIDER */

const serviceChange = () => {
    let firstChild, lastChild;
    const arrowLeft = document.querySelector('#arrow-left');
    const arrowRight = document.querySelector('#arrow-right');
    const servicesAll = document.querySelector('#services-slider')

    document.addEventListener('click', () => {
        if (event.target === arrowLeft) {
            lastChild = servicesAll.lastElementChild;
            servicesAll.insertAdjacentElement('afterbegin', lastChild)
            } else if (event.target === arrowRight) {
                firstChild = servicesAll.firstElementChild;
                servicesAll.insertAdjacentElement('beforeend', firstChild)
            }
    })
}

serviceChange()

/* SCROLLREVEAL Js */

ScrollReveal().reveal('.scrl-left', {
    origin: 'left',
    distance: '10rem', 
    duration: 1000, 
    easing: 'ease-in'
});

ScrollReveal().reveal('.scrl-right', {
    origin: 'right',
    distance: '10rem', 
    duration: 1000, 
    easing: 'ease-in'
});

ScrollReveal().reveal('.scrl-bottom', {
    origin: 'bottom',
    distance: '10rem',
    duration: 1000,
    easing: 'ease-in'
})

ScrollReveal().reveal('.scrl-fade-up', {
    opacity: 0,
    easing: 'ease-in'
})

ScrollReveal().reveal('.scrl-delay', {
    delay: 500
})

ScrollReveal().reveal('.scrl-delay-2', {
    delay: 1000
})