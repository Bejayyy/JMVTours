let currentIndex = 0;
const images = document.querySelectorAll('.landing-page img');
const totalImages = images.length;

// Function to show the next image
function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
}

// Display the first image immediately
images[currentIndex].classList.add('active');

// Start the slideshow after a brief delay
setTimeout(() => {
    setInterval(showNextImage, 3000); // Change image every 3 seconds
}, 100); // Delay to ensure the first image is shown before starting the interval

// Offer phone slideshow
let currentPhoneIndex = 0;
const phoneImages = document.querySelectorAll('.offer .phone img');
const totalPhoneImages = phoneImages.length;

function showNextPhoneImage() {
    phoneImages[currentPhoneIndex].classList.remove('active');
    currentPhoneIndex = (currentPhoneIndex + 1) % totalPhoneImages;
    phoneImages[currentPhoneIndex].classList.add('active');
}

// Display the first phone image immediately
phoneImages[currentPhoneIndex].classList.add('active');

// Start the phone slideshow after a brief delay
setTimeout(() => {
    setInterval(showNextPhoneImage, 3000); // Change image every 3 seconds
}, 100); // Delay to ensure the first image is shown before starting the interval

 // Scroll event for car animation
 const carElement = document.querySelector('.offer .car img');
 window.addEventListener('scroll', () => {
     const carPosition = carElement.getBoundingClientRect().top;
     const screenPosition = window.innerHeight / 1.5;

     if (carPosition < screenPosition) {
         carElement.style.transform = 'scale(1.5)'; // Increase scale as it comes into view
     } else {
         carElement.style.transform = 'scale(1)'; // Reset scale if scrolled past
     }
 });

 document.addEventListener('DOMContentLoaded', function() {
    const readMoreButton = document.querySelector('.read-more');
    const offerContainer = document.querySelector('.offer .container');
    const firstPage = document.querySelector('.first-page');
    const secondPage = document.querySelector('.second-page');

    readMoreButton.addEventListener('click', function() {
        secondPage.style.display = 'block'; // Display the second page
        setTimeout(() => {
            offerContainer.classList.add('show-second-page');
        }, 50); // Delay to ensure display change is processed
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const readMoreButton = document.querySelector('.read-more');
    const backButton = document.querySelector('.back-button');
    const offerContainer = document.querySelector('.offer .container');
    const firstPage = document.querySelector('.first-page');
    const secondPage = document.querySelector('.second-page');

    readMoreButton.addEventListener('click', function() {
        secondPage.style.display = 'block'; // Display the second page
        setTimeout(() => {
            offerContainer.classList.add('show-second-page');
        }, 50); // Delay to ensure display change is processed
    });

    backButton.addEventListener('click', function() {
        offerContainer.classList.remove('show-second-page');
        setTimeout(() => {
            secondPage.style.display = 'none'; // Hide the second page after transition
        }, 1000); // Match this delay with the transition duration
    });
});

//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}