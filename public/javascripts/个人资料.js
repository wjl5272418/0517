window.onload = function(){
    var ipt = document.querySelectorAll('input');
    var vanoverlay = document.querySelector('.van-overlay');
    var vanpopup = document.querySelector('.van-popup');
    console.log(ipt)
    ipt[2].onclick = function(){
        vanoverlay.style.display = 'block';
        vanpopup.style.display = 'block';
    }
    var close = document.querySelector('.van-icon-close');
    var vasc = document.querySelector('.van-action-sheet__cancel');
    function cs(aa){
        aa.onclick = function(){
            vanoverlay.style.display = 'none';
            vanpopup.style.display = 'none';
        }
    }
    cs(close)
    cs(vanoverlay)
    cs(vasc)
   
    var mantop = document.querySelectorAll('.van-hairline--top')
    var man = document.querySelectorAll('.van-action-sheet__name')
        mantop[0].onclick = function(){
            console.log(1)
            ipt[2].value = man[0].innerHTML;
        }

        mantop[1].onclick = function(){
            console.log(1)
            ipt[2].value = man[1].innerHTML;
        }
        
        // 返回上一级
        function backbefor(){
            var oback = document.getElementsByClassName('back');
            console.log(1)
                oback[0].onclick = function(){
                console.log(1)
                window.history.back(-1);
            }
       }
       backbefor()

}