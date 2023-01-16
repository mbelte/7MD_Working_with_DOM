const btns = document.getElementsByClassName('js-btn')
const gridItems = document.getElementsByClassName('js-grid-item')


btns[0].addEventListener('click', () => {
    gridItems[0].classList.toggle('grid__item--yellow')
})

btns[1].addEventListener('click', () => {
    const gridItem2 = gridItems[1].innerHTML
    if(gridItem2 === 'FAIL') {
        gridItems[1].innerHTML = 'SUCCESS'
    } else {
        gridItems[1].innerHTML = 'FAIL'
    }
})

btns[2].addEventListener('click', () => {
    let item = gridItems[2].classList,
        cName = 'grid__item--hidden'

    if(item.contains(cName)) {
        alert('The item is already hidden!')
    } else {
        item.add(cName)
    }
})

btns[3].addEventListener('click', () => {
    gridItems[3].classList.toggle('grid__item--hidden')
})


let lastCol = ''

const colorClasses = (lastColor: string): string => {

    const itemsColor = ['lime', 'blue', 'yellow', 'pink', 'dark']

    let colIndex = Math.floor(Math.random() * 4)
    
    let newCol = 'grid__item--' + itemsColor[colIndex]

    return newCol !== lastCol ? newCol : colorClasses(lastCol)
}

btns[4].addEventListener('click', () => {

    if(lastCol.length > 0) gridItems[4].classList.remove(lastCol)

    let newCol = colorClasses(lastCol)

    gridItems[4].classList.add(newCol)
    lastCol = newCol
})

btns[5].addEventListener('click', () => {

    const num = gridItems[5],
        counter = () => {
            const numVal = num.innerHTML
            if(Number(numVal) < 10) {
                num.innerHTML = String(Number(numVal) + 1)
            } else {
                clearInterval(numCounter)
            }
        }

    const numCounter = setInterval(counter, 300)
})

gridItems[4].addEventListener('mouseenter', () => {

    const num = gridItems[4],
        counter = () => {
            const numVal = num.innerHTML
            if(Number(numVal) < 10) {
                num.innerHTML = String(Number(numVal) + 1)
            } else {
                clearInterval(numCounter)
            }
        }

    const numCounter = setInterval(counter, 300)

    num.addEventListener('mouseleave', () => {
        num.innerHTML = '0'
        clearInterval(numCounter)
    })
})

btns[6].addEventListener('click', () => {
    const items = [...gridItems]
    items.forEach(el => {
        el.classList.toggle('grid__item--ocean')
    })
    document.querySelector('body').classList.toggle('black-bg')
})

gridItems[0].addEventListener('mouseenter', () => {
    gridItems[0].classList.toggle('grid__item--red')
})


const txt = <HTMLInputElement>document.querySelector('.input') // as HTMLInputElement
txt.addEventListener('keyup', () => {
    document.querySelector('.input-mirror').innerHTML = txt.value
})