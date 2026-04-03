window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const fadeElements = document.querySelectorAll('.fade-in');

    // Artificial delay to simulate system initialization (1.5s)
    setTimeout(() => {
        // Fade out the loader
        loader.style.opacity = '0';

        setTimeout(() => {
            // Hide loader completely and show main content
            loader.style.display = 'none';
            mainContent.classList.remove('hidden');
            mainContent.style.opacity = '1';
            mainContent.style.transition = 'opacity 1.5s ease';
            
            // Trigger sequential fade-in for each section
            fadeElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('visible');
                }, index * 400); // 0.4s interval between elements
            });
        }, 1000);
    }, 1500);
});

/**
 * Sequential Entrance and Image Activation Controller
 */

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const heroImage = document.querySelector('.hero-image-container'); // Find the hero image
    const fadeElements = document.querySelectorAll('#main-content .fade-in:not(.hero-image-container)'); // Other faded elements

    // 1. Initialize for the entrance animation (Artificial system boot delay: 1.5s)
    setTimeout(() => {
        // Fade out the loader
        loader.style.opacity = '0';

        setTimeout(() => {
            // Hide loader and prepare content wrapper
            loader.style.display = 'none';
            mainContent.classList.remove('hidden');
            mainContent.style.opacity = '1';
            mainContent.style.transition = 'opacity 1s ease';
            
            // 2. TRIGGER SEQUENTIAL ENTRANCE
            
            // First: Activate Hero Image Container (Small, Faded -> Scale 1)
            setTimeout(() => {
                heroImage.classList.add('visible'); // Container scales up immediately
                
                // Second: The image inside the scaled container starts fading/color transition 
                // AFTER the container finishes scaling (approx. 1s). Controlled by CSS transition delay on .hero-photo
            }, 500); // 0.5s after loader disappears

            // Third: Sequential fade-in for other elements (Paragraphs, Timeline, etc.)
            fadeElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('visible');
                }, 1500 + index * 400); // Start 1.5s after loader disappears, with interval
            });
        }, 1000); // End of loader display logic
    }, 1500); // End of artificial delay
});