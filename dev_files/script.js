/* ==========================================================================
   JavaScript — Tangent Forge
   ========================================================================== */

// Auto-update copyright year
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Smooth scroll offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80; // Height of sticky header + padding
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Form submission feedback (optional enhancement)
const form = document.querySelector('.subscribe-form');
if (form) {
  form.addEventListener('submit', function(e) {
    // Netlify will handle the actual submission
    // This is just for visual feedback
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    button.textContent = 'Subscribing...';
    button.disabled = true;
    
    // Reset after 2 seconds (Netlify will redirect anyway)
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 2000);
  });
}

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
});
