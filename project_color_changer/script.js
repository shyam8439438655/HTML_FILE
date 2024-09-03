const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function(box ) {
   box.addEventListener('click',function(color){
    if(color.target.id === 'box1'){
        body.style.backgroundColor ='#33ffbd'
    }
   })

})

button.forEach(function(box) {
    box.addEventListener('click',function(color){
     if(color.target.id === 'box2'){
         body.style.backgroundColor ='pink'
     }
    })
 
 })

 
button.forEach(function(box) {
    box.addEventListener('click',function(color){
     if(color.target.id === 'box3'){
         body.style.backgroundColor ='#ff5733'
     }
    })
 
 })

 
button.forEach(function(box) {
    box.addEventListener('click',function(color){
     if(color.target.id === 'box4'){
         body.style.backgroundColor ='#ffbd33'
     }
    })
 
 })

 
button.forEach(function(box) {
    box.addEventListener('click',function(color){
     if(color.target.id === 'box5'){
         body.style.backgroundColor ='#dbff33'
     }
    })
 
 })

 