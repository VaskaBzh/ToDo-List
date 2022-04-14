window.addEventListener('DOMContentLoaded', (event) => {
'use strict'
const body = document.querySelector('body')

const DomElement = function (selector, height, width, bg, fontSize, position, text) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
    this.text = text
    this.position = position

    this.divCreate = function () {
        const div = document.createElement('div')

        if (this.selector.slice('')[0] == '.') {
            div.classList.add(this.selector.slice(1))

            div.style.height = this.height + 'px'
            div.style.width = this.width + 'px'
            div.style.background = this.bg
            div.style.fontSize = this.fontSize + 'px'
            div.style.position = this.position

            div.textContent = this.text

            body.append(div)
        } else if (this.selector.slice('')[0] == '#') {
            div.id = this.selector.slice(1)

            div.style.height = this.height + 'px'
            div.style.width = this.width + 'px'
            div.style.background = this.bg
            div.style.fontSize = this.fontSize + 'px'
            div.style.position = this.position

            div.textContent = this.text

            body.append(div)
        }
    }
}

const divOne = new DomElement('.block', '100', '100', 'blue', '28', 'absolute', 'Поясни за шмот')


divOne.divCreate()

console.dir(window)

document.addEventListener('keydown', e => {
    const div = document.querySelector('.block')
    console.dir(div);
    if (e.code == 'ArrowRight' && div.offsetLeft < window.innerWidth - divOne.width) {
        div.style.left = div.offsetLeft + 10 + 'px'
    } else if (e.code == 'ArrowLeft' && div.offsetLeft > 0) {
        div.style.left = div.offsetLeft - 10 + 'px'
    } else if (e.code == 'ArrowDown' && div.offsetTop < window.innerHeight - divOne.height + 10) {
        div.style.top = div.offsetTop + 10 + 'px'
    } else if (e.code == 'ArrowUp' && div.offsetTop > 0) {
        div.style.top = div.offsetTop - 10 + 'px'
    }
})
});
