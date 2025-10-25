// Small JS: populate year and add any tiny interactions for SaikatBag
document.addEventListener('DOMContentLoaded', function () {
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if (el) el.textContent = y;

  // Example: log meta info (used by homepage generator if needed)
  try {
    var name = (document.querySelector('meta[name="name"]') || {}).content || '';
    var github = (document.querySelector('meta[name="github"]') || {}).content || '';
    var linkedin = (document.querySelector('meta[name="linkedin"]') || {}).content || '';
    console.log('Contributor meta:', {name: name, github: github, linkedin: linkedin});
  } catch (e) {
    // ignore
  }
});
