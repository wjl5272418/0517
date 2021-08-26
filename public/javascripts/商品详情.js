window.onload = function(){
   

    function backbefor(){
         var oback = document.getElementsByClassName('back');
         console.log(1)
             oback[0].onclick = function(){
             console.log(1)
             window.history.back(-1);
         }
    }
    backbefor();
    
    (function(){
        var opage = document.getElementsByClassName('page');
        var tabname= document.getElementsByClassName('tab-name');
        opage[1].style.display = 'none';
        opage[2].style.display = 'none';
        for(var i = 0; i < tabname.length; i++){
            tabname[i].index = i;
            tabname[i].onclick = function(){
                for(var j = 0; j < tabname.length; j++){
                    tabname[j].className = 'tab-name';
                    opage[j].style.display = 'none';
                }
                this.className = 'tab-name active';
                opage[this.index].style.display = 'block';
            }
        }
        var reviewsmore = document.getElementsByClassName('reviews-more');
        console.log(reviewsmore[0])
        reviewsmore[0].onclick = function(){
            console.log(1)
            tabname[0].className = 'tab-name';
            tabname[2].className = 'tab-name active';
            opage[0].style.display = 'none';
            opage[1].style.display = 'none';
            opage[2].style.display = 'block';
        }
    })();

   (function(){
       var cart = document.getElementsByClassName('cart');
       var omask = document.getElementsByClassName('mask');
       var cartpanel = document.getElementsByClassName('cart-panel');
       cart[0].onclick = function(){
           console.log(1)
        omask[0].style.display = 'block';
        cartpanel[0].style.display = 'block';
       }
       var oclose = document.getElementsByClassName('close');
       oclose[0].onclick = function(){
        omask[0].style.display = 'none';
        cartpanel[0].style.display = 'none';
       }
   })()

//    商品主面
        var gtl = document.querySelectorAll('.goods-title');
        var pc = document.querySelectorAll('.price');
        var oimg = document.querySelectorAll('img');
        var oli = document.querySelectorAll('li');
        var ocontent = document.querySelector('.content');
        var goodscode = document.querySelector('.goods-code');
        var swiper = document.querySelector('.swiper-wrapper')
        console.log(oli)
        console.log(oimg)
        console.log(window.localStorage.getItem('aa'));
        var xhr = new XMLHttpRequest();
        xhr.open('get','http://vueshop.glbuys.com//api/home/goods/info?gid='+window.localStorage.getItem('aa')+'&type=details&token=1ec949a15fb709370f');
        xhr.send();
        xhr.onreadystatechange = function(){
            if(this.readyState === 4){
                bb = JSON.parse(xhr.response);
                gtl[0].innerHTML = bb.data.title;
                gtl[1].innerHTML = bb.data.title;
                pc[0].innerHTML = '￥' + bb.data.price;
                pc[1].innerHTML = '￥' + bb.data.price;
                oimg[0].src = bb.data.images[0];
                oimg[1].src = bb.data.images[0];
                oli[0].innerHTML = '快递：' + bb.data.freight + '元';
                oli[1].innerHTML = '月销量：' + bb.data.sales + '件';
                ocontent.innerHTML = bb.data.bodys;
                goodscode.innerHTML = '商品编码：'+ window.localStorage.getItem('aa');
                console.log(bb.data.images.length)
                for(var i = 0; i < bb.data.images.length; i++){
                    swiper.innerHTML +=
                    `
                    <div class="swiper-slide"><img src="${bb.data.images[i]}" ></div>
                    `
                }
                     // 导航等组件可以放在container之外
                // 轮播图
                var mySwiper = new Swiper ('.swiper-container', {
                    autoplay:true,
                    // loop: true, // 循环模式选项
                    // speed:500,
                    effect:"flip",
                    // 如果需要分页器
                    pagination: {
                    el: '.swiper-pagination',
                    },
                }) 
            }
        }
   
//    评价 
   function appraise(){
        var rbx = document.querySelectorAll('.reviews-box');
        var rtl = document.querySelectorAll('.reviews-title');
        var reviewsmore = document.getElementsByClassName('reviews-more');
        var nodata = document.getElementsByClassName('no-data');
        var xhrb = new XMLHttpRequest();
        xhrb.open('get','http://vueshop.glbuys.com//api/home/reviews/index?gid=' + window.localStorage.getItem('aa') + '&token=1ec949a15fb709370f&page=1');
        xhrb.send();
        xhrb.onreadystatechange = function(){
            if(this.readyState === 4){
                cc = JSON.parse(xhrb.response);
                console.log(cc.data)
                // console.log(cc.pageinfo.pagenum)
                if(cc.data == '没有数据'){
                    rbx[0].innerHTML = ''
                    rbx[1].innerHTML = ''
                    reviewsmore[0].style.display = 'none'
                    rtl[0].innerHTML = '商品评价(0)';
                    rtl[1].innerHTML = '商品评价(0)';
                    nodata[0].style.display = 'block';
                    nodata[1].style.display = 'block'

                }else{
                    for(var i = 0; i < cc.data.length; i++){
                    rbx[0].innerHTML += 
                    `
                    <div class="reviews-wrap">
                        <div class="reviews-list">
                            <div class="uinfo">
                                <div class="head"><img src="${cc.data[i].head}" alt="" class="pic"></div>
                                <div class="nickname">${cc.data[i].nickname}</div>
                            </div>
                            <div class="reviews-content">${cc.data[i].content}</div>
                            <div class="reviews-date">${cc.data[i].times}</div>
                        </div>
                    </div>
                `

                }
                //  for(let j = 0; j < cc.pageinfo.pagenum; j++){
                //     var xhre = new XMLHttpRequest();
                //     xhre.open('get','http://vueshop.glbuys.com//api/home/reviews/index?gid=' + window.localStorage.getItem('aa') + '&token=1ec949a15fb709370f&page=' + (j+1));
                //     xhre.send();
                //     xhre.onreadystatechange = function(){
                //         if(this.readyState === 4){
                //             gg = xhre.response;
                //             console.log(gg)
                //             rbx[1].innerHTML += 
                //             `
                //             <div class="reviews-wrap">
                //                 <div class="reviews-list">
                //                     <div class="uinfo">
                //                         <div class="head"><img src="${gg.data[i].head}" alt="" class="pic"></div>
                //                         <div class="nickname">${gg.data[i].nickname}</div>
                //                     </div>
                //                     <div class="reviews-content">${gg.data[i].content}</div>
                //                     <div class="reviews-date">${gg.data[i].times}</div>
                //                 </div>
                //             </div>
                //         `
                //         }
                //     }
                // }
                for (let j = 0; j < cc.pageinfo.pagenum; j++) {
                    axios
                        .get(
                            "http://vueshop.glbuys.com/api/home/reviews/index?gid=" +
                                window.localStorage.getItem("aa") +
                                "&token=1ec949a15fb709370f&page=" +
                                (j + 1)
                        )
                        .then((response) => {
                            // console.log(response.data);
                            rbx[1].innerHTML += response.data.data
                                .map((v, i) => {
                                    return `
                                    <div class="reviews-wrap">
                                        <div class="reviews-list">
                                        <div class="uinfo">
                                            <div class="head"><img src="${v.head}" alt="" class="pic"></div>
                                            <div class="nickname">${v.nickname}</div>
                                        </div>
                                        <div class="reviews-content">${v.content}</div>
                                        <div class="reviews-date">${v.times}</div>
                                    </div>
                                </div>
                                    `;
                                })
                                .join("");
                        });
                }
                
                rtl[0].innerHTML = '商品评价（' + cc.pageinfo.total + ')';
                rtl[1].innerHTML = '商品评价（' + cc.pageinfo.total + ')';
                }
            }
        }
   }
   appraise();

//    商品样式
        var attrlist = document.querySelectorAll('.attr-list');
        var attrname = document.querySelectorAll('.attr-name');
        var valwrap = document.querySelectorAll('.val-wrap');
        var goodsimg= document.querySelector('.goods-img');
        var pic = goodsimg.querySelector('img')
        var xhrc = new XMLHttpRequest();
        xhrc.open('get','http://vueshop.glbuys.com/api/home/goods/info?gid=' + window.localStorage.getItem('aa') + '&type=spec&token=1ec949a15fb709370f');
        xhrc.send();
        xhrc.onreadystatechange = function(){
            if(this.readyState === 4){
                dd = JSON.parse(xhrc.response);
                if(dd.data.length > 1){
                    attrname[0].innerHTML = dd.data[0].title;
                    attrname[1].innerHTML = dd.data[1].title;
                    for(var i = 0; i < dd.data[0].values.length; i++){
                        valwrap[0].innerHTML +=
                        `
                        <span class="val">${dd.data[0].values[i].value}</span>
                        `  
                    }
                    for(var j = 0; j < dd.data[1].values.length; j++){
                        valwrap[1].innerHTML +=
                        `
                            <span class="val">${dd.data[1].values[j].value}</span>
                        ` 
                    }
                }else{
                    attrname[0].innerHTML = dd.data[0].title;
                    for(var i = 0; i < dd.data[0].values.length; i++){
                        valwrap[0].innerHTML +=
                        `
                        <span class="val">${dd.data[0].values[i].value}</span>
                        `  
                    }
                }

                var vala = valwrap[0].getElementsByClassName('val');
                var valb = valwrap[1].getElementsByClassName('val');
                var surebtn = document.querySelector('.sure-btn');
                var vtt = document.querySelector('.van-toast');
                console.log(surebtn)
                console.log(vtt)
                console.log(vala[0])
                for(var i = 0; i < vala.length; i++){
                    vala[i].index = i;
                    vala[i].onclick = function(){
                        for(var j = 0; j < vala.length; j++){
                            vala[j].className = 'val';
                        }
                        this.className = 'val active';
                    }
                }

                for(var i = 0; i < valb.length; i++){
                    valb[i].index = i;
                    valb[i].onclick = function(){
                        for(var j = 0; j < valb.length; j++){
                            valb[j].className = 'val';
                        }
                        this.className = 'val active'
                    }
                }

               
                // var arr = [];
            //     if(valb.length == 0){
            //         surebtn.onclick = function(){
            //         var valc = valwrap[0].getElementsByClassName('val active');
            //         var ipt = document.querySelector('input');
            //         var arr = [];
            //         arr.push(bb.data.gid)
            //         arr.push(bb.data.images[0]);
            //         arr.push(bb.data.title);
            //         arr.push(valc[0].innerHTML);
            //         arr.push(ipt.value);
            //         console.log(arr)
            //         res.push(JSON.stringify(arr))
            //         console.log(res)
            //         window.localStorage.setItem('shop',res);
            //         }
            //    }else{
                     // 获取购物车数据
                    // surebtn.onclick = function(){
                    //     var res = [];
                    //     var valc = valwrap[0].getElementsByClassName('val active');
                    //     var vald = valwrap[1].getElementsByClassName('val active');
                    //     var ipt = document.querySelector('input');
                    //     var arr = [];
                    //     arr.push(bb.data.gid)
                    //     arr.push(bb.data.images[0]);
                    //     arr.push(bb.data.title);
                    //     arr.push(valc[0].innerHTML);
                    //     arr.push(vald[0].innerHTML);
                    //     arr.push(ipt.value);
                    //     console.log(arr)
                    //     // res.push(JSON.stringify(arr))
                    //     // console.log(res)
                    //     if (" res" in localStorage) {
                    //         newlist=JSON.parse(localStorage.getItem('arr'));
                    //         res.push(arr);
                    //     } else {
                    //         res=[];
                    //         window.localStorage.setItem('shop',res);
                    //         res.push(arr)
                    //     }
                    //     window.localStorage.setItem('shop',res);
                    // }
                // }
                
                //提示
               var vtt = document.querySelector('.van-toast_text');
               var surebtn=document.querySelector(".sure-btn");
             
               // let newlist =[];//有问题
               
               $('.sure-btn').click(() => {
                   console.log($('#val-wrap2 .val'))
                   if(!$('#val-wrap1 .val').hasClass('active')){
                        vtt.innerHTML="请选择颜色"
                        vtt.style.display = 'block';
                       none(vtt)
                   }else if(!$('#val-wrap2 .val').hasClass('active')){
                       if($('#val-wrap2 .val').length==0){
                           fk();
                       }else{
                        vtt.innerHTML="请选择尺寸"
                        vtt.style.display = 'block';
                        none(vtt)
                       }
                       
                   }else{
                       fk();
                   }
               })
   
               function fk(){
                   window.localStorage.setItem("color",$("#val-wrap1 .active").html())
                   window.localStorage.setItem("size",$("#val-wrap2 .active").html())
                   window.localStorage.setItem("num",$(".amount-input input").val())
                   // console.log($("#val-wrap1 .active").html())//获取颜色
                   // console.log($("#val-wrap2 .active").html())//获取大小
                   // console.log($(".amount-input input").val())//获取值
                   // window.localStorage.setItem("shop",window.localStorage.getItem("aa"))
                   console.log(window.localStorage.getItem("shop"))
                   vtt.innerHTML="加入购物车成功"
                   none(vtt);
                   //判断是否存在数据
                   var newlist
                   if ("recent" in localStorage) {
                       newlist=JSON.parse(localStorage.getItem('recent')) ;
                   } else {
                       newlist=[];
                   }
                   let arr=[];
                   arr.push($("#val-wrap1 .active").html());
                   if($("#val-wrap2 .active").html()==""){
                       arr.push("");
                   }else{
                       arr.push($("#val-wrap2 .active").html());
                   }
                   arr.push($(".amount-input input").val());
                   arr.push(window.localStorage.getItem("aa"));
                   console.log(arr)
                   newlist.push(arr)
                   localStorage.setItem('recent', JSON.stringify(newlist))
                   // let list = JSON.parse(localStorage.getItem('recent')) 
                   
               }
              
                
              
                var fav = document.querySelector('.fav');
                console.log( window.localStorage.getItem('aa'))
                function aa(){
                    var lists
                    if ("str" in localStorage) {
                        lists=JSON.parse(localStorage.getItem('str')) ;
                    } else {
                        lists=[];
                    }
                    let arrs=[];
                    arrs.push(window.localStorage.getItem('aa'));
                    console.log(arrs)
                    lists.push(arrs)
                    console.log(lists)
                    localStorage.setItem('str', JSON.stringify(lists))
                    var brr=[]
        for(let i=0;i<lists.length;i++){
            if(brr.indexOf(lists[i])==-1){
                brr.push(lists[i]);
                console.log(brr)
                vtt.innerHTML="收藏成功"
                $(".van-toast")[0].style.display="block"
                timer=setTimeout(function(){
                    $(".van-toast")[0].style.display="none"
                },1500);
            }else{
                vtt.innerHTML="已收藏过"
                $(".van-toast")[0].style.display="block"
                timer=setTimeout(function(){
                    $(".van-toast")[0].style.display="none"
                },1500);
            }
        }

                }
                fav.onclick = function(){
                    aa()
                    
                }
              
               

                // console.log(vala)
                // console.log(valb.length)
                // surebtn.onclick = function(){
                //     for(var i = 0; i < vala.length; i++){
                //         if(vala[i].className == 'val'){
                //             vtt.style.display = 'block';
                //             none(vtt);
                //             console.log(i)
                //         }else{
                //             for(var k = 0; k < valb.length; k++){
                //                 if(valb[k].className == 'val' ){
                //                     vtt.style.display = 'block';
                //                     vtt.innerHTML = '请选择尺码';
                //                     none(vtt);
                //                     console.log(2)
                //                 }else if(valb[k].className == 'val active'){
                //                     vtt.style.display = 'none';
                //                 }
                //             }
                //         }
                //     }
                // }
                // $('.sure-btn').click(() => {
                //     if(!$('#val-wrap .val'))
                // })
               

                function none(aa){
                    var timer = setInterval(function(){
                        clearInterval(timer);
                        aa.style.display = 'none';
                    },3000)
                }


            }
        }
    
    // 数量加减
    function price(){
        var aa = 1;
        var dec = document.querySelector('.dec');
        var ipt = document.querySelector('input');
        var inc = document.querySelector('.inc');
        inc.onclick = function(){
            aa++;
            ipt.value = aa;
        }
        dec.onclick = function(){
           if(aa > 1){
                aa--;
                ipt.value = aa;
           }else{
                aa = 1;
           }
        }
    }
    price();
   
    // 购物车图标跳转
    var carticon = document.querySelector('.cart-icon');
    console.log(carticon);
    carticon.onclick = function(){
        window.location.href = '购物车.html'
    }

   

}