window.onload = function(){
     // 点击显示隐藏加变色
     var orderitem = document.querySelectorAll('.order-item');
     var ordertext = document.querySelectorAll('.order-text');
     var ordermenu = document.querySelector('.order-menu');
     console.log(ordermenu)
     console.log(orderitem)
     var flag = true;
     var searchtext = document.querySelector('.search-text');
     searchtext.innerHTML = window.localStorage.getItem('cc');
     orderitem[0].onclick = function(){
         console.log(1)
         if(flag == true){
             ordermenu.style.display = 'block';
             orderitem[0].className = 'order-item active'
         }else{
             ordermenu.style.display = 'none';
             orderitem[0].className = 'order-item'
         }
         flag = !flag;
     }

    
    var goodsmain = document.querySelector('.goods-main');
    var ordermenu = document.querySelector('.order-menu');
    var oli = ordermenu.querySelectorAll('li');
    var ff = true;
    var dd = true;
    var xhr = new XMLHttpRequest();
    xhr.open('get','http://vueshop.glbuys.com/api/home/goods/search?kwords=' + window.localStorage.getItem('cc') + '&otype=all&token=1ec949a15fb709370f');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(this.readyState === 4){
            aa = JSON.parse(xhr.response);
            if(oli[0].className = 'activeb'){
                function aaa(){
                    for(var i = 0; i < aa.data.length; i++){
                        goodsmain.innerHTML +=
                        `
                        <div class="goods-list">
                            <div class="image">
                                <img src="${aa.data[i].image}" alt="">
                            </div>
                            <div class="goods-content">
                                <div class="goods-title">${aa.data[i].title}</div>
                                <div class="price">￥ <span class='prices'>${aa.data[i].price}</span></div>
                                <div class="sales">
                                    销量
                                    <span>${aa.data[i].sales}</span>
                                    件
                                </div>
                            </div>
                         </div>
                        `
                       
                        var goodslist = document.getElementsByClassName('goods-list');
                        for(let i = 0; i < goodslist.length; i++){
                            goodslist[i].onclick = function(){
                                window.localStorage.setItem('aa',aa.data[i].gid);
                                window.location.href="商品详情.html";
                            }
                        }
                    }
                }
            }
            aaa()  

            var load = document.querySelector('.load');
            function loading(){
                var timer = setInterval(function(){
                    load.style.display = 'none';
                },200)
            }

            oli[0].onclick = function(){
                oli[0].className = 'activeb'
                oli[1].className = '';
                oli[2].className = '';
                goodsmain.innerHTML = "";
                if(oli[0].className = 'activeb'){
                    load.style.display = 'block';
                    loading()
                    aaa()
                }
            }
           

            // 点击排序
            oli[1].onclick = function(){
               for(var i = 0; i < oli.length ;i++){
                   oli[i].className = '';
               }
               this.className = 'activeb';
               load.style.display = 'block';
               loading()
               bubbleSortsm()
            }
            var prices = document.querySelectorAll('.prices');
            // 价格排序从小到大
            function bubbleSortsm(){
                var arr = [];
                var sf;
                for(var k = 0; k < prices.length; k++){
                    prices[k].setAttribute('index',k);
                    arr.push(parseFloat(prices[k].innerHTML))
                }
                console.log(prices);
                console.log(arr);
                console.log(arr.length);
                arr.sort(function(value1,value2){
                    return value1 - value2;
                })
                console.log(arr)
                goodsmain.innerHTML = "";
                for(var i = 0; i < arr.length; i++){
                    for(var j = 0; j < arr.length; j++){
                        if(arr[i] == prices[j].innerHTML){
                            var bb = prices[j].getAttribute('index');
                            goodsmain.innerHTML +=
                                `
                                <div class="goods-list">
                                    <div class="image">
                                        <img src="${aa.data[bb].image}" alt="">
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-title">${aa.data[bb].title}</div>
                                        <div class="price">￥ <span class='prices'>${aa.data[bb].price}</span></div>
                                        <div class="sales">
                                            销量
                                            <span>${aa.data[bb].sales}</span>
                                            件
                                        </div>
                                    </div>
                                </div>
                                `
                        }
                    }
                }
            }

            oli[2].onclick = function(){
                if(dd == true){
                    oli[0].className = '';
                    oli[1].className = '';
                    oli[2].className = 'activeb';
                    load.style.display = 'block';
                    loading()
                    bubbleSortbg()
                }else{
                    oli[1].className = '';
                }
                
            }
            
            // 价格排序从大到小
            function bubbleSortbg(){
                var arr = [];
                var sf;
                for(var k = 0; k < prices.length; k++){
                    prices[k].setAttribute('index',k);
                    arr.push(parseFloat(prices[k].innerHTML))
                }
                console.log(prices);
                console.log(arr);
                console.log(arr.length);
                arr.sort(function(value1,value2){
                    return value2 - value1;
                })
                console.log(arr)
                goodsmain.innerHTML = "";
                for(var i = 0; i < arr.length; i++){
                    for(var j = 0; j < arr.length; j++){
                        if(arr[i] == prices[j].innerHTML){
                            var bb = prices[j].getAttribute('index');
                            goodsmain.innerHTML +=
                                `
                                <div class="goods-list">
                                    <div class="image">
                                        <img src="${aa.data[bb].image}" alt="">
                                    </div>
                                    <div class="goods-content">
                                        <div class="goods-title">${aa.data[bb].title}</div>
                                        <div class="price">￥ <span class='prices'>${aa.data[bb].price}</span></div>
                                        <div class="sales">
                                            销量
                                            <span>${aa.data[bb].sales}</span>
                                            件
                                        </div>
                                    </div>
                                </div>
                                `
                        }
                    }
                }
            }
            
            
        }
    }


    function close(){
        var screenbtn = document.querySelector('.screen-btn');
        var mask = document.querySelector('.mask');
        var screen = document.querySelector('.screen');
        console.log(screen)
        screenbtn.onclick = function(){
            mask.style.display = 'block';
            screen.style.display = 'block'
        }
        mask.onclick = function(){
            console.log(1)
            mask.style.display = 'none';
            screen.style.display = 'none'
        }
        var back = document.querySelector('.back');
        back.onclick = function(){
            window.location.href = '首页.html';
        }
    }
    close()


    // 点击变色
    orderitem[1].onclick = function(){
        console.log(1)
        if(flag == true){
            orderitem[1].className = 'order-item active'
        }else{
            orderitem[1].className = 'order-item'
        }
        flag = !flag;
    }
    // 点击变色
    // var oli = ordermenu.querySelectorAll('li');
    // console.log(oli)
    // for(var i = 0; i < oli.length; i++){
    //     oli[i].index = i;
    //     oli[i].onclick = function(){
    //        for(var j = 0; j < oli.length; j++){
    //            oli[j].className = '';
    //        }
    //        this.className = 'activeb';
    //     }
    // }
   


}