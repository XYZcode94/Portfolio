// Add this script to enable the animation
document.querySelectorAll('section a.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function () {
        this.classList.remove('animate-out');
        this.classList.add('animate-in');
    });
    btn.addEventListener('mouseleave', function () {
        this.classList.remove('animate-in');
        this.classList.add('animate-out');
        // Remove animate-out after animation ends
        this.addEventListener('animationend', function handler(e) {
            if (e.animationName === 'slideOut') {
                btn.classList.remove('animate-out');
                btn.removeEventListener('animationend', handler);
            }
        });
    });
});


// Animate the description text
// Description animation
// Ensure the description text changes every 2 seconds      
// and animates in and out smoothly
const descriptions = [
    "a Developer",
    "a Designer",
    "a Photographer",
    "an Editor"
];
let descIndex = 0;
const descElem = document.getElementById('animated-desc');

function animateDescChange() {
    descElem.classList.remove('desc-animate-in');
    descElem.classList.add('desc-animate-out');
    setTimeout(() => {
        descElem.textContent = descriptions[descIndex];
        descElem.classList.remove('desc-animate-out');
        descElem.classList.add('desc-animate-in');
        descIndex = (descIndex + 1) % descriptions.length;
    }, 400); // match animation duration
}

// Initial text and animation
descElem.textContent = descriptions[0];
descElem.classList.add('desc-animate-in');
setInterval(animateDescChange, 2000);

//add click event to show the nav ul
document.querySelector(".hamburger").addEventListener('click', function () {
    const navUl = document.querySelector('#nav-links');
    const hamburgerBars = document.querySelectorAll('.bar');
    // Toggle the 'show' class to show/hide the nav ul  
    navUl.classList.toggle('show');
    // Toggle the 'hide' class to animate the hamburger icon
    hamburgerBars.forEach(bar => bar.classList.toggle('hide'));
    // Optionally, toggle the icon for the hamburger button itself
    // Example: swap between hamburger and xmark icon
    const hamburgerBtn = document.querySelector('.hamburger');
    if (navUl.classList.contains('show')) {
        hamburgerBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        hamburgerBtn.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
    }
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Open a specific page when a card with a specific id is clicked
const cardLinks = {
    "web-development": "assest/pages/web-devlopment.html",
    "mobile-development": "assest/pages/mobile-development.html",
    "ui-ux-design": "assest/pages/ui-ux-design.html",
    "database-management": "assest/pages/database-management.html",
    "ai-ml": "assest/pages/ai-ml.html",
    "video-editing": "assest/pages/video-editing.html"
};

Object.keys(cardLinks).forEach(id => {
    const card = document.getElementById(id);
    if (card) {
        card.addEventListener('click', function () {
            window.open(cardLinks[id], '_blank'); // opens in a new tab
        });
    }
});


