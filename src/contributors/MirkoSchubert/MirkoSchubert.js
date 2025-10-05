// Terminal Portfolio TUI - Mirko Schubert
// Boot sequence with easter eggs and TUI navigation

const bootOutput = document.getElementById('boot-output');
const bootScreen = document.getElementById('boot-screen');
const tui = document.getElementById('tui');
const content = document.getElementById('content');
const menuItems = document.querySelectorAll('.menu-item');

let currentSection = 'about';

// ASCII Art Logo removed for better compatibility

// Portfolio Data
const portfolioData = {
    about: {
        name: "Mirko Schubert",
        role: "Full-Stack Developer & WordPress Expert",
        location: "Hamburg, Germany",
        bio: `Full-stack developer specializing in modern web technologies and
WordPress development. I focus on building performant, accessible web
applications with SvelteKit and creating privacy-focused WordPress
solutions that comply with GDPR requirements.

With a passion for clean code and semantic CSS, I help businesses create
sustainable digital experiences that respect user privacy and deliver
exceptional performance.`,
    },
    skills: {
        frontend: ["SvelteKit", "Svelte", "Astro", "React", "Vue.js", "TypeScript", "Semantic CSS", "SASS", "Stylus"],
        backend: ["Node.js", "Rust", "PHP", "GraphQL", "REST APIs"],
        databases: ["PostgreSQL", "Redis", "MySQL"],
        devops: ["Docker", "Vercel", "Netlify", "CI/CD", "GitHub Actions"],
        tools: ["Git", "VS Code", "macOS", "Linux", "Figma"],
    },
    projects: [
        {
            name: "GDPR Checkliste",
            tech: "JavaScript, HTML, CSS",
            description: "Interactive GDPR compliance tool for web developers",
            link: "https://github.com/mirkoschubert/datenschutz-checkliste"
        },
        {
            name: "GDPR CLI",
            tech: "Node.js, JavaScript",
            description: "Command-line tool for checking GDPR compliance",
            link: "https://github.com/mirkoschubert/gdpr-cli"
        },
        {
            name: "Divi Child Theme",
            tech: "PHP, WordPress, JavaScript",
            description: "Privacy-focused Divi child theme with performance optimizations",
            link: "https://github.com/mirkoschubert/divi-child"
        },
        {
            name: "SvelteKit Components",
            tech: "SvelteKit, TypeScript, Sass",
            description: "Opinionated UI component library for SvelteKit",
            link: "https://github.com/mirkoschubert/sveltekit-components"
        },
    ],
    contact: {
        email: "office@mirkoschubert.de",
        github: "https://github.com/mirkoschubert",
        linkedin: "https://www.linkedin.com/in/mirkoschubert/",
        website: "https://mirkoschubert.de"
    }
};

// Boot Messages with Easter Eggs
const bootMessages = [
    { text: "DOORS OS v1.0.0 - BIOS 2025", delay: 100, class: "" },
    { text: "", delay: 50, class: "" },
    { text: "Initializing system components...", delay: 150, class: "" },
    { text: "Loading kernel modules... [OK]", delay: 120, class: "ok" },
    { text: "Mounting file systems... [OK]", delay: 100, class: "ok" },
    { text: "Checking RAM (16GB DDR5)... [OK]", delay: 130, class: "ok" },
    { text: "Detecting humor module... [OK]", delay: 140, class: "ok" },
    { text: "", delay: 50, class: "" },
    { text: "Starting network services...", delay: 100, class: "" },
    { text: "  - eth0: Connected to Internet... [OK]", delay: 120, class: "ok" },
    { text: "  - wifi0: Searching for coffee shop WiFi... [OK]", delay: 150, class: "ok" },
    { text: "", delay: 50, class: "" },
    { text: "Loading developer tools...", delay: 100, class: "" },
    { text: "  - Git: Initialized... [OK]", delay: 110, class: "ok" },
    { text: "  - VS Code: Loading extensions... [OK]", delay: 120, class: "ok" },
    { text: "  - Coffee maker: Brewing... [FAIL - Not found]", delay: 180, class: "fail" },
    { text: "  - Stack Overflow: Connection established... [OK]", delay: 140, class: "ok" },
    { text: "", delay: 50, class: "" },
    { text: "Initializing personality matrix...", delay: 120, class: "" },
    { text: "  - Debugging enthusiasm: 100%... [OK]", delay: 110, class: "ok" },
    { text: "  - Rubber duck debugging: Enabled... [OK]", delay: 130, class: "ok" },
    { text: "  - Imposter syndrome: Suppressed... [OK]", delay: 150, class: "ok" },
    { text: "", delay: 50, class: "" },
    { text: "Loading portfolio data...", delay: 120, class: "" },
    { text: "  - About section... [OK]", delay: 100, class: "ok" },
    { text: "  - Skills database... [OK]", delay: 90, class: "ok" },
    { text: "  - Projects repository... [OK]", delay: 100, class: "ok" },
    { text: "  - Contact information... [OK]", delay: 90, class: "ok" },
    { text: "", delay: 50, class: "" },
    { text: "Checking for bugs in production...", delay: 150, class: "" },
    { text: "  - Bugs found: 0 (Yeah, right!)... [OK]", delay: 200, class: "ok" },
    { text: "", delay: 50, class: "" },
    { text: "Initializing terminal interface... [OK]", delay: 120, class: "ok" },
    { text: "", delay: 100, class: "" },
    { text: "System ready! Welcome to my portfolio.", delay: 200, class: "ok" },
    { text: "", delay: 100, class: "" },
];

// Helper Functions
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function printBootLine(text, className = '') {
    const div = document.createElement('div');
    div.className = `line ${className}`;
    div.textContent = text;
    bootOutput.appendChild(div);
    bootScreen.scrollTop = bootScreen.scrollHeight;
}

async function typeBootLine(text, className = '', speed = 20) {
    const div = document.createElement('div');
    div.className = `line ${className}`;
    bootOutput.appendChild(div);

    for (let char of text) {
        div.textContent += char;
        await sleep(speed);
        bootScreen.scrollTop = bootScreen.scrollHeight;
    }
}

// Boot Sequence
async function bootSequence() {
    for (const message of bootMessages) {
        if (message.text === "") {
            printBootLine("", message.class);
        } else {
            await typeBootLine(message.text, message.class, 15);
        }
        await sleep(message.delay);
    }

    await sleep(800);

    // Transition to TUI
    bootScreen.style.display = 'none';
    tui.style.display = 'flex';

    // Load initial section
    loadSection('about');
}

// Content Renderers with ASCII boxes
function renderAbout() {
    const { name, role, location, bio } = portfolioData.about;

    const content = document.createElement('div');

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = 'ABOUT ME';
    content.appendChild(title);

    const box = document.createElement('div');
    box.className = 'box';

    // Two-column layout for info
    const infoGrid = document.createElement('div');
    infoGrid.className = 'two-column';
    infoGrid.innerHTML = `
        <div class="column-left">Name:</div>
        <div class="column-right">${name}</div>
        <div class="column-left">Role:</div>
        <div class="column-right">${role}</div>
        <div class="column-left">Location:</div>
        <div class="column-right">${location}</div>
    `;
    box.appendChild(infoGrid);

    // Bio section
    const bioTitle = document.createElement('div');
    bioTitle.className = 'label';
    bioTitle.textContent = 'Bio:';
    bioTitle.style.marginTop = '20px';
    box.appendChild(bioTitle);

    const bioText = document.createElement('div');
    bioText.className = 'value';
    bioText.style.marginTop = '10px';
    bioText.textContent = bio;
    box.appendChild(bioText);

    content.appendChild(box);

    return content;
}

function renderSkills() {
    const { frontend, backend, databases, devops, tools } = portfolioData.skills;

    const content = document.createElement('div');

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = 'TECHNICAL SKILLS';
    content.appendChild(title);

    const box = document.createElement('div');
    box.className = 'box';

    // Two-column layout for skills
    const skillsGrid = document.createElement('div');
    skillsGrid.className = 'two-column';
    skillsGrid.innerHTML = `
        <div class="column-left">Frontend:</div>
        <div class="column-right">${frontend.join(', ')}</div>
        <div class="column-left">Backend:</div>
        <div class="column-right">${backend.join(', ')}</div>
        <div class="column-left">Databases:</div>
        <div class="column-right">${databases.join(', ')}</div>
        <div class="column-left">DevOps & Cloud:</div>
        <div class="column-right">${devops.join(', ')}</div>
        <div class="column-left">Tools:</div>
        <div class="column-right">${tools.join(', ')}</div>
    `;
    box.appendChild(skillsGrid);

    content.appendChild(box);

    return content;
}

function renderProjects() {
    const content = document.createElement('div');

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = 'MY PROJECTS';
    content.appendChild(title);

    portfolioData.projects.forEach((project, index) => {
        const projectBox = document.createElement('div');
        projectBox.className = 'box';
        projectBox.style.marginBottom = '20px';

        const projectTitle = document.createElement('div');
        projectTitle.style.color = 'var(--amber)';
        projectTitle.style.fontSize = '22px';
        projectTitle.style.marginBottom = '15px';
        projectTitle.textContent = `[${index + 1}] ${project.name}`;
        projectBox.appendChild(projectTitle);

        const projectGrid = document.createElement('div');
        projectGrid.className = 'two-column';
        projectGrid.innerHTML = `
            <div class="column-left">Tech:</div>
            <div class="column-right">${project.tech}</div>
            <div class="column-left">Description:</div>
            <div class="column-right">${project.description}</div>
            <div class="column-left">GitHub:</div>
            <div class="column-right"><a href="${project.link}" target="_blank" rel="noopener noreferrer">${project.link}</a></div>
        `;
        projectBox.appendChild(projectGrid);

        content.appendChild(projectBox);
    });

    return content;
}

function renderContact() {
    const { email, github, linkedin, website } = portfolioData.contact;

    const content = document.createElement('div');

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = 'CONTACT ME';
    content.appendChild(title);

    const box = document.createElement('div');
    box.className = 'box';

    // Two-column layout for contact info
    const contactGrid = document.createElement('div');
    contactGrid.className = 'two-column';
    contactGrid.innerHTML = `
        <div class="column-left">Email:</div>
        <div class="column-right"><a href="mailto:${email}">${email}</a></div>
        <div class="column-left">GitHub:</div>
        <div class="column-right"><a href="${github}" target="_blank" rel="noopener noreferrer">${github}</a></div>
        <div class="column-left">LinkedIn:</div>
        <div class="column-right"><a href="${linkedin}" target="_blank" rel="noopener noreferrer">${linkedin}</a></div>
        <div class="column-left">Website:</div>
        <div class="column-right"><a href="${website}" target="_blank" rel="noopener noreferrer">${website}</a></div>
    `;
    box.appendChild(contactGrid);

    // Message section
    const message = document.createElement('div');
    message.style.marginTop = '20px';
    message.style.borderTop = '1px solid var(--terminal-green)';
    message.style.paddingTop = '20px';
    message.innerHTML = `
        <div class="value">
Feel free to reach out for collaboration,
job opportunities, or just to say hi!

I'm always interested in:
  - Exciting new projects
  - Open source contributions
  - Tech discussions over coffee
  - Debugging challenges (yes, really!)
        </div>
    `;
    box.appendChild(message);

    content.appendChild(box);

    return content;
}

// Section Loader
function loadSection(section) {
    currentSection = section;

    // Update active menu item
    menuItems.forEach(item => {
        if (item.dataset.section === section) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Render content
    let renderedContent;
    switch (section) {
        case 'about':
            renderedContent = renderAbout();
            break;
        case 'skills':
            renderedContent = renderSkills();
            break;
        case 'projects':
            renderedContent = renderProjects();
            break;
        case 'contact':
            renderedContent = renderContact();
            break;
    }

    // Clear and append new content
    content.innerHTML = '';
    content.appendChild(renderedContent);

    // Scroll to top
    document.querySelector('.content-area').scrollTop = 0;
}

// Event Listeners
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        loadSection(item.dataset.section);
    });
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // F1-F4 keys
    if (e.key === 'F1') {
        e.preventDefault();
        loadSection('about');
    } else if (e.key === 'F2') {
        e.preventDefault();
        loadSection('skills');
    } else if (e.key === 'F3') {
        e.preventDefault();
        loadSection('projects');
    } else if (e.key === 'F4') {
        e.preventDefault();
        loadSection('contact');
    }

    // Number keys (1-4) as alternative
    else if (e.key === '1') {
        loadSection('about');
    } else if (e.key === '2') {
        loadSection('skills');
    } else if (e.key === '3') {
        loadSection('projects');
    } else if (e.key === '4') {
        loadSection('contact');
    }

    // Q to "quit" (reload)
    else if (e.key === 'q' || e.key === 'Q') {
        if (confirm('Quit and restart system?')) {
            location.reload();
        }
    }

    // Arrow keys for navigation
    else if (e.key === 'ArrowRight') {
        const sections = ['about', 'skills', 'projects', 'contact'];
        const currentIndex = sections.indexOf(currentSection);
        const nextIndex = (currentIndex + 1) % sections.length;
        loadSection(sections[nextIndex]);
    } else if (e.key === 'ArrowLeft') {
        const sections = ['about', 'skills', 'projects', 'contact'];
        const currentIndex = sections.indexOf(currentSection);
        const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
        loadSection(sections[prevIndex]);
    }
});

// Initialize on load
window.addEventListener('load', () => {
    bootSequence();
});
