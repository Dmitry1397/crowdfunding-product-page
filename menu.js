const nav = document.querySelector('nav');
const menuBtn = document.querySelector('#hamburger');

menuBtn.addEventListener('click', () => {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
        menuBtn.className = 'open';
        document.body.style.overflow = 'unset';
    } else {
        nav.style.display = 'block';
        menuBtn.className = 'close';
        document.body.style.overflow = 'hidden';
    }
})
