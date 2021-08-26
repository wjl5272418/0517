
window.onload = function(){
    var surebtn = document.getElementsByClassName('sure-btn');
    var ipt = document.getElementsByTagName('input');
    var vtt = document.getElementsByClassName('van-toast');
    var vtttext = document.getElementsByClassName('van-toast_text');   
    var codebtn = document.getElementsByClassName('code-btn');
    var oload = document.getElementsByClassName('load');
    console.log(ipt[1])
    surebtn[0].onclick = function(){
        if(ipt[0].value == ''){
            oload[0].style.display = 'block';
            loading();
            block(vtt[0]);
            none(vtt[0]);
        }else if(ipt[1].value == ''){
            oload[0].style.display = 'block';
            loading();
            vtttext[0].innerHTML = '请输入手机号';
            block(vtt[0]);
            none(vtt[0]);
        }else if(ipt[1].value.length !== 11 && ipt[1].value[0] !== 1){
            oload[0].style.display = 'block';
            loading();
            vtttext[0].innerHTML = '您输入的手机号格式不正确';
            block(vtt[0]);
            none(vtt[0]);
        }else if(ipt[2].value == ''){
            oload[0].style.display = 'block';
            loading();
            vtttext[0].innerHTML = '请输入短信验证码';
            block(vtt[0]);
            none(vtt[0]);
        }else if(ipt[3].value == ''){
                oload[0].style.display = 'block';
                loading();
                vtttext[0].innerHTML = '请输入密码';
                block(vtt[0]);
                none(vtt[0]);
            }else if(ipt[3].value.length < 6){
                oload[0].style.display = 'block';
                loading();
                vtttext[0].innerHTML = '密码必须大于等于六位';
                block(vtt[0]);
                none(vtt[0]);
            }else{
                console.log(ipt[1].value)
                console.log(ipt[3].value)
                SetCookie('username', ipt[1].value);
                SetCookie('password', ipt[3].value);
                alert("Saved!");
                 window.location.href="登录.html";
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

    ipt[1].onkeyup = function(){
        var oValue = ipt[1].value;
        // console.log(oValue)
            if(oValue[0] == 1 && oValue.length == 11){
                // console.log(123)
                codebtn[0].removeAttribute('disabled');
                codebtn[0].className = 'code-btn success';
            }else{
               codebtn[0].className = 'code-btn';
        }
    }

    codebtn[0].onclick = function(){
        if(codebtn[0].className = 'code-btn success'){
            oload[0].style.display = 'block';
            loading();
            var i = 10;
            var timer = null;
            var timer = setInterval(function(){
                if(i == 0){
                    clearInterval(timer);
                    codebtn[0].innerHTML = '获取短信验证码';
                    codebtn[0].removeAttribute('disabled');
                    codebtn[0].className = 'code-btn success';  
                }else{
                    i--;
                    codebtn[0].innerHTML = '重新获取' + '(' + i + ')';
                    codebtn[0].className = 'code-btn';
                    codebtn[0].disabled = true;
                }  
            },1000); 
        }
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

    // 登录页面js

    
}
