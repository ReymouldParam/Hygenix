// Navbar web navigated
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.replace(/\/$/, ''); // remove trailing slash

    navItems.forEach(item => {
        const itemPath = new URL(item.href).pathname.replace(/\/$/, '');

        if (currentPath.endsWith(itemPath)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});


// Navbar mobile
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll animation for the entire section
window.addEventListener('scroll', function () {
    const heroSection = document.querySelector('.hero-section');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let triggerPoint = window.innerHeight * 0.2; // Start fading after scrolling 20% of screen

    if (scrollTop > triggerPoint) {
        let maxScroll = window.innerHeight;
        let opacity = 1 - ((scrollTop - triggerPoint) / (maxScroll - triggerPoint));
        heroSection.style.opacity = Math.max(opacity, 0.3); // minimum opacity 0.3
    } else {
        heroSection.style.opacity = 1; // Fully visible initially
    }
});
// about section fade animation
const images = document.querySelectorAll('.carousel-img');
let currentIndex = 0;

setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}, 3000); // Change every 3 seconds


// section 3 vegitables carousel
const carouselTrack = document.getElementById('carousel-track');
let interval;
let vegetableCarouselIndex = 0;

// Vegetable images
const vegetableImages = {
    tomato: ['Assets/images/content-img1.png', 'Assets/images/content-img2.png', 'Assets/images/life-cycle-4.png'],
    redchilli: ['Assets/images/content-img1.png', 'Assets/images/content-img2.png', 'Assets/images/life-cycle-4.png'],
    capsicum: ['Assets/images/content-img1.png', 'Assets/images/content-img2.png', 'Assets/images/life-cycle-4.png'],
    watermelon: ['Assets/images/content-img1.png', 'Assets/images/content-img2.png', 'Assets/images/life-cycle-4.png'],
    okra: ['Assets/images/content-img1.png', 'Assets/images/content-img2.png', 'Assets/images/life-cycle-4.png']
};

function loadCarousel(images) {
    carouselTrack.innerHTML = '';
    carouselTrack.style.transform = 'translateX(0)';
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        carouselTrack.appendChild(img);
    });
}

function startCarousel(images) {
    loadCarousel(images);
    vegetableCarouselIndex = 0;
    clearInterval(interval);

    interval = setInterval(() => {
        vegetableCarouselIndex = (vegetableCarouselIndex + 1) % images.length;
        carouselTrack.style.transform = `translateX(-${vegetableCarouselIndex * 100}%)`;
    }, 3000);
}

// Initialize with tomato images
startCarousel(vegetableImages.tomato);

// Vegetable card click event
const cards = document.querySelectorAll('.vegetable-card');

// By default, highlight the "tomato" card on load
document.querySelector('.vegetable-card[data-veg="tomato"]').classList.add('active');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const vegType = card.getAttribute('data-veg');
        startCarousel(vegetableImages[vegType]);

        // Remove 'active' from all cards
        cards.forEach(c => c.classList.remove('active'));

        // Add 'active' to the clicked card
        card.classList.add('active');
    });
});

