const toggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});










let list = document.querySelectorAll('.carousel .list .item');
let carousel = document.querySelector('.carousel');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let mockup = document.querySelector('.mockup');

let count = list.length;
let active = 0;
let leftMockup = 0;
let left_each_item = 100 / (list.length - 1);


next.onclick = () => {
    active = active >= count - 1 ? 0 : active + 1;
    leftMockup = leftMockup + left_each_item;
    carousel.classList.remove('right');
    changeCarousel();
}
prev.onclick = () => {
    active = active <= 0 ? count - 1 : active - 1;
    leftMockup = leftMockup - left_each_item;
    carousel.classList.add('right');
    changeCarousel();
}
function changeCarousel() {

    let hidden_old = document.querySelector('.item.hidden');
    if(hidden_old) hidden_old.classList.remove('hidden');


    let active_old = document.querySelector('.item.active');
    active_old.classList.remove('active');
    active_old.classList.add('hidden');
    list[active].classList.add('active');
    mockup.style.setProperty('--left', leftMockup + '%');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}

let refreshInterval = setInterval(()=> {next.click()}, 3000);









window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelectorAll('.scroll-right').forEach((track) => {
    const textWidth = track.scrollWidth / 15;
    const offset = scrollY * 0.5 % textWidth;
    track.style.transform = `translateX(${offset}px)`;
  });

  document.querySelectorAll('.scroll-left').forEach((track) => {
    const textWidth = track.scrollWidth / 15;
    const offset = scrollY * 0.5 % textWidth;
    track.style.transform = `translateX(-${offset}px)`;
  });
});










const animationImages = document.querySelectorAll('.animation-image');

animationImages.forEach(container => {
  const img = container.querySelector('img');

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const moveX = offsetX * 0.05;
    const moveY = offsetY * 0.05;

    img.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  container.addEventListener('mouseleave', () => {
    img.style.transform = 'translate(0, 0)';
  });
});














const hoverSound = new Audio('sound/bubble.mp3');
hoverSound.loop = true;


const animationContainer = document.querySelector('.animation-container');


animationContainer.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;  
    hoverSound.play();
});


animationContainer.addEventListener('mouseleave', () => {
    hoverSound.pause();
});







const bgMusic = document.getElementById('bg-music');

function startBackgroundMusic() {
  if (bgMusic.paused) {
    bgMusic.play().catch((e) => {
      console.log("Autoplay failed:", e);
    });
  }


  window.removeEventListener('click', startBackgroundMusic);
  window.removeEventListener('keydown', startBackgroundMusic);
}

window.addEventListener('click', startBackgroundMusic);
window.addEventListener('keydown', startBackgroundMusic);








const waveSound = new Audio('sound/wave.mp3');
waveSound.loop = true;


const footer = document.querySelector('.footer');


footer.addEventListener('mouseenter', () => {
    waveSound.currentTime = 0;  
    waveSound.play();
});


footer.addEventListener('mouseleave', () => {
    waveSound.pause();
});

function changeImage(src) {

  document.getElementById("bigImage").src = src;

}







