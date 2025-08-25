// Smooth cinematic parallax + zoom (Optimized)
        const parallaxBg = document.querySelector('.parallax-bg');
        let latestScroll = 0;
        let ticking = false;

        function updateParallax() {
            const offset = latestScroll * 0.4;
            const zoom = 1 + latestScroll * 0.0003;
            parallaxBg.style.transform = `translateY(${offset}px) scale(${zoom})`;
            ticking = false;
        }

        function onScroll() {
            latestScroll = window.scrollY;
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }

        window.addEventListener('scroll', onScroll);
        onScroll(); // Initial call

        // Fully automated "View More" functionality
        document.addEventListener('DOMContentLoaded', () => {
            const visibleCount = 3; // Number of items to show before hiding

            document.querySelectorAll('.menu-items').forEach(grid => {
                const allItems = Array.from(grid.querySelectorAll('.menu-item'));

                if (allItems.length > visibleCount) {
                    // Create hidden items container
                    const hiddenItemsContainer = document.createElement('div');
                    hiddenItemsContainer.classList.add('hidden-items');

                    // Move extra items into hidden container
                    const extras = allItems.slice(visibleCount);
                    extras.forEach(item => hiddenItemsContainer.appendChild(item));

                    // Hide extras initially
                    hiddenItemsContainer.style.display = 'none';
                    grid.appendChild(hiddenItemsContainer);

                    // Create View More button
                    const buttonContainer = document.createElement('div');
                    buttonContainer.classList.add('view-more-container');
                    const button = document.createElement('button');
                    button.classList.add('btn-view-more');
                    button.textContent = 'View More';
                    buttonContainer.appendChild(button);
                    grid.appendChild(buttonContainer);

                    // Add click toggle
                    button.addEventListener('click', function () {
                        const isExpanded = hiddenItemsContainer.style.display === 'contents';
                        hiddenItemsContainer.style.display = isExpanded ? 'none' : 'contents';
                        this.textContent = isExpanded ? 'View More' : 'View Less';
                    });
                }
            });
        });
        // Back to Home button
const backToHomeBtn = document.getElementById("backToHome");

window.addEventListener("scroll", () => {
    backToHomeBtn.classList.add("show");
});

backToHomeBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
backToHomeBtn.addEventListener("click", () => {
  window.location.href = "../index.html";  // or any page you want
});
