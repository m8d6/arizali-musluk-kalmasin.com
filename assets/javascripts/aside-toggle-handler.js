(function () {
    const button        = document.querySelector('#toggle-to-aside')
    const aside         = document.querySelector('aside')
    const body          = document.body
    const initialState  = {
        aside: aside.style.display,
        body: body.style.gridTemplate
    }
    const modifiedState = {
        aside: 'none',
        body: `
        "header header" 150px
        "main main" auto
        "footer footer" 100px / 150px calc(100vw - 150px)
        `
    }

    button.addEventListener('click', event => {
        const { currentTarget } = event

        if (aside.style.display === initialState.aside) {
            aside.style.display = modifiedState.aside
            body.style.gridTemplate = modifiedState.body
            currentTarget.textContent = 'Menüyü Göster'
        } else {
            aside.style.display = initialState.aside
            body.style.gridTemplate = initialState.body

            currentTarget.textContent = 'Menüyü Gizle'
        }
    })
})();
