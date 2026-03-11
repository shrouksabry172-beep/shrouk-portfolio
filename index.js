 const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const sidebarEl = document.getElementById('sidebar');
  const bsSidebar = bootstrap.Offcanvas.getOrCreateInstance(sidebarEl);

  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
   bsSidebar.hide();
    });
  });

window.addEventListener("scroll", function(){

let reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
reveals[i].classList.add("active");
}

}

});
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = () => {
  const windowHeight = window.innerHeight;

  faders.forEach((fader, index) => {
    const top = fader.getBoundingClientRect().top;

    if(top < windowHeight - 100){
      setTimeout(() => {
        fader.classList.add('active');
      }, index * 200); 
    }
  });
}

window.addEventListener('scroll', appearOnScroll);
window.addEventListener('load', appearOnScroll);

const workCards = document.querySelectorAll('#work .fade-in');

const appearWorkOnScroll = () => {
  const windowHeight = window.innerHeight;

  workCards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;

    if(top < windowHeight - 100){
      setTimeout(() => {
        card.classList.add('active');
      }, index * 200);
    }
  });
}

window.addEventListener('scroll', appearWorkOnScroll);
window.addEventListener('load', appearWorkOnScroll);