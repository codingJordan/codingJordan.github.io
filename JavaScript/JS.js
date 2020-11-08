/*

Website Version v4.0

Made by @J0AXY on Twitter!

https://joaxy.github.io
https://github.com/Joaxy
https://twitter.com/J0AXY
https://instagram.com/J0AXY

*/

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
        }
    });
    burger.classList.toggle('toggle');
});
}
navSlide();