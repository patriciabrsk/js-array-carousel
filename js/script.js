const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const verticalCarousel = document.getElementById('vertical-carousel');
const mainImage = document.getElementById('image-box');
const titleHTML = document.getElementById('title');
const lorem = document.getElementById('lorem');

let mainImageContent = '';
let carouselContent = '';

for (let i = 0; i < items.length; i++) {
    
    mainImageContent += `
    <div class="main-img d-none">
        <img src="${items[i]}" class="img-fluid" alt="${title[i]}">
        <div class="text-box position-absolute">
            <h2 id="title" class="text-white text-end">${title[i]}</h2>
            <p id="lorem" class="text-white text-end">${text[i]}</p>
        </div>
    </div>`;
    
    carouselContent += `
    <div class="img-wrapper d-none">
        <img src="${items[i]}" class="img-fluid" alt="${title[i]}">
    </div>`;

}
// console.log(carouselContent);

mainImage.innerHTML = mainImageContent;
verticalCarousel.innerHTML += carouselContent;

document.querySelector('.img-wrapper').classList.add('active');

const arrowDown = document.querySelector('.arrow-down');
let currentIndex = 0;

arrowDown.addEventListener("click", 
    function() {
        document.querySelector('.main-img').classList.remove('active');
        document.querySelector('.img-wrapper').classList.remove('active');

        currentIndex++;

        if (currentIndex == items.length) {
            currentIndex = 0;
        }
        document.getElementsByClassName('main-img')[currentIndex].classList.add('active');
        document.getElementsByClassName('img-wrapper')[currentIndex].classList.add('active');
    }
);

const arrowUp = document.querySelector('.arrow-up');

arrowUp.addEventListener("click", 
    function() {
        document.querySelector('.main-img').classList.remove('active');
        document.querySelector('.img-wrapper').classList.remove('active');

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = items.length - 1;
        }
        document.getElementsByClassName('main-img')[currentIndex].classList.add('active');
        document.getElementsByClassName('img-wrapper')[currentIndex].classList.add('active');
    }
);
