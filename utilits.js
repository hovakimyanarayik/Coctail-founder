export function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
}

export function scrollToElement(element) {
    window.scrollTo({
        top: element.offsetTop,
        left: 0,
        behavior: 'smooth'
    })
}

export function unknownSearch(input) {
    input.classList.add('bord-red');
    setTimeout(() => {
        input.classList.remove('bord-red')
    }, 1500)
}