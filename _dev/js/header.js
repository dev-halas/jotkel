const mobileMenu = document.querySelector('.navMobile--menu')
const burger = document.querySelector('.navMobile--burger')
const header = document.querySelector('header')
const mobileMenuLinks = document.querySelectorAll('.navMobile--burger a')

console.log('test')

const headerToggle = () => {
    header.classList.toggle('open')
}

burger.addEventListener('click', () => headerToggle)

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        header.classList.remove('open')
    })
})