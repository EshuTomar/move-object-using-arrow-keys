let ladybug = document.querySelector('#ladybug');
let x = 0;
let y = 0;
let speed = 10;
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

document.addEventListener('keydown',(e) => {

  // move-left
  if(e.keyCode === 37){
    if(x > 0){
      // console.log(x);
      x -= speed;
      ladybug.style.left = x + 'px';
      ladybug.style.transform = 'rotate(270deg)';
    }
  }else if(e.keyCode === 38){
    // move-up
    if(y > 0){
      y -= speed;
      ladybug.style.top = y + 'px';
      ladybug.style.transform = 'rotate(360deg)';
    }
  }else if(e.keyCode === 39){
    // move-right
     if(x+100 < windowWidth){
       x += speed;
       ladybug.style.left = x + 'px';
       ladybug.style.transform = 'rotate(90deg)';
     }
  }else if(e.keyCode === 40){
    // move-down
    if(y+100 < windowHeight){
      y += speed;
      ladybug.style.top = y + 'px';
      ladybug.style.transform = 'rotate(180deg)';
    }
  }
});
       
        
