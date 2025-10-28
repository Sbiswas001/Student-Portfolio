// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        gsap.to(spans[0], { rotation: 45, y: 10, duration: 0.3 });
        gsap.to(spans[1], { opacity: 0, duration: 0.3 });
        gsap.to(spans[2], { rotation: -45, y: -10, duration: 0.3 });
    } else {
        gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(spans[1], { opacity: 1, duration: 0.3 });
        gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
    }
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(spans[1], { opacity: 1, duration: 0.3 });
        gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
    });
});

// Hero Section Animation
gsap.from('.hero-content', {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: 'power3.out'
});

gsap.from('.hero-accent', {
    duration: 1.5,
    opacity: 0,
    scale: 0,
    ease: 'back.out'
});

// Floating animation for hero accent
gsap.to('.hero-accent', {
    duration: 4,
    y: 30,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

// Section Title Animation
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        opacity: 0,
        x: -50,
        ease: 'power3.out'
    });
});

// About Highlights Animation
gsap.utils.toArray('.highlight-item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        duration: 0.6,
        opacity: 0,
        y: 30,
        delay: index * 0.1,
        ease: 'power3.out'
    });
});

// Skill Category Animation
gsap.utils.toArray('.skill-category').forEach((category, index) => {
    gsap.from(category, {
        scrollTrigger: {
            trigger: category,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        duration: 0.6,
        opacity: 0,
        y: 30,
        delay: index * 0.1,
        ease: 'power3.out'
    });
});

// Timeline Item Animation
gsap.utils.toArray('.timeline-item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        duration: 0.6,
        opacity: 0,
        x: -30,
        delay: index * 0.1,
        ease: 'power3.out'
    });
});

// Project Card Animation
gsap.utils.toArray('.project-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        duration: 0.6,
        opacity: 0,
        y: 40,
        delay: index * 0.1,
        ease: 'power3.out'
    });
});

// Contact Link Animation
gsap.utils.toArray('.contact-link').forEach((link, index) => {
    gsap.from(link, {
        scrollTrigger: {
            trigger: link,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        duration: 0.6,
        opacity: 0,
        y: 30,
        delay: index * 0.1,
        ease: 'power3.out'
    });
});

// Smooth scroll animation for CTA button
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    gsap.to(window, {
        duration: 1,
        scrollTo: target,
        ease: 'power3.inOut'
    });
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.borderBottomColor = 'rgba(255, 0, 0, 0.3)';
    } else {
        navbar.style.borderBottomColor = 'rgba(51, 51, 51, 1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Parallax effect on hero section
gsap.to('.hero-accent', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: 200,
    opacity: 0.05
});

// Add stagger animation on page load
window.addEventListener('load', () => {
    gsap.from('nav', {
        duration: 0.8,
        opacity: 0,
        y: -20,
        ease: 'power3.out'
    });
});