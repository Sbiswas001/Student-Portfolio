// JavaScript for interactivity
        document.addEventListener('DOMContentLoaded', () => {
            // Typing effect
            const typedTextSpan = document.querySelector("#typed-text");
            const textArray = ["MERN Stack Developer", "Web Enthusiast", "Undergraduate"];
            const typingDelay = 100;
            const erasingDelay = 50;
            const newTextDelay = 2000; // Delay between current and next text
            let textArrayIndex = 0;
            let charIndex = 0;

            function type() {
                if (charIndex < textArray[textArrayIndex].length) {
                    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(type, typingDelay);
                } else {
                    setTimeout(erase, newTextDelay);
                }
            }

            function erase() {
                if (charIndex > 0) {
                    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(erase, erasingDelay);
                } else {
                    textArrayIndex++;
                    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                    setTimeout(type, typingDelay + 1100);
                }
            }
            
            if (textArray.length) setTimeout(type, newTextDelay + 250);

            // Scroll reveal animation
            const revealElements = document.querySelectorAll('.reveal');
            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                for (let i = 0; i < revealElements.length; i++) {
                    const elementTop = revealElements[i].getBoundingClientRect().top;
                    const elementVisible = 150; // Distance from bottom of viewport
                    if (elementTop < windowHeight - elementVisible) {
                        revealElements[i].classList.add('active');
                    } else {
                        // Optional: remove class to re-animate on scroll up
                        // revealElements[i].classList.remove('active');
                    }
                }
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Initial check
        });