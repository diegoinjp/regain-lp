import 'boxicons'

let toggle = document.querySelector('.toggle'),
    menu = document.querySelector('.menu'),
    items = document.querySelectorAll('.menu__item'),
    modal = document.querySelectorAll('.modal'),
    close = document.querySelectorAll('.close');

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
