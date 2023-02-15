const mobileMenu = document.querySelector('.navMobile--menu')
const burger = document.querySelector('.navMobile--burger')
const header = document.querySelector('header')
const mobileMenuLinks = document.querySelectorAll('.navMobile--burger a')

console.log('test')

burger.addEventListener('click', () => {
    header.classList.toggle('open')
})

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        header.classList.remove('open')
    })
})