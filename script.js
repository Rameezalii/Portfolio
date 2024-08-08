document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.contact-content h1, form div, form button');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});


document.addEventListener('DOMContentLoaded', () => {
const sections = document.querySelectorAll('section');

function checkSectionInView() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

checkSectionInView(); // Check on load
window.addEventListener('scroll', checkSectionInView); // Check on scroll
});
document.addEventListener('DOMContentLoaded', () => {
// Scroll to the home section on page load
window.scrollTo({
top: 0,
behavior: 'smooth'
});

const sections = document.querySelectorAll('section');

function checkSectionInView() {
sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
        section.classList.add('active');
    } else {
        section.classList.remove('active');
    }
});
}

checkSectionInView(); // Check on load
window.addEventListener('scroll', checkSectionInView); // Check on scroll
});



document.querySelector('.menu-button').addEventListener('click', () => {
    document.querySelector('.sidebar-menu').classList.toggle('active');
});
