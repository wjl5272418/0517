window.onload = function(){
    function getCookie(name){
        var strCookie=document.cookie;
        var arrCookie=strCookie.split("; ");
        for(var i=0;i<arrCookie.length;i++){
        var arr=arrCookie[i].split("=");
        if(arr[0]==name)return arr[1];
        }
        return "";
        
        }
       var password = getCookie('password');
       console.log(password)
       
       var ipt = document.querySelector('input');
       var savebtn = document.querySelector('.save-btn');
       var vtttext = document.querySelector('.van-toast_text');
       var oload = document.getElementsByClassName('load');
       var vtt = document.querySelector('.van-toast');
       console.log(ipt)
       console.log(oload[0])
       savebtn.onclick = function(){
           if(ipt.value == ''){
                oload[0].style.display = 'block';
                loading();
                block(vtt);
                none(vtt);
           }else if(ipt.value.length < 6){
                oload[0].style.display = 'block';
                loading();
                vtttext.innerHTML = '密码不能小于六位';
                block(vtt);
                none(vtt);
           }else{
                SetCookie('password', ipt.value);
                window.location.href="我的.html";
           }
       }

       function GetCookie(name) {
        var arg = name + "=";
        var alen = arg.length;
        var clen = window.document.cookie.length;
        var i = 0;
        while (i < clen) {
            var j = i + alen;
            if (window.document.cookie.substring(i, j) == arg) return getCookieVal(j);
            i = window.document.cookie.indexOf(" ", i) + 1;
            if (i == 0)
                break;
        }
        return null;
    }

    function getCookieVal(offset) {
        var endstr = window.document.cookie.indexOf(";", offset);
        if (endstr == -1)
            endstr = window.document.cookie.length;
        return unescape(window.document.cookie.substring(offset, endstr));
    }
    function SetCookie(name, value) {
        var exp = new Date();
        exp.setTime(exp.getTime() + (30 * 24 * 60 * 60 * 1000));
        window.document.cookie = name + "=" + escape(value) + "; expires=" + exp.toGMTString() + ";path=/";
    }

    
        

       var timer = null;
       function block(bb){
           var timer = setInterval(function(){
               clearInterval(timer);
               bb.style.display = 'block';
               timer = null;
           },300)
       }
   
       function none(aa){
           var timer = setInterval(function(){
               clearInterval(timer);
               aa.style.display = 'none';
           },3000)
       }

       function loading(){
        var timer = setInterval(function(){
            oload[0].style.display = 'none';
        },200)
    }
    
    // 返回上一级
    function backbefor(){
        var oback = document.getElementsByClassName('back');
            oback[0].onclick = function(){
            window.history.back(-1);
        }
   }
   backbefor()
}