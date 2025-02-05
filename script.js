// Parallax effect for HealChain logo
/*const parallaxContent = document.querySelector('.parallax-content');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    let opacityValue = 1 - scrollPosition / 500;  // Adjust scroll speed
    let scaleValue = 1 + scrollPosition / 1000;   // Adjust logo size on scroll
    
    parallaxContent.style.opacity = opacityValue;
    logo.style.transform = `scale(${scaleValue})`;
});
*/
/*document.addEventListener('DOMContentLoaded', function () {
    const langBtn = document.getElementById('lang-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Toggle dropdown on button click
    langBtn.addEventListener('click', function () {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        dropdownMenu.style.display = isExpanded ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!langBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            langBtn.setAttribute('aria-expanded', 'false');
            dropdownMenu.style.display = 'none';
        }
    });
});
window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight / 2) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  });*/
  window.addEventListener('scroll', function() {
    const logo = document.getElementById('logo');
    const imageSection = document.getElementById('image-section');
    
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
    
    // Trigger image section animation after scrolling
    if (window.scrollY > 100) {
        imageSection.classList.add('scrolled');
    } else {
        imageSection.classList.remove('scrolled');
    }
});

gsap.from("h1", { opacity: 0, y: -50, duration: 1.5 });
gsap.from("button", { opacity: 0, scale: 0.8, duration: 1, delay: 0.5 });

