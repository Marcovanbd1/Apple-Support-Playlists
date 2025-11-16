// Scroll-triggered fade-in animations
// Apple-style smooth reveal on scroll

document.addEventListener('DOMContentLoaded', function() {
    // Simple scroll-based animation
    function checkFadeIn() {
        const fadeElements = document.querySelectorAll('.fade-in:not(.visible)');
        
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            // Element is visible if its top is within viewport
            if (rect.top <= windowHeight * 0.85) {
                el.classList.add('visible');
            }
        });
    }
    
    // Check on page load
    checkFadeIn();
    
    // Check on scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(checkFadeIn);
    });
    
    // Optional: Add smooth scroll behavior to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
