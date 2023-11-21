
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    });
  });

  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("header-sticky");
    } else {
        header.classList.remove("header-sticky");
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('ul');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active');
});
const menuItems = document.querySelectorAll('ul li a');

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function () {
    menu.classList.remove('active');
  });
});
