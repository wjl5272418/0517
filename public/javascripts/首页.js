window.onload = function(){
    // 热门搜索
    function search(){
        var skw = document.querySelectorAll('.search-keywords-wrap');
        var xhr = new XMLHttpRequest();
        xhr.open('get','http://vueshop.glbuys.com/api/home/public/hotwords?token=1ec949a15fb709370f');
        xhr.send();
        xhr.onreadystatechange = function(){
            if(this.readyState === 4){
                aa = JSON.parse(xhr.response);
                for(var i = 0; i < aa.data.length; i++){
                    skw[1].innerHTML +=
                    `
                    <div class="keywords">${aa.data[i].title}</div>
                    `
                }
                var keywords = skw[1].querySelectorAll('.keywords');
                for(let i = 0; i < keywords.length; i++){
                    keywords[i].onclick = function(){
                        window.localStorage.setItem('cc',keywords[i].innerHTML);
                        window.location.href="搜索页面.html";
                    }
                }
            }
        }
    }
    search()

    var osearch = document.getElementById('search');
    var oboxa = document.getElementById('box-a');
    var osc = document.getElementsByClassName('search-component');
    var navbottom = document.getElementById('nav-bottom');
    osearch.onclick = function(){
        oboxa.style.display = 'none';
        osc[0].style.display = 'block';
        navbottom.style.display = 'none';
    }

    var oclose = document.getElementsByClassName('close')[0];
    oclose.onclick = function(e){
        e.stopPropagation();
        osc[0].style.display = 'none';
        opage[0].style.display = 'none';
        oboxa.style.display = 'block';
        navbottom.style.display = 'block';
    }

    var navtop = document.getElementById('nav-top');
    var opage = document.getElementsByClassName('page');
    var oli = navtop.querySelector('li')
														
    oli.onclick = function(){
        oboxa.style.display = 'none';
        navbottom.style.display = 'none';
        opage[0].style.display = 'block';
    }

    function backbefor(){
        var oback = document.getElementsByClassName('back');
        oback[0].onclick = function(){
            oboxa.style.display = 'block';
            navbottom.style.display = 'block';
            opage[0].style.display = 'none';
        }
    }
    backbefor()

    var osearchb = document.getElementsByClassName('search')
    osearchb[0].onclick = function(){
        oboxa.style.display = 'none';
        navbottom.style.display = 'none';
        opage[0].style.display = 'none';
        osc[0].style.display = 'block';
        var oclose = document.getElementsByClassName('close')[0];
        oclose.onclick = function(){
            oboxa.style.display = 'none';
            osc[0].style.display = 'none';
            navbottom.style.display = 'none';
            opage[0].style.display = 'block';
        }
    }
    
    var olic = navtop.getElementsByTagName('li')
    olic[2].onclick = function(){
        window.location.href="登录.html";
    }

    window.onscroll=function(){
        var t = document.documentElement.scrollTop || document.body.scrollTop; //获取滚动距离
        if(t >= 200){
            navtop.className = 'navtop';
        }else{
            navtop.className = '';
        }
    }


    // 搜索部分
    var bin = document.querySelector('.bin');
    var vanoverlay = document.querySelector('.van-overlay');
    var clearmess = document.querySelector('.clearmess');
    bin.onclick = function(){
        vanoverlay.style.display = 'block';
        clearmess.style.display = 'block';
    }
    var clearmessleft = document.querySelector('.clearmess-left');
    clearmessleft.onclick = function(){
        vanoverlay.style.display = 'none';
        clearmess.style.display = 'none';
    }
   
}

