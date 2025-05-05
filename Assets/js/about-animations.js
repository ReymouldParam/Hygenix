document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Function to add animation classes
    function addAnimationClasses() {
        const sections = document.querySelectorAll('.our-story-section, .vision-mission-section');
        
        sections.forEach(section => {
            if (isInViewport(section)) {
                // Add fade-in animation to the section
                section.classList.add('animate-fade-in');
                
                // Add slide-up animation to text elements
                const textElements = section.querySelectorAll('.our-story-text, .vision-mission-text');
                textElements.forEach(text => {
                    text.classList.add('animate-slide-up');
                });
                
                // Add slide animations to images
                const images = section.querySelectorAll('.our-story-image, .vision-mission-image');
                images.forEach((image, index) => {
                    if (index % 2 === 0) {
                        image.classList.add('animate-slide-left');
                    } else {
                        image.classList.add('animate-slide-right');
                    }
                });
            }
        });
    }

    // Initial check
    addAnimationClasses();

    // Check on scroll
    window.addEventListener('scroll', function() {
        addAnimationClasses();
    });
}); 