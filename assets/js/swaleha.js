const entries = [
    {
      name: "Swaleha Khan",
      portfolio: "",
      github: "https://github.com/Swaleha-Khan-dot",
      linkedin: "#",
  },
  
 ]

/* Smmoth-Scroll to About */
document.getElementById('getStartedButton').addEventListener('click', function() {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});