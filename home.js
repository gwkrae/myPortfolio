function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
  }
  
  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('show');
    });
  });

  