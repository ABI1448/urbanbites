var bri=document.getElementById("bripng")
var wp=document.getElementById("woodpic")
var trp=document.getElementById("tp")
var pi=document.getElementById("pizz")




window.addEventListener('scroll', ()=>{
   var value = window.scrollY;
   
   bri.style.left = value * 1 + 'px'; 
   bri.style.marginBottom= value * 1 + 'px';  

   wp.style.right = value * 1 + 'px'; 
   wp.style.marginBottom= value * .5 + 'px';  
   
   trp.style.left = value * .5 + 'px';

   

});


