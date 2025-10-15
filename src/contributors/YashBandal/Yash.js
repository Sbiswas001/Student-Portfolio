// script.js
// UI interactions for the portfolio page (theme toggle, skill animation, project modal, contact form)

// Wait until DOM is parsed
document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');

  // Restore theme from localStorage
  if (localStorage.getItem('yb_theme') === 'light') {
    body.classList.add('light');
    themeToggle.setAttribute('aria-pressed', 'true');
  }

  themeToggle.addEventListener('click', () => {
    const isLight = body.classList.toggle('light');
    themeToggle.setAttribute('aria-pressed', String(isLight));
    localStorage.setItem('yb_theme', isLight ? 'light' : 'dark');
  });

  // Animate skill bars when they come into view
  const bars = document.querySelectorAll('.bar > span');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const w = el.getAttribute('data-width') || '70%';
        el.style.width = w;
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => obs.observe(b));

  // Project modal logic
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalTech = document.getElementById('modalTech');
  const projects = document.querySelectorAll('.project');
  const openRepo = document.getElementById('openRepo');
  const liveDemo = document.getElementById('liveDemo');
  const readMore = document.getElementById('readMore');
  const closeModal = document.getElementById('closeModal');

  // Add keyboard + click handlers to open project details
  projects.forEach(p => {
    p.addEventListener('click', () => openProject(p));
    p.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openProject(p);
    });
  });

  function openProject(card) {
    modalBackdrop.style.display = 'grid';
    modalBackdrop.setAttribute('aria-hidden', 'false');
    const title = card.getAttribute('data-title') || 'Project';
    const desc = card.getAttribute('data-desc') || '';
    const tech = card.getAttribute('data-tech') || '';
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalTech.textContent = tech;
    // placeholder behaviour: replace '#' with real links if available
    openRepo.onclick = () => window.open('#', '_blank');
    liveDemo.href = '#';
    readMore.href = '#';
    // focus the close button for accessibility
    closeModal.focus();
  }

  function closeProject() {
    modalBackdrop.style.display = 'none';
    modalBackdrop.setAttribute('aria-hidden', 'true');
  }

  closeModal.addEventListener('click', closeProject);
  modalBackdrop.addEventListener('click', (e) => { if (e.target === modalBackdrop) closeProject(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProject(); });

  // Basic contact form handler — simulated submission
  window.handleContact = function (ev) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      alert('Please fill all fields.');
      return;
    }
    // In production, replace this with an API call to your backend
    alert('Thanks, ' + name + '! Your message has been received.\n(Replace this alert with real submission in production.)');
    ev.target.reset();
  };

  // Smooth scroll to projects
  const viewProjects = document.getElementById('viewProjects');
  if (viewProjects) {
    viewProjects.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // Small focus trap when modal is open (basic)
  modalBackdrop.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      closeModal.focus();
    }
  });
});
