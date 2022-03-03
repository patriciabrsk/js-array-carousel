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
const verticalCarousel = document.getElementById('vertical-carousel');

let mainImageContent = '';
let verticalContent = '';

for (let i = 0; i < items.length; i++) {
    
    mainImageContent += `
    <div class="main-img">
        <img src="${items[i]}" class="img-fluid" alt="${title[i]}">
        <div class="text-box position-absolute">
            <h2 class="text-white text-end">${title[i]}</h2>
            <p class="text-white text-end">${text[i]}</p>
        </div>
    </div>`;
    
    verticalContent += `
    <div class="img-wrapper">
        <img src="${items[i]}" class="img-fluid" alt="${title[i]}">
    </div>`;

}

mainImage.innerHTML = mainImageContent;
verticalCarousel.innerHTML += verticalContent;

let currentIndex = 0;
// console.log(document.getElementsByClassName('main-img'));
document.getElementsByClassName('main-img')[currentIndex].classList.add('active');
document.getElementsByClassName('img-wrapper')[currentIndex].classList.add('active');

const arrowUp = document.querySelector('.arrow-up');

arrowUp.addEventListener("click", 
    function() {
        document.getElementsByClassName('main-img')[currentIndex].classList.remove('active');
        document.getElementsByClassName('img-wrapper')[currentIndex].classList.remove('active');

        if (currentIndex == 0) {
            currentIndex = items.length - 1;
        } else {
            currentIndex--;
        }
        document.getElementsByClassName('main-img')[currentIndex].classList.add('active');
        document.getElementsByClassName('img-wrapper')[currentIndex].classList.add('active');
    }
);

const arrowDown = document.querySelector('.arrow-down');

arrowDown.addEventListener("click", 
    function() {
        document.getElementsByClassName('main-img')[currentIndex].classList.remove('active');
        document.getElementsByClassName('img-wrapper')[currentIndex].classList.remove('active');

        if (currentIndex == items.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        document.getElementsByClassName('main-img')[currentIndex].classList.add('active');
        document.getElementsByClassName('img-wrapper')[currentIndex].classList.add('active');
    }
);