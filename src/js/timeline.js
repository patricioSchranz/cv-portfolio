//--- dom elements ---

const
    yearLinks = document.querySelectorAll('[data-year]'),
    slider = document.querySelector('.timeline_content-slider'),
    sliderActiveBackground = document.querySelector('.timeline_slider-active-background'),
    contentEntrys = document.querySelectorAll('.timeline_cv-content_entry'),
    yearLinkList1 = document.querySelector('.timeline_years-list-1'),
    yearLinkList2 = document.querySelector('.timeline_years-list-2'),
    yearLinkToogler = document.querySelector('.timeline_slider-control')

console.log(yearLinks)



//--- functions ---

const isInViewport = (element)=>{
    const rect = element.getBoundingClientRect()

    return(
        rect.top >= 0 &&
        rect.left >= 0
    )
}



//--- event listener ---

yearLinks.forEach(yearLink =>{
    yearLink.onclick = (event)=>{
        thisYear = event.target.dataset.year

        // console.log(thisYear)

        switch(thisYear){
            case '2022':
                slider.style.left = '0'
                sliderActiveBackground.style.left = '0'
                break
            case '2011 - 2021':
                slider.style.left = '-100%'
                sliderActiveBackground.style.left = '25%'
                break
            case '2006 - 2010':
                slider.style.left = '-200%'
                sliderActiveBackground.style.left = '50%'
                break
            case '2001 - 2005':
                slider.style.left = '-300%'
                sliderActiveBackground.style.left = '75%'
                break
            case '1998 - 2000':
                slider.style.left = '-400%'
                sliderActiveBackground.style.left = '0%'
                break
            case '1997 - 1998':
                slider.style.left = '-500%'
                sliderActiveBackground.style.left = '25%'
                break
            case '1993 - 1997':
                slider.style.left = '-600%'
                sliderActiveBackground.style.left = '50%'
                break
            case '1989 - 1993':
                slider.style.left = '-700%'
                sliderActiveBackground.style.left = '75%'
                break
            default:
                console.log('something going wrong')
                break
        }
    }
})



let yearLinkToogleState = 0

yearLinkToogler.onclick = ()=>{
    const hintImage = yearLinkToogler.querySelector('img')

    if(yearLinkToogleState === 0){
        // console.log(hintImage)
        // console.log('toogle')
        // console.log(slider)

        hintImage.style.transform = 'rotateY(-180deg)'
        sliderActiveBackground.style.left = '0'
        slider.style.left = '-400%'
        yearLinkList1.style.display = 'none'
        yearLinkList2.style.display = 'flex'
        yearLinkToogleState = 1
    }
    else if(yearLinkToogleState === 1){
        hintImage.style.transform = 'rotate(0deg)'
        slider.style.left = '0'
        sliderActiveBackground.style.left = '0'
        yearLinkList1.style.display = 'flex'
        yearLinkList2.style.display = 'none'
        yearLinkToogleState = 0
    }
}


