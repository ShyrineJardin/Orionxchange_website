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

  function sendEmail() {
    var params = {
      user_name: document.getElementById('name').value,
      user_contact: document.getElementById('contact_num').value,
      user_email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
    

    const serviceID = "service_7qvf9me";
    const templateID = "template_hxehphs";

    emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("contact_num").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      alert("Your message was sent successfully!");
    })
    .catch(err => console.log(err));
}
    