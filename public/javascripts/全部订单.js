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

   var tags = document.querySelectorAll('.tags');
   var main = document.querySelectorAll('.main');
   console.log(main)
   for(var j = 0; j < tags.length; j++){
        tags[j].index = j;
        tags[j].onclick = function(){
            for( var k = 0; k < tags.length; k++){
                tags[k].className = 'tags';
                main[k].style.display = 'none';
            }
            this.className = 'tags active';
            main[this.index].style.display = 'block'
        }
   }
  

//    var ordernum = document.querySelector('.ordernum');
   
    let list = JSON.parse(localStorage.getItem('recent')) 
    console.log(list)
    let random = JSON.parse(localStorage.getItem('b')) 
    console.log(random)
    let money = JSON.parse(localStorage.getItem('money'))
    console.log(money)
    for(let i =0;i<list.length;i++){
        kf(list[i],i);
    }
    function kf([color,size,num,gid],i){
        var ax=new XMLHttpRequest();
        ax.open("get","http://vueshop.glbuys.com/api/home/goods/info?gid="+gid+"&type=details&token=1ec949a15fb709370f")
        ax.send();
        ax.onreadystatechange=function(){
            if(this.readyState==4){
                var aa=JSON.parse(ax.response);
                console.log(aa.data);
                var itembox = document.querySelector('.item-box');
                var ordernum = document.querySelector('.ordernum');
                var total = document.querySelector('.total');
                console.log(itembox)
                ordernum.innerHTML = '订单编号：' + random;
                total.innerHTML = '实付金额：' + money
                itembox.innerHTML +=
                `
                <div class="item-list">
                    <div class="image">
                        <img src="${aa.data.images[0]}" alt="">
                    </div>
                    <div class="title">${aa.data.title}</div>
                    <div class="amount">×1</div>
                </div>
                `
                var orderlist = document.querySelectorAll('.order-list');
                console.log(orderlist)
                for(let a = 0; a <  orderlist.length; a++){
                    orderlist[a].onclick = function(){
                        window.location.href = '订单详情.html';
                        event.stopPropagation();
                    }
                }
                var statusbtn = document.querySelectorAll('.status-btn');
                var status = document.querySelector('.status');
                console.log(statusbtn)
                statusbtn[0].onclick = function(){
                    event.stopPropagation();
                    $(this).parent().parent().parent().remove();
                    list.splice(i, 1)
                    localStorage.setItem('recent', JSON.stringify(list))
                }
                statusbtn[1].onclick = function(){
                    event.stopPropagation();
                    status.innerHTML = '已收货';
                    statusbtn[0].style.display = 'none'
                    statusbtn[1].style.display = 'none'
                    statusbtn[2].style.display = 'block';
                    
                   
                   
                    main[3].innerHTML +=
                    `
                    <div class="order-list">
                        <div class="ordernum-wrap">
                            <div class="ordernum"></div>
                            <div class="status">已收货</div>
                        </div>
                        <div class="item-box">
                        <div class="item-list">
                        <div class="image">
                            <img src="${aa.data.images[0]}" alt="">
                        </div>
                        <div class="title">${aa.data.title}</div>
                        <div class="amount">×1</div>
                    </div>
                        </div>
                        <div class="total-wrap">
                            <div class="total"></div>
                            <div class="status-wrap">
                                <!-- <div class="status-btn">取消订单</div>
                                <div class="status-btn">去付款</div> -->
                                <div class="status-btn" >评价</div>
                            </div>
                        </div>
                    </div>
                    `
                    var ordernum = document.querySelectorAll('.ordernum');
                    var total = document.querySelectorAll('.total');
                    ordernum[1].innerHTML = '订单编号：' + random;
                    total[1].innerHTML = '实付金额：' + money
                    var stb = main[3].querySelector('.status-btn');
                    console.log(stb)
                    stb.onclick = function(){
                        window.location.href = '评价.html'
                    }
                }
               
            }
        }
    }

   
    
}