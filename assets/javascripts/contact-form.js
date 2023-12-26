(function () {
    const form = document.querySelector('#contact-form')

    form.addEventListener('submit', event => {
        event.preventDefault()

        const formData          = new FormData(event.currentTarget)
        const requestParameters = {}

        for (const [key, value] of formData)
            requestParameters[key] = value

        alert("Sizin ile en kısa süre içerisinde iletişime geçeceğiz.")
    })
})();
