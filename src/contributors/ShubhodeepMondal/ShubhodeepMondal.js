// ShubhodeepMondal.js - Complete Portfolio Functionality

// Global State
let isLoaded = false;
let menuOpen = false;
let currentTypewriterIndex = 0;
let typewriterNameStarted = false;

// Utility Functions
function smoothScrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Adjust based on navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

// Loading Screen Functionality
function initLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");
  const typewriterLoading = document.getElementById("typewriter-loading");

  const fullText = "<Hello World / >";
  let index = 0;

  const typeInterval = setInterval(() => {
    typewriterLoading.textContent = fullText.substring(0, index);
    index++;

    if (index > fullText.length) {
      clearInterval(typeInterval);

      setTimeout(() => {
        loadingScreen.style.display = "none";
        mainContent.classList.add("loaded");
        isLoaded = true;

        // Start name typewriter after additional delay
        setTimeout(() => {
          typewriterNameStarted = true;
          startNameTypewriter();
        }, 1500);
      }, 1000);
    }
  }, 100);
}

// Typewriter Effect for Name
function startNameTypewriter() {
  const typewriterName = document.getElementById("typewriter-name");
  const fullName = "Shubhodeep";
  let index = 0;

  const nameInterval = setInterval(() => {
    typewriterName.textContent = fullName.substring(0, index);
    index++;

    if (index > fullName.length) {
      clearInterval(nameInterval);
    }
  }, 200);
}

// Reveal on Scroll Animation
class RevealOnScroll {
  constructor() {
    this.elements = document.querySelectorAll(".reveal");
    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    });

    this.elements.forEach((el) => this.observer.observe(el));
  }

  handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }
}

// Navigation Functionality
function initNavigation() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll("[data-section]");

  // Mobile menu toggle
  mobileMenuToggle.addEventListener("click", () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle("open", menuOpen);
    mobileMenuToggle.classList.toggle("active", menuOpen);
    document.body.style.overflow = menuOpen ? "hidden" : "";
  });

  mobileMenuClose.addEventListener("click", () => {
    menuOpen = false;
    mobileMenu.classList.remove("open");
    mobileMenuToggle.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute("data-section");
      smoothScrollToSection(sectionId);

      // Close mobile menu if open
      if (menuOpen) {
        menuOpen = false;
        mobileMenu.classList.remove("open");
        mobileMenuToggle.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });
}

// Skills Data and Rendering
const skillsData = {
  languages: {
    title: "Languages",
    icon: `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>`,
    skills: [
      {
        name: "C",
        icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="transition-all duration-300 text-blue-600" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z"></path></svg>`,
        color: "#659ad2",
      },
      {
        name: "C++",
        icon: `<svg viewBox="0 0 24 24" fill="#659ad2"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.109c-3.92 0-7.109-3.189-7.109-7.109S8.08 4.891 12 4.891a7.133 7.133 0 016.156 3.552l-3.076 1.781A3.567 3.567 0 0012 8.445c-1.96 0-3.554 1.595-3.554 3.555S10.04 15.555 12 15.555a3.567 3.567 0 003.08-1.778l3.077 1.78A7.135 7.135 0 0112 19.109zm7.109-6.714h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79z"/></svg>`,
        color: "#659ad2",
      },
      {
        name: "Python",
        icon: "https://docs.python.org/3/_static/py.svg",
        color: "#f7d43c",
      },
      {
        name: "JavaScript",
        icon: `<svg viewBox="0 0 24 24" fill="#f7df1e"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>`,
        color: "#f7df1e",
      },
      {
        name: "TypeScript",
        icon: `<svg viewBox="0 0 24 24" fill="#3178c6"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>`,
        color: "#3178c6",
      },
    ],
    colorScheme: "blue",
  },
  frontend: {
    title: "Frontend",
    icon: `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"/></svg>`,
    skills: [
      {
        name: "React",
        icon: `<svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-sm me-0 w-10 h-10 text-brand dark:text-brand-dark flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>`,
        color: "#61dafb",
      },
      { name: "Vite", icon: "https://vite.dev/logo.svg", color: "#646cff" },
      {
        name: "Next.js",
        icon: "https://nextjs.org/favicon.ico?favicon.d29c4393.ico",
        color: "#ffffff",
      },
      {
        name: "TailwindCSS",
        icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="transition-all duration-300 text-cyan-500" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg>`,
        color: "#06b6d4",
      },
    ],
    colorScheme: "cyan",
  },
  backend: {
    title: "Backend",
    icon: `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"/><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v4.396a1 1 0 01-1.544.841l-1.97-1.314a1 1 0 010-1.682l1.97-1.314A1 1 0 0115 10.604V7z"/></svg>`,
    skills: [
      {
        name: "Node.js",
        icon: `<svg stroke="#68a063" fill="#68a063" stroke-width="0" role="img" viewBox="0 0 24 24" class="transition-all duration-300" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 
        c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 
        c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 
        L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 
        c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 
        c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 
        c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 
        v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 
        c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 
        c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 
        c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 
        c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 
        c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 
        c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"></path></svg>`,
        color: "#68a063",
      },
      {
        name: "Express.js",
        icon: `<svg stroke="#ffffff" fill="#ffffff" stroke-width="0" role="img" viewBox="0 0 24 24" class="transition-all duration-300" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path></svg>`,
        color: "#ffffff",
      },
      {
        name: "FastAPI",
        icon: `<svg stroke="#05988A" fill="#05988A" stroke-width="0" role="img" viewBox="0 0 24 24" class="transition-all duration-300" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896"></path></svg>`,
        color: "#05988a",
      },
    ],
    colorScheme: "purple",
  },
  database: {
    title: "Database",
    icon: `<svg viewBox="0 0 20 20" fill="currentColor"><path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/><path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/></svg>`,
    skills: [
      {
        name: "MongoDB",
        icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="transition-all duration-300 text-green-600" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path></svg>`,
        color: "#4db33d",
      },
      {
        name: "PostgreSQL",
        icon: "https://www.postgresql.org/media/img/about/press/elephant.png",
        color: "#336791",
      },
      {
        name: "Prisma",
        icon: `<svg stroke="#ffffff" fill="#ffffff" stroke-width="0" role="img" viewBox="0 0 24 24" class="transition-all duration-300" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z"></path></svg>`,
        color: "#ffffff",
      },
      {
        name: "Neon",
        icon: "https://console.neon.tech/favicon/favicon.ico",
        color: "#6366f1",
      },
    ],
    colorScheme: "green",
  },
  devops: {
    title: "DevOps & Tools",
    icon: `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>`,
    skills: [
      {
        name: "Docker",
        icon: `<svg stroke="#0db7ed" fill="#0db7ed" stroke-width="0" role="img" viewBox="0 0 24 24" class="transition-all duration-300" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"></path></svg>`,
        color: "#0db7ed",
      },
      {
        name: "GitHub Actions",
        icon: `<svg stroke="#ffffff" fill="#ffffff" stroke-width="0" role="img" viewBox="0 0 24 24" class="transition-all duration-300" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.984 13.836a.5.5 0 0 1-.353-.146l-.745-.743a.5.5 0 1 1 .706-.708l.392.391 1.181-1.18a.5.5 0 0 1 .708.707l-1.535 1.533a.504.504 0 0 1-.354.146zm9.353-.147l1.534-1.532a.5.5 0 0 0-.707-.707l-1.181 1.18-.392-.391a.5.5 0 1 0-.706.708l.746.743a.497.497 0 0 0 .706-.001zM4.527 7.452l2.557-1.585A1 1 0 0 0 7.09 4.17L4.533 2.56A1 1 0 0 0 3 3.406v3.196a1.001 1.001 0 0 0 1.527.85zm2.03-2.436L4 6.602V3.406l2.557 1.61zM24 12.5c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3h-2.08a3.503 3.503 0 0 1-3.46 3 3.502 3.502 0 0 1-3.46-3h-.558c-.972 0-1.85-.399-2.482-1.042V17c0 1.654 1.346 3 3 3h.04c.244-1.693 1.7-3 3.46-3 1.93 0 3.5 1.57 3.5 3.5S13.43 24 11.5 24a3.502 3.502 0 0 1-3.46-3H8c-2.206 0-4-1.794-4-4V9.899A5.008 5.008 0 0 1 0 5c0-2.757 2.243-5 5-5s5 2.243 5 5a5.005 5.005 0 0 1-4.952 4.998A2.482 2.482 0 0 0 7.482 12h.558c.244-1.693 1.7-3 3.46-3a3.502 3.502 0 0 1 3.46 3h2.08a3.503 3.503 0 0 1 3.46-3c1.93 0 3.5 1.57 3.5 3.5zm-15 8c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5S9 19.122 9 20.5zM5 9c2.206 0 4-1.794 4-4S7.206 1 5 1 1 2.794 1 5s1.794 4 4 4zm9 3.5c0-1.378-1.122-2.5-2.5-2.5S9 11.122 9 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm9 0c0-1.378-1.122-2.5-2.5-2.5S18 11.122 18 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm-13 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm12 0c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3.002c-.007.001-.013.005-.021.005l-.506.017h-.017a.5.5 0 0 1-.016-.999l.506-.017c.018-.002.035.006.052.007A3.503 3.503 0 0 1 20.5 17c1.93 0 3.5 1.57 3.5 3.5zm-1 0c0-1.378-1.122-2.5-2.5-2.5S18 19.122 18 20.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5z"></path></svg>`,
        color: "#ffffff",
      },
      {
        name: "Postman",
        icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="transition-all duration-300 text-[#ff6c37]" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"></path></svg>`,
        color: "#ff6c37",
      },
    ],
    colorScheme: "orange",
  },
  cloud: {
    title: "Cloud & Hosting",
    icon: `<svg viewBox="0 0 20 20" fill="currentColor"><path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/></svg>`,
    skills: [
      {
        name: "Vercel",
        icon: `<svg stroke="#ffffff" fill="#ffffff" stroke-width="0" role="img" viewBox="0 0 24 24" class="w-6 h-6 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M24 22.525H0l12-21.05 12 21.05z"></path></svg>`,
        color: "#ffffff",
      },
      {
        name: "Render",
        icon: "https://camo.githubusercontent.com/690209768f1f7633fcb72b194e6bb3aae80c381680a660841cec9cc7c638b4fa/68747470733a2f2f736b696c6c732e73797669786f722e636f6d2f6170692f69636f6e733f693d72656e646572",
        color: "#6b73ff",
      },
      {
        name: "Railway",
        icon: "https://railway.com/favicon-96x96.png",
        color: "#6b73ff",
      },
    ],
    colorScheme: "indigo",
  },
};

// Projects Data
const projectsData = [
  {
    id: 1,
    title: "AI Voice Companion",
    description:
      "An AI-powered virtual companion designed to engage users in natural, voice-based conversations. Listens to user speech, transcribes it to text, and responds with contextually appropriate replies in a warm, expressive voice.",
    image: "images/rupa-review.png",
    technologies: [
      {
        name: "Python",
        icon: "https://docs.python.org/3/_static/py.svg",
        color: "#f7d43c",
      },
      {
        name: "Gemini API",
        icon: "https://brandlogo.org/wp-content/uploads/2024/06/Gemini-Icon.png.webp",
        color: "#4285f4",
      },
      { name: "uv", icon: "text", color: "#d7ff64" },
    ],
    colorScheme: "indigo",
    githubUrl: "https://github.com/Spidy394/AI-GF.git",
    type: "github",
  },
  {
    id: 2,
    title: "Konvo — Conversations. Simplified",
    description:
      "A modern full-stack real-time chat application developed to demonstrate proficiency in building scalable communication platforms. Leveraging React 19 for the frontend and Node.js/Express for the backend, the application features WebSocket-powered messaging via Socket.io, JWT authentication, and MongoDB-based message persistence.",
    image: "images/konvo-preview.png",
    technologies: [
      { name: "JavaScript", icon: "text", color: "#f7df1e" },
      { name: "React", icon: "text", color: "#61dafb" },
      { name: "TailwindCSS", icon: "text", color: "#06b6d4" },
      {
        name: "daisyUI",
        icon: "https://img.daisyui.com/images/daisyui/mark-rotating.svg",
        color: "#5a0ef8",
      },
      { name: "Node.js", icon: "text", color: "#68a063" },
      { name: "Express.js", icon: "text", color: "#ffffff" },
      { name: "Socket.io", icon: "text", color: "#ffffff" },
      { name: "MongoDB", icon: "text", color: "#4db33d" },
    ],
    colorScheme: "teal",
    githubUrl: "https://github.com/Spidy394/Konvo.git",
    liveUrl: "https://konvo-tme9.onrender.com/",
    type: "both",
  },
  {
    id: 3,
    title: "AmarVoice - Raise It. Share It. Amplify It",
    description:
      "A full-stack platform built to empower the people with transparent, AI-driven complaint submission and resolution. Users can raise voice or text-based complaints, track them in real time, and engage with the community. Features include Gemini-powered categorization, ai powered transcription and translation.",
    image: "images/amarVoice-preview.png",
    technologies: [
      { name: "JavaScript", icon: "text", color: "#f7df1e" },
      { name: "Next.js", icon: "text", color: "#ffffff" },
      { name: "React", icon: "text", color: "#61dafb" },
      { name: "TailwindCSS", icon: "text", color: "#06b6d4" },
      { name: "Shadcn UI", icon: "text", color: "#ffffff" },
      { name: "Node.js", icon: "text", color: "#68a063" },
      { name: "Express.js", icon: "text", color: "#ffffff" },
      { name: "Socket.io", icon: "text", color: "#ffffff" },
      {
        name: "Civic Auth",
        icon: "https://auth.civic.com/content/a964adf0-66cb-45eb-9cff-e8b8a2b43ed7/862fb34a-63b0-47d5-bd16-a2d6c6db0b0a.svg",
        color: "#ffffff",
      },
      {
        name: "Gemini API",
        icon: "https://brandlogo.org/wp-content/uploads/2024/06/Gemini-Icon.png.webp",
        color: "#4285f4",
      },
      { name: "MongoDB", icon: "text", color: "#4db33d" },
    ],
    colorScheme: "pink",
    githubUrl: "https://github.com/Spidy394/AmarVoice.git",
    liveUrl: "https://amar-voice.vercel.app/",
    type: "both",
  },
  {
    id: 4,
    title: "Nexora - AI-Powered Content Creation",
    description:
      "A comprehensive AI content creation platform designed to revolutionize your workflow. Features include AI article writing, blog title generation, image creation, background removal, object removal, and resume reviewing. Built with cutting-edge AI technology to help creators produce high-quality content faster and more efficiently.",
    image: "images/nexora-preview.png",
    technologies: [
      { name: "JavaScript", icon: "text", color: "#f7df1e" },
      { name: "Next.js", icon: "text", color: "#ffffff" },
      { name: "React", icon: "text", color: "#61dafb" },
      { name: "TailwindCSS", icon: "text", color: "#06b6d4" },
      { name: "Shadcn UI", icon: "text", color: "#ffffff" },
      { name: "Clerk Auth", icon: "text", color: "#6c47ff" },
      { name: "OpenAI API", icon: "text", color: "#412991" },
      { name: "Replicate API", icon: "text", color: "#ffffff" },
      {
        name: "Gemini API",
        icon: "https://brandlogo.org/wp-content/uploads/2024/06/Gemini-Icon.png.webp",
        color: "#4285f4",
      },
      { name: "PostgreSQL", icon: "text", color: "#336791" },
      { name: "Prisma", icon: "text", color: "#ffffff" },
    ],
    colorScheme: "emerald",
    githubUrl: "https://github.com/Spidy394/Nexora.git",
    liveUrl: "https://nexora-delta-three.vercel.app/",
    type: "both",
  },
  {
    id: 5,
    title: "JobFit - Smart Resume Optimization",
    description:
      "An AI-powered platform that helps job seekers optimize their resumes for specific job postings. Features intelligent keyword matching, ATS compatibility scoring, personalized suggestions, and resume formatting tools. Built to bridge the gap between candidate qualifications and employer expectations using advanced AI algorithms.",
    image: "images/JobFit-preview.png",
    technologies: [
      { name: "TypeScript", icon: "text", color: "#3178c6" },
      { name: "React", icon: "text", color: "#61dafb" },
      { name: "React Router", icon: "text", color: "#ca4245" },
      { name: "TailwindCSS", icon: "text", color: "#06b6d4" },
      { name: "Puter.js", icon: "text", color: "#ffffff" },
    ],
    colorScheme: "pink",
    githubUrl: "https://github.com/Spidy394/JobFit",
    liveUrl: "https://job-fit-tau.vercel.app/",
    type: "both",
  },
];

// Render Skills
function renderSkills() {
  const skillsGrid = document.getElementById("skills-grid");

  Object.values(skillsData).forEach((category) => {
    const skillCard = document.createElement("div");
    skillCard.className = `skill-card ${category.colorScheme}`;

    skillCard.innerHTML = `
            <div class="skill-card-title">
                <div class="skill-card-icon">${category.icon}</div>
                ${category.title}
            </div>
            <div class="skill-tags">
                ${category.skills
                  .map((skill) => {
                    const iconHtml = skill.icon.startsWith("http")
                      ? `<img src="${skill.icon}" alt="${skill.name}" style="width: 1.5rem; height: 1.5rem;">`
                      : `<div style="width: 1.5rem; height: 1.5rem; display: flex; align-items: center; justify-content: center;">${skill.icon}</div>`;

                    return `
                        <div class="skill-tag" data-tooltip="${skill.name}">
                            ${iconHtml}
                        </div>
                    `;
                  })
                  .join("")}
            </div>
        `;

    skillsGrid.appendChild(skillCard);
  });
}

// Render Projects
function renderProjects() {
  const projectsContainer = document.getElementById("projects-container");

  projectsData.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = `project-card ${project.colorScheme}`;

    const techTags = project.technologies
      .map((tech) => {
        return `
                <span class="tech-tag" style="background: rgba(${hexToRgb(
                  tech.color
                )}, 0.1); color: ${tech.color};">
                    ${tech.name}
                </span>
            `;
      })
      .join("");

    const projectLinks = [];
    if (project.githubUrl) {
      projectLinks.push(`
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link github-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                </a>
            `);
    }

    if (project.liveUrl) {
      projectLinks.push(`
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link live-link">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z"/>
                    </svg>
                    Live Demo
                </a>
            `);
    }

    projectCard.innerHTML = `
            <img src="${project.image}" alt="${
      project.title
    }" class="project-image">
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">${techTags}</div>
                <div class="project-links">${projectLinks.join("")}</div>
            </div>
        `;

    projectsContainer.appendChild(projectCard);
  });
}

// Utility function to convert hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}`
    : "255, 255, 255";
}

// Contact Form with EmailJS
function initContactForm() {
  // Initialize EmailJS
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with actual public key

  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const submitBtn = contactForm.querySelector(".submit-btn");
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.innerHTML = `
            <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
            </svg>
            Sending...
        `;
    submitBtn.disabled = true;

    try {
      // Replace with your actual service ID and template ID
      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      });

      alert("Message sent successfully!");
      contactForm.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Initialize Application
function init() {
  console.log("Initializing portfolio...");

  // Start loading screen
  initLoadingScreen();

  // Initialize RevealOnScroll
  new RevealOnScroll();

  // Initialize Navigation
  initNavigation();

  // Render content
  renderSkills();
  renderProjects();

  // Initialize contact form
  initContactForm();

  // Add smooth scrolling to all internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Handle window resize for mobile menu
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && menuOpen) {
      menuOpen = false;
      document.getElementById("mobile-menu").classList.remove("open");
      document.getElementById("mobile-menu-toggle").classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Disable right-click context menu on images (optional)
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("contextmenu", (e) => e.preventDefault());
  });
}

// Start the application when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
