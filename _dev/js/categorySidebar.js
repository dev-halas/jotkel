const categorySidebar = document.querySelector('.categorySidebar') 



    const categorySpan = document.querySelectorAll('.categoryParent span')

    categorySpan.forEach(category => {
        category.addEventListener('click', () => {
            category.parentElement.classList.toggle('categoryActive')
        })
    })
