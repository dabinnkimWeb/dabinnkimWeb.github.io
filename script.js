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