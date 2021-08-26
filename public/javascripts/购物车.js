window.onload=function(){
    var arr=[];//储存邮费
    var nums=[]//储存数量
    let list = JSON.parse(localStorage.getItem('recent')) 
    console.log(list)
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
                var goodslist=document.querySelector(".goods-list");
                var divs=document.createElement("div");
                arr.push(aa.data.freight)
                goodslist.appendChild(divs)
                divs.setAttribute("class","goods")
                var goods=document.querySelectorAll(".goods")[i];
                console.log(goods)
                goods.innerHTML=
                `
                    <div class="check"></div>
                    <div class="dels">
                    <span><img src="${aa.data.images[0]}" alt=""></span>
                    <p>删除</p>
                    </div>
                    <div class="goods-mess">
                        <div class="goods-title">${aa.data.title}</div>
                        <div class="size">
                            颜色:<p>${color}</p>
                            大小：<span>${size}</span>
                        </div>
                        <div class="prices">
                            <p>￥<span class="oprice">${aa.data.price}</span></p>
                            <div class="number">
                                <span class="del">-</span>
                                <input type="text" class="num" value="1">
                                <span class="add">+</span>
                            </div>

                        </div>
                    </div>
                `
                // 数量
                var del=document.querySelectorAll(".del")[i];
                var add=document.querySelectorAll(".add")[i];
                var input=document.querySelectorAll(".num")[i];
                console.log(del)
                del.onclick=function(){
                    if(input.value==1){
                        input.value==1
                    }else{
                        input.value--;
                        sum();
                    }
                }
                add.onclick=function(){
                    input.value++
                    sum();
                }
                // 数量
                //勾选点击
                var check=document.querySelectorAll(".check")[i];
                var ht=true;
                check.onclick=function(){
                    if(ht==true){
                        this.className="check1"
                        sum()
                    }else{
                        this.className="check"
                        sum()
                    }
                    ht=!ht    
                }
                 //勾选点击
                 //删除
                 var dels=document.querySelectorAll(".dels")[i];
                 console.log(dels)
                 var deletes=dels.querySelector("p")
                //  console.log(deletes)
                 deletes.onclick=function(){
                    $(this).parent().parent().remove();
                    // console.log(list)
                    list.splice(i, 1)
                    localStorage.setItem('recent', JSON.stringify(list))
                   
                 }
                 //删除
                 //总价
                sum();
                function sum(){
                var fli=0;//总费用
                var fee=0;//快递费
                var shopscheck1;
                 var total=document.querySelector(".total");
                 var spans=total.querySelectorAll("span")
                //  console.log(spans)
                var shopscheck1=document.querySelectorAll(".check1")
                // console.log(shopscheck1)
                var shopscheck=document.querySelectorAll(".check")//获取所有选中
                var selectbtn=document.querySelector(".select-btn")
                var orderend=document.querySelector(".orderend-btn");//获取结算按钮
                var aa = window.localStorage.getItem('xx');
                console.log(aa)
                orderend.onclick=function(){
                    console.log(i)
                    console.log(input.value)
                    if(aa =='no'){
                        window.location.href="登录.html"
                    }else if(aa == 'ok'){
                        window.location.href="确认订单.html"
                    }
                   
                    console.log(fli)
                    window.localStorage.setItem("sum",fli)
                }
                
                if(shopscheck.length==0){
                    orderend.className="orderend-btn noorder"
                    // console.log(1)
                }else{
                    orderend.className="orderend-btn "
                    // console.log(2)
                }
                // console.log(selectbtn)
                console.log(shopscheck)
                // console.log(list.length)
                var order=document.querySelector(".orderend-btn");

                //全选
                    
                    if(shopscheck.length==list.length){
                        selectbtn.className="select-btn"
                    }else{
                        selectbtn.className="select-btn nofocus"
                    }
                    var gh=true;
                    selectbtn.onclick=function(){
                        var shopscheck1=document.querySelectorAll(".check1")
                        // console.log(shopscheck1)
                        var shopscheck=document.querySelectorAll(".check")//获取所有选中
                        // console.log(shopscheck1)
                        if(gh==true){
                            for(var l=0;l<shopscheck.length;l++){
                                shopscheck[l].className="check1"
                                spans[1].innerHTML=0+"元"
                            }
                            this.className="select-btn nofocus"
                        }else{
                            for(var l=0;l<shopscheck1.length;l++){
                                shopscheck1[l].className="check"
                                sum();
                            }
                            this.className="select-btn"
                        }
                        gh=!gh
                        
                    }
                        
                //全选
                if(shopscheck.length==0){
                    spans[1].innerHTML=0+"元"
                }else{
                    var mu=[];
                    for(var j=0;j<shopscheck.length;j++){
                        var ss=shopscheck[j].parentNode;//拿到勾选的父节点
                        var pricenum=ss.querySelector(".oprice")
                        // console.log(parseFloat(pricenum.innerHTML))
                        var num=ss.querySelector(".num")
                        // console.log(num.value)
                        mu.push(num.value)
                        var cc=parseFloat(pricenum.innerHTML)*num.value;
                        fli+=cc;
                        console.log(fli)//商品费用
                        spans[1].innerHTML=fli.toFixed(2)+"元";
                        // console.log(arr)
                        // console.log(i)
                        var c=arr[i];
                        
                       
                    }
                    // console.log(mu)
                    window.localStorage.setItem("nums",JSON.stringify(mu))
                }
                    
                        
                    
                }
                 //总价
                 
            }
        }
    }
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


 