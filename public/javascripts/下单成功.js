window.onload = function(){
    function backbefor(){
        var oback = document.getElementsByClassName('back');
        console.log(1)
            oback[0].onclick = function(){
            console.log(1)
            window.location.href= '确认订单.html';
        }
   }
   backbefor()
   var list = document.querySelectorAll('.list');
   console.log(list[2])
   list[2].onclick = function(){
       window.location.href = '全部订单.html';
   }
   let random = JSON.parse(localStorage.getItem('b')) 
   console.log(random)
   var ordernum = document.querySelector('.ordernum');
   ordernum.innerHTML = '订单编号：' + random

}