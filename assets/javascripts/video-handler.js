(function () {
    const video = document.querySelector('video')

    document.addEventListener('visibilitychange', () => {
        document.visibilityState === 'visible' ? video.play() : video.pause()
    })
})()
