(function () {
    const anchor = document.querySelector('#go-to-top');

    window.addEventListener('scroll', () => anchor.style.display = window.scrollY > 50 ? 'block' : 'none')
    anchor.addEventListener('click', event => {
        event.preventDefault()

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
})();
