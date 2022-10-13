// --- dom elements ---

const imageSliders = document.querySelectorAll('.portfolio_project_slider')




imageSliders.forEach(slider =>{

    let 
        position = 100

    setInterval(()=>{
        console.log('x')
    
        if(position <= 300){
            slider.style.transition = 'left 1s'
            slider.style.left = `-${position}%`
            position += 100
        }
        else{
            position = 0
            slider.style.transition = 'none'
            slider.style.left = `-${position}%`
            position = 100
        }
     
    }, 3000)
})