(function(win, doc){
  'use strict';
  
  function updt() {
    var 
      d = new Date(),
      hh = d.getHours(),
      mm = d.getMinutes(),
      ss = d.getSeconds(),
      h1 = Math.floor(hh/10),
      h2 = hh%10,
      m1 = Math.floor(mm/10),
      m2 = mm%10,
      s1 = Math.floor(ss/10),
      s2 = ss%10
    ;
    
    var clock = document.getElementsByClassName('clock')[1];
    clock.getElementsByClassName('h1')[0].innerHTML = h1;
    clock.getElementsByClassName('h2')[0].innerHTML = h2;
    clock.getElementsByClassName('m1')[0].innerHTML = m1;
    clock.getElementsByClassName('m2')[0].innerHTML = m2;
    clock.getElementsByClassName('s1')[0].innerHTML = s1;
    clock.getElementsByClassName('s2')[0].innerHTML = s2;
    clock.getElementsByClassName('colon')[0].classList.toggle("blink");
    clock.getElementsByClassName('colon')[1].classList.toggle("blink");
    setTimeout(updt, 1000);
  }
  updt();
})(window, document)
