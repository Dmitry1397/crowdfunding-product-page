const htmlElement = document.documentElement;
const x = window.innerWidth;

const openModal = document.querySelector('#back-project');
const closeModal = document.querySelector('#back-close');
const modalWindow = document.querySelector('.modal');
const backModal = document.querySelector('.back-modal');
const successModal = document.querySelector('.success');
const gotIt = document.querySelector('#got-it');

const radioBtns = document.querySelectorAll('.radio');
const pledges = document.querySelectorAll('.your-pledge');

const amount = document.querySelector('#amount #current');
const quantityPara = document.querySelector('#quantity #current');
const progress = document.querySelector('#progress');
const supportBtns = document.querySelectorAll('#support');

const bookmark = document.querySelector('#bookmark');

let donation;
let current = 89914;
let goal = 100000;
let quantity = 5007;
let term = 57;
let bambooLeft = 101;
let blackEditionLeft = 64;
let mahoganyLeft = 0;

modalWindow.style.height = `${htmlElement.scrollHeight}px`;

openModal.addEventListener('click', () => {
    modalWindow.style.display = 'block'
    backModal.style.display = 'block';
    successModal.style.display = 'none';
    radioBtns.forEach(element => {
        element.checked = false;
        element.parentElement.parentElement.id = '';
    })
    pledges.forEach(element => {
        element.style.display = 'none';
    })

});
closeModal.addEventListener('click', () => modalWindow.style.display = 'none');

gotIt.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    amount.textContent = `$${toString(current)}`;
    quantityPara.textContent = `${toString(quantity)}`;
    progress.style.width = `${(current * 100) / goal}%`;
});

radioBtns.forEach(element => {
    element.addEventListener('change', () => {
        pledges.forEach(pledge => {
            if (pledge.id === element.id) {
                if (x < 800) {
                    pledge.style.display = 'block';
                } else {
                    pledge.style.display = 'flex';
                }
            }
        })
        element.parentElement.parentElement.id = 'chosen';
    })
})

supportBtns.forEach(element => {
    element.addEventListener('click', () => {
        donation = element.previousElementSibling.value;
        if(element.parentNode.id !== 'charity') {
            quantity++;
            let id = element.parentNode.id;
            let query = `#${id} .left`;
            let lefts = document.querySelectorAll(query);
            lefts.forEach(element => {
                let q = element.textContent.split('left');
                element.textContent = parseInt(q[0] - 1);
                const span = document.createElement('span');
                span.textContent = 'left';
                element.appendChild(span);
            })
        }
        current += parseInt(donation);
        backModal.style.display = 'none';
        successModal.style.display = 'block';
        element.previousElementSibling.value = '';
    })
})

bookmark.addEventListener('click', () => {
    if (bookmark.className === 'bookmark') {
        bookmark.className = 'bookmarked';
        bookmark.textContent = 'Bookmarked';
    } else {
        bookmark.className = 'bookmark';
        bookmark.textContent = 'Bookmark';
    }
})

function toString(number) {
    let str = String(number);
    if (str.length < 5) {
        let a = str.slice(0, 1);
        let b = str.slice(1);
        str = a + ',' + b;
    } else if (str.length < 6) {
        let a = str.slice(0, 2);
        let b = str.slice(2);
        str = a + ',' + b;
    } else {
        let a = str.slice(0, 3);
        let b = str.slice(3);
        str = a + ',' + b;
    }
    return str;
}

function toInt(str) {
    return parseInt(str.split(',').join(''));
}