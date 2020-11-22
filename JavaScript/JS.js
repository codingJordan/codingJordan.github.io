/*

Website Version v4.5

Made by @jordanCoding on Twitter!

https://codingJordan.github.io
https://github.com/codingJordan
https://twitter.com/jordanCoding
https://www.youtube.com/channel/UCpBrGERV1KaIGjsQPz8z2Wg

*/

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    burger.addEventListener('click', () => {
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

const body = document.querySelector("body");

const tl = new TimelineMax();

tl.fromTo(body, 1, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut })