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

    let list = JSON.parse(localStorage.getItem('str')) 
    console.log(list)
    for(let i = 0; i < list.length; i++){
        kf(list[i],i);
    }
    function kf([gid],i){
        var ax=new XMLHttpRequest();
        ax.open("get","http://vueshop.glbuys.com/api/home/goods/info?gid="+gid+"&type=details&token=1ec949a15fb709370f")
        ax.send();
        ax.onreadystatechange=function(){
            if(this.readyState==4){
                var aa=JSON.parse(ax.response);
                console.log(aa.data);
                var main = document.querySelector('.main');
                console.log(main)
                var divs=document.createElement("div");
                divs.setAttribute("class","goods-list")
                main.appendChild(divs) 
                var goodslist=document.querySelectorAll(".goods-list")[i];
                console.log(goodslist)
                goodslist.innerHTML +=
                `
                <div class="image">
                    <img src="${aa.data.images[0]}" alt="">
                </div>
                <div class="title">${aa.data.title}</div>
                <div class="price">￥${aa.data.price}</div>
                <div class="btn-wrap">
                    <div class="btn">购买</div>
                    <div class="btnb">删除</div>
                </div>
                `
                var btn = document.querySelectorAll('.btn')[i];
                console.log(btn)
                btn.onclick = function(){
                    window.localStorage.setItem('aa',list[i]);
                    window.location.href="商品详情.html";
                }
                var btnb = document.querySelectorAll('.btnb')[i];
                console.log(btnb)
                btnb.onclick = function(){
                    $(this).parent().parent().remove();
                    list.splice(i, 1)
                    localStorage.setItem('str', JSON.stringify(list));
                }
            }
        }
    }


}