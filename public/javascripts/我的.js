window.onload = function(){
    var aa = window.localStorage.getItem('xx');
    var oul = document.querySelectorAll('ul');
    var menulistwrap = document.querySelector('.menu-list-wrap');
    var nickname = document.querySelector('.nickname');
    
    var btn = document.querySelector('.btn');
    var vanoverlay = document.querySelector('.van-overlay');
    var vanbtn = document.querySelectorAll('.van-button');
    var vandialog = document.querySelector('.van-dialog');
        
            if(aa == 'ok'){
                    btn.innerHTML = '安全退出';
                    nickname.innerHTML = '会员v_ip';
                }else if(aa =='no'){
                    btn.innerHTML = '登录/注册';
                    btn.onclick = function(){
                        console.log(2)
                        window.location.href = '登录.html'  
                }
            }
        
          if(btn.innerHTML == '登录/注册'){
            btn.onclick = function(){
                console.log(1)
                window.location.href = '登录.html'  
            }
        }else if(btn.innerHTML == '安全退出'){
            btn.onclick = function(){
                console.log(3)
                vanoverlay.style.display = 'block';
                vandialog.style.display = 'block';
            }
            vanbtn[1].onclick = function(){
                console.log(4)
                vanoverlay.style.display = 'none';
                vandialog.style.display = 'none';
                window.localStorage.xx = 'no';
                let list = JSON.parse(localStorage.getItem('recent'))
                console.log(list)
                for(let i =0;i<list.length;i++){
                    list.splice(i, list.length)
                }
                localStorage.setItem('recent', JSON.stringify(list))
                btn.innerHTML = '登录/注册';
                nickname.innerHTML = '昵称';
                btn.onclick = function(){
                    console.log(2)
                    window.location.href = '登录.html'  
                }
                oul[0].onclick = function(){
                    window.location.href="登录.html";
                }
                oul[1].onclick = function(){
                    window.location.href="登录.html";
                }
                oul[2].onclick = function(){
                    window.location.href="登录.html";
                }
                oul[3].onclick = function(){
                    window.location.href="登录.html";
                }
                oul[4].onclick = function(){
                    window.location.href="登录.html";
                }
            }
            vanbtn[0].onclick = function(){
                console.log(5)
                vanoverlay.style.display = 'none';
                vandialog.style.display = 'none';
            }
        }

        oul[0].onclick = function(){
            if(aa == 'ok'){
                window.location.href="个人资料.html";
            }else if(aa == 'no'){
                window.location.href="登录.html";
            }
        }
        oul[1].onclick = function(){
            if(aa == 'ok'){
                window.location.href="添加地址.html";
            }else if(aa == 'no'){
                window.location.href="登录.html";
            }
        }
        oul[2].onclick = function(){
            if(aa == 'ok'){
                window.location.href="绑定手机.html";
            }else if(aa == 'no'){
                window.location.href="登录.html";
            }
        }
        oul[3].onclick = function(){
            if(aa == 'ok'){
                window.location.href="修改密码.html";
            }else if(aa == 'no'){
                window.location.href="登录.html";
            }
        }
        oul[4].onclick = function(){
            if(aa == 'ok'){
                window.location.href="我的收藏.html";
            }else if(aa == 'no'){
                window.location.href="登录.html";
            }
        }
    var showorder = document.querySelector('.show-order');
    showorder.onclick = function(){
        if(aa == 'ok'){
            window.location.href = '全部订单.html'
        }else if(aa == 'no'){
            window.location.href="登录.html";
        }
    }
    // var item = document.querySelectorAll('.item');


}