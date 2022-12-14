
document.addEventListener('mousemove', function(e){
    let main = document.querySelector('.main');
    if(main){
        console.log("main... Connected!!!!")
    }
    
    let heart = document.createElement('span');
    // let heart = document.createElement('span').classList.add("mousepointer");
    let x = e.offsetX;
    let y = e.offsetY;
    heart.className = 'mousepointer';
    heart.style.left = x+'px';
    heart.style.top = y+'px';

    main.appendChild(heart);
    setTimeout(function(){
        heart.remove();
    },1000)
})
