(function () {
    document.addEventListener('visibilitychange', event => {
        const title = document.querySelector('title')

        title.textContent = document.visibilityState === 'visible' ? 'Title' : 'Muslukçunu Unutma'
    })
})();
