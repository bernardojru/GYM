const nav = document.querySelector('.nav')
const searchBox = document.querySelector('#search-box')

searchBox.addEventListener('click', ()=> {
    nav.classList.toggle('nav-show')
})