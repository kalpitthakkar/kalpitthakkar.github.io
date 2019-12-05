(function(win, doc){
  'use strict';
  
  var $ = doc.querySelector.bind(doc)
  
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
      s2 = ss%10,
      bh1 = ('0000' + h1.toString(2)).slice(-4),
      bh2 = ('0000' + h2.toString(2)).slice(-4),
      bm1 = ('0000' + m1.toString(2)).slice(-4),
      bm2 = ('0000' + m2.toString(2)).slice(-4),
      bs1 = ('0000' + s1.toString(2)).slice(-4),
      bs2 = ('0000' + s2.toString(2)).slice(-4)
    ;
    
    for(var i = 4; i > 0; i--) {
      if(bh1.substring(i-1, i) == '1')
        $('.h1' + i).classList.add('on')
      else
        $('.h1' + i).classList.remove('on')
      if(bh2.substring(i-1, i) == '1')
        $('.h2' + i).classList.add('on')
      else
        $('.h2' + i).classList.remove('on')
      if(bm1.substring(i-1, i) == '1')
        $('.m1' + i).classList.add('on')
      else
        $('.m1' + i).classList.remove('on')
      if(bm2.substring(i-1, i) == '1')
        $('.m2' + i).classList.add('on')
      else
        $('.m2' + i).classList.remove('on')
      if(bs1.substring(i-1, i) == '1')
        $('.s1' + i).classList.add('on')
      else
        $('.s1' + i).classList.remove('on')
      if(bs2.substring(i-1, i) == '1')
        $('.s2' + i).classList.add('on')
      else
        $('.s2' + i).classList.remove('on')
    }

    var clock = document.getElementsByClassName('clock')[1];
    clock.getElementsByClassName('h1')[0].innerHTML = h1;
    clock.getElementsByClassName('h2')[0].innerHTML = h2;
    clock.getElementsByClassName('m1')[0].innerHTML = m1;
    clock.getElementsByClassName('m2')[0].innerHTML = m2;
    clock.getElementsByClassName('s1')[0].innerHTML = s1;
    clock.getElementsByClassName('s2')[0].innerHTML = s2;
    clock.getElementsByClassName('colon')[0].classList.toggle("blink");
    clock.getElementsByClassName('colon')[1].classList.toggle("blink");
  }
  setInterval(updt, 1000);
  updt();
})(window, document)
