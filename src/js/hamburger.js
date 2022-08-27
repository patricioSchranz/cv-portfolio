const 
    navi = document.querySelector('.ps_header_nav'),
    hamburger = document.querySelector('.ps_header_hamburger')

let naviState = 'off'

hamburger.onclick = ()=>{

    if(naviState === 'off'){
        hamburger.style.transform = 'rotate(90deg)'
        navi.style.left = '0'
        naviState = 'on'
    }
    else{
        hamburger.style.transform = 'rotate(0deg)'
        navi.style.left = '-100vw'
        naviState = 'off'
    }
}