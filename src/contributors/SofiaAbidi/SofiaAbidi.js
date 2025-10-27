// Email button functionality - copy to clipboard
const emailBtn = document.getElementById('emailBtn');
const email = 'sofiaabidi2005@gmail.com';

emailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(email).then(() => {
        const originalText = emailBtn.innerHTML;
        emailBtn.innerHTML = '<span>✓</span> Copied!';
        emailBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

        setTimeout(() => {
            emailBtn.innerHTML = originalText;
            emailBtn.style.background = 'linear-gradient(135deg, #8b5cf6, #ec4899)';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy email:', err);
        // Fallback: open mailto link
        window.location.href = `mailto:${email}`;
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active nav links on scroll
window.addEventListener('scroll', () => {
    let current = 'home';
    const sections = document.querySelectorAll('section');
    const navHeight = document.querySelector('nav').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check on page load