const dark = document.querySelector('.gridCentered')
const toggle = document.querySelectorAll('.size')

for (const element of toggle) {
  element.addEventListener('click', function () {
    dark.classList.toggle('dark-mode')
  })
}
