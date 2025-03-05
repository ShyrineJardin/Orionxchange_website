document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    
    hamburger.addEventListener('click', function() {
      // Toggle menu visibility
      if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        
        // Change icon to X
        hamburger.classList.remove('ri-menu-4-line');
        hamburger.classList.add('ri-close-line');
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        
        // Change back to hamburger icon
        hamburger.classList.remove('ri-close-line');
        hamburger.classList.add('ri-menu-4-line');
      }
    });
    
    // Close menu when clicking on a nav link on mobile
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth < 768) {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('flex');
          
          hamburger.classList.remove('ri-close-line');
          hamburger.classList.add('ri-menu-4-line');
        }
      });
    });
  });


  //active link
const activeLink = () =>{
  const sections= document.querySelectorAll('section')
  const navLinks = document.querySelectorAll(".nav-link")

  let current= "home"

  sections.forEach(section =>{
    const sectionTop = section.offsetTop;

    if(this.scrollY >= sectionTop - 60){
      current = section.getAttribute("Id")
    }
  })

  navLinks.forEach(item =>{
    item.classList.remove("active")

    if(item.href .includes(current)){
      item.classList.add("active")
    }
  })

}

window.addEventListener("scroll", activeLink)