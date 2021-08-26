window.onload=function(){
    let ss = JSON.parse(localStorage.getItem('cccc')) 
    console.log(ss)
    var addresswrap = document.querySelector('.address-wrap');
        console.log(addresswrap)
    var aaaa = window.localStorage.getItem('numb');
    console.log(aaaa)
    // console.log(typeof(aaaa))
    // console.log(typeof("yes"))
    console.log(aaaa==123)
    if(aaaa== 123){
        console.log(1)
        addresswrap.innerHTML = 
        ` 
        <div class="persion-info" style="display: none;">
                    <span>收货人：${ss[0]}</span>
                    <span>${ss[1]}</span>
                </div>
                <div class="address" style="display: none;">
                    <img src="./images/home/cart/map.png" alt="">
                    <span>${ss[2]}${ss[3]}</span>
                </div>
                <div class="address-null" >
                    您的收货地址为空，点击添加收货地址
                </div>
                <div class="arrow"></div>
                <div class="address-border-wrap">
                    <div class="trapezoid style1"></div>
                    <div class="trapezoid style2"></div>
                    <div class="trapezoid style1"></div>
                    <div class="trapezoid style2"></div>
                    <div class="trapezoid style1"></div>
                    <div class="trapezoid style2"></div>
                    <div class="trapezoid style1"></div>
                    <div class="trapezoid style2"></div>
                    <div class="trapezoid style1"></div>
                    <div class="trapezoid style2"></div>
                </div>
        `
        var addressnull = document.querySelector('.address-null');
        var persioninfo = document.querySelector('.persion-info');
        var address = document.querySelector('.address');
        console.log(addressnull)
        addressnull.style.display = 'none'
        persioninfo.style.display = 'block'
        address.style.display = 'block'

    }else{
        var addressnull = document.querySelector('.address-null');
        var persioninfo = document.querySelector('.persion-info');
        var address = document.querySelector('.address');
        console.log(addressnull)
        addressnull.style.display = 'block'
        persioninfo.style.display = 'none'
        address.style.display = 'none'
    }


    let list = JSON.parse(localStorage.getItem('recent')) 
    console.log(list)
    var sum=window.localStorage.getItem("sum")
    sum=Number(sum).toFixed(2)
    
    var kk=JSON.parse(localStorage.getItem('nums')) 
    
    
    hgt();
    function hgt(){
        var subheader=document.querySelector(".sub-header");
        // var back=subheader.querySelector(".back");
        var arrow=document.querySelector(".arrow");
        //提交订单
        var balancebtn=document.querySelector(".balance-btn");
        balancebtn.onclick=function(){
            window.location.href="下单成功.html"
           var b="";
            for(let i=0;i<9;i++){
                var arr=parseInt(Math.random()*10);
                arr=String(arr);
                b=b+arr
            }
            console.log(b)
            localStorage.setItem('b',JSON.stringify(b))
        }

        arrow.onclick=function(){
            window.location.href="选择收货地址.html"
        }
        // console.log(back)
      
        for(let i =0;i<list.length;i++){
            fksd(list[i],i,kk);
        }
        function fksd([color,size,num,gid],i,kk){
            var ax=new XMLHttpRequest();
            ax.open("get","http://vueshop.glbuys.com/api/home/goods/info?gid="+gid+"&type=details&token=1ec949a15fb709370f")
            ax.send();
            ax.onreadystatechange=function(){
                if(this.readyState==4){
                    var cc=JSON.parse(ax.response);
                    console.log(cc)
                    var goodswrap=document.querySelector(".goods-wrap");
                    goodswrap.innerHTML+=
                    `
                    <div class="goods-list">
                        <div class="image">
                            <img src="${cc.data.images[0]}" alt="">
                        </div>
                        <div class="goods-param">
                            <div class="title">
                                ${cc.data.title}
                            </div>
                            <div class="attr">
                                颜色：
                                <span>${color}</span>
                                尺码
                                <span>${size}</span>
                            </div>
                            <div class="amount">
                                X ${kk[i]}
                            </div>
                            <div class="price">
                                ￥${cc.data.price}
                            </div>
                        </div>
                    </div>
                    `
                    var totalwrap=document.querySelectorAll(".total-wrap");
                    var sumli=totalwrap[0].querySelectorAll("li");//获取商品总额
                    var yunli=totalwrap[1].querySelectorAll("li");//获取运费总额
                    var pricewrap=document.querySelector(".price-wrap");
                    var tisum=pricewrap.querySelectorAll("span")//提交总额
                    sumli[1].innerHTML=
                    `
                    ￥${sum}
                    `
                    tisum[1].innerHTML=
                    `
                    ￥${parseFloat(sum)+10}
                    `
                    console.log(tisum[1].innerHTML)
                    var money = tisum[1].innerHTML;
                    localStorage.setItem('money',JSON.stringify(money))
                }
            }
         }
    }

    function backbefor(){
        var oback = document.getElementsByClassName('back');
        console.log(1)
            oback[0].onclick = function(){
            console.log(1)
            window.location.href= '购物车.html';
        }
   }
   backbefor()


            // let str = Math.random().toString().slice(-9) //随机生成九位数 235690486
            // let arr = str.split('') // 字符串转数组  ["2", "3", "5", "6", "9", "0", "4", "8", "6"]
            // function sum(arr) {
            //     var total = 0;
            //     if(!arr.length) return
            //     for (var i = arr.length-1; i>=0; i--) {
            //         if( arr[i] ){
            //             total += Number(arr[i]);
            //         }
            //     }
            //     return total;
            // }
            // arr[9] = (sum(arr) % 10).toString() // sum(arr)求和 并获取第十位
            // let lastStr = arr.join('') // 将获取的十位数数组转字符串
            // console.log(lastStr) // '2356904863'

}