window.addEventListener('mousedown', () => {
    let searchInput = document.querySelector('#searchTxt')
    let searchDiv = document.querySelector('.header-searchbox')
    let media1 = window.matchMedia("(min-width: 768px)")

    searchInput.addEventListener('focus', function() {
        if (media1.matches) { searchDiv.style.width = '75%' }
    })

})