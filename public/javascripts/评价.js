window.onload = function(){
    function backbefor(){
        var oback = document.getElementsByClassName('back');
        console.log(1)
            oback[0].onclick = function(){
            console.log(1)
            window.history.back(-1);
        }
   }
   backbefor()
   var submit = document.querySelector('.submit');
   var text = document.querySelector('textarea');
   var vantoast = document.querySelector('.van-toast')
   console.log(text.innerHTML)
   submit.onclick = function(){
      if(text.innerHTML ==''){
         vantoast.style.display = 'block';
         none(vantoast)
      }else{
          
      }
   }
   function none(aa){
    var timer = setInterval(function(){
        clearInterval(timer);
        aa.style.display = 'none';
    },3000)
}
}