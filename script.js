function scrollTO() {
    fixBlock = document.querySelector('.hedaer-top-container')
    document.addEventListener('scroll', () => {
        if (window.scrollY >= 10) {
            fixBlock.setAttribute('style', 'background-color: black;')
        } else {
            fixBlock.setAttribute('style', 'background-color: inherit;')
        }
    })
}

function MP_open_close() {
    open_close = document.querySelector('.MP_open_close')
    document.querySelector('.mobile-btn').addEventListener('click', () => {
        open_close.setAttribute('style', 'top: 0; opacity: 1;')
    })
    document.querySelector('.closed').addEventListener('click', () => {
        open_close.setAttribute('style', 'top: -700px; opacity: 0;')
    })
}

async function callAll() {
    scrollTO()
    MP_open_close()
}
callAll()