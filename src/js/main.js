import './../scss/style.scss'

let toggle = document.querySelector('.toggle'),
    menu = document.querySelector('.menu'),
    items = document.querySelectorAll('.menu__item'),
    modal = document.querySelectorAll('.modal'),
    close = document.querySelectorAll('.close'),
    mainW = document.querySelector('.main'),
    mainScreen = document.querySelector('.main__content');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show')
  toggle.classList.toggle('active')
})

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', () => {
    modal[i].style.display = 'flex';
    toggle.style.display = "none";
    window.onclick = function(event) {
      if(event.target === modal[i]) {
        modal[i].style.display = 'none'
        toggle.style.display = "block";
      }
    }
  })
  close[i].addEventListener('click', () => {
    modal[i].style.display = 'none'
    toggle.style.display = "block";
  })
}

// SCROLL 

function scrollUp(){
  if(this.scrollY >= 30) mainScreen.classList.add('filter'); else mainScreen.classList.remove('filter')
}
mainW.addEventListener('scroll', scrollUp)

const sr = ScrollReveal({
  distance: '60px',
  duration: 2000,
  delay: 100,
  mobile: false
  // reset: true
})

sr.reveal('.main__content', {origin: 'right'})