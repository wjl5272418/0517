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
   let ads = JSON.parse(localStorage.getItem('cccc'))
   var addressinfo = document.querySelector('.address-info');
   addressinfo.innerHTML = 
   `
   <div class="name">
        <img src="./images/img/tb1.png" alt="">
        ${ads[0]}
        </div>
        <div class="cellphone">
        <img src="./images/img/tb2.png" alt="">
        ${ads[1]}
    </div>
    <div class="address"> ${ads[2]} ${ads[3]}</div>
   `
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
                var ordernum = document.querySelector('.ordernum');
                var total = document.querySelector('.total');
                var oli = total.querySelectorAll('li');
                var goodsbox = document.querySelector('.goods-box');
                ordernum.innerHTML = '订单编号：' + random;
                oli[1].innerHTML =  money
                var truetotal = document.querySelector('.true-total');
                var ospan = truetotal.querySelector('span')
                ospan.innerHTML = '实付金额：' + money 
                goodsbox.innerHTML += 
                `
                <div class="goods-list">
                    <div class="image">
                        <img src="${aa.data.images[0]}" alt="">
                    </div>
                    <div class="goods-info">
                        <div class="title">${aa.data.title}</div>
                        <div class="attr">
                            <span class="amount">×1</span>
                            <span>颜色：${color}</span>
                            <span>尺码：${size}</span>
                        </div>
                    </div>
                    <div class="price">${aa.data.price}</div>
                </div>
                `
            }
        }
    }
}