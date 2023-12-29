(function () {
    const leftArrow       = document.querySelector('#go-to-left')
    const rightArrow      = document.querySelector('#go-to-right')
    const sliderArea      = document.querySelector('#technicians > ul')
    const sliderAreaWidth = sliderArea.scrollWidth
    const itemWidth = sliderArea.querySelector('li').clientWidth

    leftArrow.addEventListener('click', event => {
        if (sliderArea.scrollLeft === 0) {
            sliderArea.scrollTo({
                top: 0,
                left: sliderAreaWidth,
                behavior: 'smooth'
            })
        } else {
            sliderArea.scrollTo({
                top: 0,
                left: sliderArea.scrollLeft - 3 * itemWidth,
                behavior: 'smooth'
            })
        }
    })

    rightArrow.addEventListener('click', event => {
        if (sliderArea.scrollLeft >= sliderAreaWidth) {
            sliderArea.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        } else {
            sliderArea.scrollTo({
                top: 0,
                left: sliderArea.scrollLeft + 3 * itemWidth,
                behavior: 'smooth'
            })
        }
    })
})();
