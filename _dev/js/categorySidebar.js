const categorySidebar = document.querySelector('.categorySidebar') 

    const categorySpan = document.querySelectorAll('.categoryParent > span')

    const toggleCategory = () => {
        category.parentElement.classList.add('categoryActive')
    }

    categorySpan.forEach(category => {
        category.addEventListener('click', () => toggleCategory)
    })
