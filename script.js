/**
 * Unified System Initialization and Sequential Animation Controller
 */
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const heroImage = document.querySelector('.hero-image-container');
    const cards = document.querySelectorAll('.glass-card.fade-in');

    // 1. Artificial delay to simulate system initialization (1.5s)
    setTimeout(() => {
        // Fade out the loader
        loader.style.opacity = '0';

        setTimeout(() => {
            // Hide loader completely and show main container
            loader.style.display = 'none';
            mainContent.classList.remove('hidden');
            mainContent.style.opacity = '1';
            mainContent.style.transition = 'opacity 1s ease';
            
            // 2. Trigger Hero Image Entrance (Scale up + Scanning mode)
            setTimeout(() => {
                if (heroImage) {
                    heroImage.classList.add('visible');
                }
            }, 300);

            // 3. Trigger sequential fade-in for each glass-card section
            // Starting after the hero image begins its transition
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, 1200 + (index * 400)); // Staggered delay for content
            });
        }, 1000);
    }, 1500);
});