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
       var bb = 'ok'
       var username =  getCookie('username');
       var password = getCookie('password');
       
       var vtt = document.querySelector('.van-toast');
       var ipt = document.querySelectorAll('input');
       var surebtn = document.querySelector('.sure-btn');
       var vtttext = document.querySelector('.van-toast_text');
       var oload = document.getElementsByClassName('load');
      
       surebtn.onclick = function(){
           if(ipt[0].value == ''){
                vtttext.innerHTML = '请输入手机号';
                oload[0].style.display = 'block';
                loading();
                block(vtt);
                none(vtt);
           }else if(ipt[0].value.length !== 11 && ipt[0].value[0] !== 1){
                oload[0].style.display = 'block';
                loading();
                vtttext.innerHTML = '您输入的手机号格式不正确';
                block(vtt);
                none(vtt);
           }else if(ipt[1].value == ''){
                oload[0].style.display = 'block';
                loading();
                vtttext.innerHTML = '请输入密码';
                block(vtt);
                none(vtt);
           }else if(ipt[0].value !== username){
            oload[0].style.display = 'block';
            loading();
            vtttext.innerHTML = '您输入的用户名不正确';
            block(vtt);
            none(vtt);
           }else if(ipt[1].value !== password){
            oload[0].style.display = 'block';
            loading();
            vtttext.innerHTML = '您输入的用户名或密码不正确';
            block(vtt);
            none(vtt);
           }else{
                window.localStorage.setItem('xx',bb);
                window.location.href="我的.html";
           }
       }

       var timer = null;
       function block(bb){
           var timer = setInterval(function(){
               clearInterval(timer);
               console.log(11)
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
        console.log(1)
            oback[0].onclick = function(){
            console.log(1)
            window.history.back(-1);
        }
   }
   backbefor()
       
      
}