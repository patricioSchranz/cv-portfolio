const 
    bigContainer = document.querySelector('.big-container'),
    realHeight = window.innerHeight

// console.log(realHeight)

bigContainer.style.height = `${realHeight - 0.1}px`

window.onresize= ()=>{
    let changedHeight = window.innerHeight
    bigContainer.style.height = `${changedHeight - 0.1}px`

    // console.log('resize')
}
