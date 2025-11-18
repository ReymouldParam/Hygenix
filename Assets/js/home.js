document.addEventListener('DOMContentLoaded', () => {

    // Navbar web navigated
    const navItems = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.replace(/\/$/, '');
    navItems.forEach(item => {
        const itemPath = new URL(item.href).pathname.replace(/\/$/, '');
        if (currentPath.endsWith(itemPath)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // NavbaR Mobile 
    const toggleBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggleBtn.classList.toggle('active');
    });

    // Scroll animation
    window.addEventListener('scroll', function () {
        const heroSection = document.querySelector('.hero-section');
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let triggerPoint = window.innerHeight * 0.2;

        if (scrollTop > triggerPoint) {
            let maxScroll = window.innerHeight;
            let opacity = 1 - ((scrollTop - triggerPoint) / (maxScroll - triggerPoint));
            heroSection.style.opacity = Math.max(opacity, 0.3);
        } else {
            heroSection.style.opacity = 1;
        }
    });

    // About section fade animation
    const images = document.querySelectorAll('.carousel-img');
    let currentIndex = 0;

    if (images.length > 0) {
        setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, 3000);
    }

    // Vegetable carousel
    const carouselTrack = document.getElementById('carousel-track');
    let interval;
    let vegetableCarouselIndex = 0;

    const vegetableImages = {
        tomato: ['Assets/images/content-img1.png', 'Assets/images/content-img2.png', 'Assets/images/life-cycle-4.png'],
        redchilli: ['Assets/images/content-img1.png', 'Assets/images/content-img2.png', 'Assets/images/life-cycle-4.png'],
        capsicum: ['Assets/images/content-img1.png', 'Assets/images/content-img2.png', 'Assets/images/life-cycle-4.png'],
        watermelon: ['Assets/images/content-img1.png', 'Assets/images/content-img2.png', 'Assets/images/life-cycle-4.png'],
        okra: ['Assets/images/content-img1.png', 'Assets/images/content-img2.png', 'Assets/images/life-cycle-4.png']
    };

    function loadCarousel(images) {
        if (!carouselTrack) return; // prevent crash
        carouselTrack.innerHTML = '';
        carouselTrack.style.transform = 'translateX(0)';
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            carouselTrack.appendChild(img);
        });
    }

    function startCarousel(images) {
        if (!carouselTrack) return; // prevent crash
        loadCarousel(images);
        vegetableCarouselIndex = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            vegetableCarouselIndex = (vegetableCarouselIndex + 1) % images.length;
            carouselTrack.style.transform = `translateX(-${vegetableCarouselIndex * 100}%)`;
        }, 3000);
    }

    startCarousel(vegetableImages.tomato);

    const cards = document.querySelectorAll('.vegetable-card');
    const defaultCard = document.querySelector('.vegetable-card[data-veg="tomato"]');

    if (defaultCard) defaultCard.classList.add('active');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const vegType = card.getAttribute('data-veg');
            startCarousel(vegetableImages[vegType]);

            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

});
