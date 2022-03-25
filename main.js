const dark = document.querySelector('div.nav-dark')
const toggle = document.querySelectorAll('div .size')

for (const element of toggle) {
  element.addEventListener('click', function () {
    dark.classList.toggle('dark-mode')
  })
}

let links = document.querySelectorAll('div .size')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('dark-mode')
  })
}
