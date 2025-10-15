gsap.registerPlugin(ScrollTrigger);

// Spotlight effect on name
const nameContainer = document.getElementById('nameContainer');
const spotlight = document.getElementById('spotlight');

nameContainer.addEventListener('mouseenter', () => {
    spotlight.style.opacity = '1';
});
nameContainer.addEventListener('mouseleave', () => {
    spotlight.style.opacity = '0';
});
nameContainer.addEventListener('mousemove', (e) => {
    const rect = nameContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlight.style.left = (x - 150) + 'px';
    spotlight.style.top = (y - 150) + 'px';
});

// Hero animations
gsap.from('.name', {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: 'power4.out'
});

gsap.to('.tagline', {
    duration: 1,
    opacity: 1,
    y: 0,
    delay: 0.5,
    ease: 'power2.out'
});

// ScrollTrigger animations for glass cards
const cards = document.querySelectorAll('.glass-card');

cards.forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: i * 0.1
    });
});

// Skill items stagger animation
gsap.from('.skill-item', {
    scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power2.out'
});

// Project items animation
gsap.from('.project-item', {
    scrollTrigger: {
        trigger: '#projects',
        start: 'top 70%'
    },
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power2.out'
});

// Form animation
gsap.from('.contact-form > *', {
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power2.out'
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (Demo version)');
});
