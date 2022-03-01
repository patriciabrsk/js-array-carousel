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

const mainImage = document.getElementById('image-box');
const titleHTML = document.getElementById('title');
const lorem = document.getElementById('lorem');

// let carouselContent = '';

let currentIndex = 0;

for (let i = 0; i < items.length; i++) {
    // const carouselImage = document.createElement("div");
    // carouselImage.classList.add('.carousel-image', ) + i;
    carouselContent += `
    <div class="img-wrapper">
        <img src="${items[i]}" class="img-fluid">
    </div>`;
}

const varticalCarousel = document.getElementById('varticalCarousel');
varticalCarousel.innerHTML = carouselContent;

