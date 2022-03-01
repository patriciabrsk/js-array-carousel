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
    <img src="${items[i]}" class="img-fluid" alt="${title[i]}">
    <div class="text-box">
        <h2 id="title text-white">${title[i]}</h2>
        <p id="lorem text-white">${text[i]}</p>
    </div>`;

    carouselContent += `
    <div class="img-wrapper">
        <img src="${items[i]}" class="img-fluid" alt="${title[i]}">
    </div>`;

}
console.log(carouselContent);

verticalCarousel.innerHTML = carouselContent;
mainImage.innerHTML += mainImageContent;

let currentIndex = 0;

document.querySelector('.img-wrapper').classList.add('active');



document.querySelector(".arrouw-up").addEventListener("click", function() {});



document.querySelector(".arrouw-down").addEventListener("click", function() {});
