//--- navigate the site ---

const
    imageDiv = document.querySelector('.ps_main_img'),
    naviSlider = document.querySelector('.ps_main_ul'),
    scrollHelper = document.querySelector('.scroll-helper'),
    aboutMeLink = document.querySelector('#about-me-link'),
    timelineLink = document.getElementById('timeline-link'),
    portfolioLink = document.getElementById('portfolio-link'),
    scrollInfoArrow = document.querySelector('.scroll-info')

let 
    theRealHeight = window.innerHeight,
    theWidthOfTheSlider = window.innerWidth * 0.58,
    scrollCount = 100,
    scrollState = window.scrollY,
    scrollDifference = 1,
    theYScroll

scrollHelper.style.height = `${theRealHeight + 100}px`

    window.innerWidth <= 1365 && (theWidthOfTheSlider = window.innerWidth)
  
window.onscroll = () =>{
    theYScroll = window.scrollY
    scrollDifference = theYScroll - scrollState
    scrollState = window.scrollY

    scrollDifference > 0
    ? scrollCount += 100
    : scrollCount -= 100
    
    scrollHelper.style.height = `${theRealHeight + scrollCount}px`
 
    naviSlider.style.left = `-${theYScroll}px`

    console.log('the y scroll =>', theYScroll)
    console.log('the width of the slider', theWidthOfTheSlider)


    if(scrollDifference > 0){
        if(theYScroll >= ((theWidthOfTheSlider/1.2) * 3)){
            scrollHelper.style.height = `${theRealHeight + (theWidthOfTheSlider*3)}px`
            console.log('c')
            imageDiv.style.background = 'url(./public/pics/gallery.webp) center center / cover no-repeat'
            portfolioLink.style.animation = 'opacity-in 1s 2s forwards'
            scrollInfoArrow.innerHTML = '&#129045'
        }
        else if(theYScroll >= ((theWidthOfTheSlider/1.2) * 2)){
            console.log('c')
            imageDiv.style.background = 'url(./public/pics/time.webp) center center / cover no-repeat'
            timelineLink.style.animation = 'opacity-in 1s 1s forwards'
        }
        else if(theYScroll >= (theWidthOfTheSlider / 1.5)){
            imageDiv.style.background = 'url(./public/pics/as.jpg) center center / cover no-repeat'
            aboutMeLink.style.animation = 'opacity-in 1s forwards'
             scrollInfoArrow.innerHTML = '&#11109'
             console.log(scrollInfoArrow)
            console.log('b')
        }
        else if(theYScroll < theWidthOfTheSlider){
            imageDiv.style.background = 'url(./public/pics/laptop.webp) center center / cover no-repeat'
            console.log('a')
        }
    }

    else if(scrollDifference < 0){
        if(theYScroll >= ((theWidthOfTheSlider / 1.2) * 3)){
            scrollHelper.style.height = `${theRealHeight + (theWidthOfTheSlider*3)}px`
            imageDiv.style.background = 'url(./public/pics/gallery.webp) center center / cover no-repeat'
            console.log('d')
        }
        else if(theYScroll >= ((theWidthOfTheSlider /1.2) * 2)){
            imageDiv.style.background = 'url(./public/pics/time.webp) center center / cover no-repeat'
            scrollInfoArrow.innerHTML = '&#11109'
            console.log('c')
        }
        else if(theYScroll >= (theWidthOfTheSlider / 1.2)){
            imageDiv.style.background = 'url(./public/pics/as.jpg) center center / cover no-repeat'
            console.log('b')
        }
        else if(theYScroll < theWidthOfTheSlider){
            imageDiv.style.background = 'url(./public/pics/laptop.webp) center center / cover no-repeat'
            scrollInfoArrow.innerHTML = '&#129047'
            console.log('a')
        }
    }
  
    // console.log('y scroll', theYScroll)
    // console.log('scroll state',scrollState)
    // console.log('scroll difference', scrollDifference)
    // console.log('scroll count', scrollCount)
}

window.addEventListener('resize', ()=>{
    // alert('resize')
    theRealHeight = window.innerHeight
    theWidthOfTheSlider = window.innerWidth * 0.58
    scrollHelper.style.height = `${theRealHeight + 100}px`

    window.innerWidth <= 1365 && (theWidthOfTheSlider = window.innerWidth)
    // location.reload()
})



//--- preload images ---

const preloadImageArray = [
    "./public/pics/me-small.webp",
    "./public/pics/time.webp",
    "./public/pics/gallery.webp"
]
document.addEventListener('DOMContentLoaded', ()=>{
    for(let i = 0; i < preloadImageArray.length; i++){
        let tempImage = new Image()
        tempImage.src = preloadImageArray[i]
        console.log(tempImage)
    }
})