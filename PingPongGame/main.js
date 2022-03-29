// stick değişkenleri
var stickLeft = document.getElementById('stickLeft');
var stickRight = document.getElementById('stickRight');

stickLeft.style.top = window.innerHeight/2 + 'px';
stickRight.style.top = window.innerHeight/2 + 'px';

function pxAdd(numb){
  return numb + 'px';
}




switch(KeyboardEvent.code){
  // sol çubuk
  case 87:
    if(parseInt(stickLeft.style.top) <= 0){
      stickLeft.style.top = stickLeft.style.top;
    }else{
      stickLeft.style.top = pxAdd(parseInt(stickLeft.style.top) - 30);
   }
    break;
  case 83:
    if(parseInt(stickLeft.style.top) + 85 >= window.innerHeight){
      stickLeft.style.top = stickLeft.style.top;
    }else{
      stickLeft.style.top = pxAdd(parseInt(stickLeft.style.top) + 30);
   }
   break;
  case 38:
    if(parseInt(stickRight.style.top) <= 0){
      stickRight.style.top = stickRight.style.top;
    }else{
      stickRight.style.top = pxAdd(parseInt(stickRight.style.top) - 30);
   }
    break;
  case 40:
   if(parseInt(stickRight.style.top) + 85 >= window.innerHeight){
     stickRight.style.top = stickRight.style.top;
   }else{
     stickRight.style.top = pxAdd(parseInt(stickRight.style.top) + 30);
   }
    break;
  default: 
 }