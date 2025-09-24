


const hamburger = document.querySelector('.hamburger input');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click',()=>{
    navMenu.classList.toggle('active',hamburger.checked);
})
window.addEventListener('resize', () => {
  if(window.innerWidth > 768){
    navMenu.classList.remove('active');
    hamburger.checked = false;
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const next = document.getElementById('next-btn');
    const prev = document.getElementById('prev-btn');
    const cards = document.getElementById('cards');
    const cardWidth = cards.querySelector('img').offsetWidth + 10;

    function scrollCards(distance){
      gsap.to(cards,{
        scrollLeft: cards.scrollLeft + distance,
        duration: 0.8,
        ease: "power2.out"
      });
    }

    next.addEventListener('click',()=>{ scrollCards(cardWidth); });
    prev.addEventListener('click',()=>{ scrollCards(-cardWidth); });
});



const locoScroll = new LocomotiveScroll({
  el: document.querySelector('#cards'),
  smooth: true,
  horizontal: true
});

next.addEventListener('click', () => {
  locoScroll.scrollTo(locoScroll.scroll.instance.scroll.x + cardWidth, { duration: 800 });
});
prev.addEventListener('click', () => {
  locoScroll.scrollTo(locoScroll.scroll.instance.scroll.x - cardWidth, { duration: 800 });
});

const roles = document.querySelectorAll('.role');

roles.forEach(role=>{
  gsap.to(role,{
    x: "-100%",
    duration: 30,
    ease: 'linear',
    repeat: -1
  });
  role.addEventListener("mouseenter",()=>gsap.to(role,{timeScale: 0, duration: 0.2}));
  role.addEventListener("mouseenter",()=>gsap.to(role,{timeScale: 1, duration: 0.2}));
});