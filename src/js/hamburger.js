const 
    navi = document.querySelector('.ps_header_nav'),
    hamburger = document.querySelector('.ps_header_hamburger'),
    projectHeader = document.querySelector('.ps_header')

let naviState = 'off'

hamburger.onclick = ()=>{

    if(naviState === 'off'){
        projectHeader.style.position = 'fixed'
        projectHeader.style.zIndex = '100'
        hamburger.style.transform = 'rotate(90deg)'
        navi.style.left = '0'
        naviState = 'on'
    }
    else{
        hamburger.style.transform = 'rotate(0deg)'
        projectHeader.style.position = 'relative'
        projectHeader.style.zIndex = '1'
        navi.style.left = '-100vw'
        naviState = 'off'
    }
}