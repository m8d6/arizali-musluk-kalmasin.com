(function () {
    const callToActionButton = document.querySelector('#call-to-action');

    callToActionButton.addEventListener('click', (event) => {
        event.preventDefault();

        confirm("You arrived to Dubai habibi!")
    })
})();
