
export const navSlide = (e) => {
    const burger = document.getElementsByClassName('burger-desktop')[0];
    burger.classList?.toggle('toggle');

    const navLink = document.getElementsByClassName('nav-links-desktop')[0];
    navLink.classList.toggle('nav-active');

    const NavLinksLI = document.querySelectorAll('.nav-links-desktop li');
    NavLinksLI.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + index}s`
    });

};