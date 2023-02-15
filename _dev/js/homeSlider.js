const homeSlider = document.querySelector('.homeSlider');

if(homeSlider !== null) {

    const homeSliders = document.querySelectorAll('.homeSlide')

    const removeActive = () => {
        homeSliders.forEach(slide => {
            slide.classList.remove('--active')
        })
    }
    
    homeSliders.forEach(slide => {
        slide.addEventListener('click', () => {
            removeActive()
            slide.classList.add('--active')
        })
    })

}
    