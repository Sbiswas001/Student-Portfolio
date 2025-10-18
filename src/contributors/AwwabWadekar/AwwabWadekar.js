let index = 0;

        function showSlide() {
            const slider = document.querySelector('.slider');
            const slides = document.querySelectorAll('.slide');
            if (index >= slides.length) {
                index = 0;
            } else if (index < 0) {
                index = slides.length - 1;
            }
            slider.style.transform = `translateX(${-index * 100}%)`;
        }

        function nextSlide() {
            index++;
            showSlide();
        }

        function prevSlide() {
            index--;
            showSlide();
        }

        // Auto slide every 3 seconds
        setInterval(() => {
            index++;
            showSlide();
        }, 5000);