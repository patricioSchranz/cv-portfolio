/*------------

Set the height of the big container 

-------------------------------------------*/

const 
    bigContainer = document.querySelector('.big-container'),
    realHeight = window.innerHeight

// console.log(realHeight)

bigContainer.style.height = `${realHeight - 0.1}px`

// window.onresize= ()=>{
//     let changedHeight = window.innerHeight
//     bigContainer.style.height = `${changedHeight - 0.1}px`
//     // location.reload
//     // console.log('resize')
// }


