// Make navigation icons change color when clicked
const navIcons = document.querySelectorAll('.nav-icon');
navIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    navIcons.forEach(i => i.classList.remove('active'));
    icon.classList.add('active');
  });
});

// Connect menu items to their pages
document.querySelector('.menu-item:nth-child(1)').addEventListener('click', () => {
  window.location.href = 'doctor.html';
});

document.querySelector('.menu-item:nth-child(2)').addEventListener('click', () => {
  window.location.href = 'hospital.html';
});

document.querySelector('.menu-item:nth-child(4)').addEventListener('click', () => {
  window.location.href = 'vaccine.html';
});

document.querySelector('.menu-item:nth-child(5)').addEventListener('click', () => {
    window.location.href = 'camp.html';
  });

// Make "Learn More" buttons work too
document.querySelectorAll('.learn-more-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // Don't trigger the parent click
    const menuItem = btn.closest('.menu-item');
    
    if (menuItem === document.querySelector('.menu-item:nth-child(1)')) {
      window.location.href = 'doctor.html';
    } else if (menuItem === document.querySelector('.menu-item:nth-child(2)')) {
      window.location.href = 'hospital.html';
    } else if (menuItem === document.querySelector('.menu-item:nth-child(4)')) {
      window.location.href = 'vaccine.html';
    }else if(menuItem === document.querySelector('.menu-item:nth-child(5)')){
        window.location.href = 'camp.html';
    }
  });
});

// Simple search bar
document.querySelector('.search-bar input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    alert('Search feature coming soon!');
  }
});