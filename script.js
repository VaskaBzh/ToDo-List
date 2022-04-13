'use strict'
const body = document.querySelector('body')

const DomElement = function (selector, height, width, bg, fontSize, text) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
    this.text = text

    const divCreate = () => {
        if (selector != '.') {
            const div = document.createElement('div')

            div.classList.add(selector)

            div.style.height = height + 'px'
            div.style.hwidth = width + 'px'
            div.style.background = bg
            div.style.fontSize = fontSize + 'px'

            div.textContent = text

            body.append(div)
        } else if (selector.charAt(0) = '#') {
            const div = document.createElement('div')

            div.id = selector

            div.style.height = height + 'px'
            div.style.hwidth = width + 'px'
            div.style.background = bg
            div.style.fontSize = fontSize + 'px'

            div.textContent = text

            body.append(div)
        }
    }
    divCreate()
}

const divOne = new DomElement('.block', '300', '600', 'red', '16', 'Поясни за шмот')

