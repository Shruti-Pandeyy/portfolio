function setActiveSection() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");
    
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
    
        if (rect.top <= 150 && rect.bottom >= 150) {
            navLinks[i].classList.add("active");
        } 
        else {
            navLinks[i].classList.remove("active");
        }
        }
}
window.addEventListener("scroll", setActiveSection);
setActiveSection();

window.addEventListener("scroll", reveal);
function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){
        reveals[i].classList.add("activ");
    }
  }
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}