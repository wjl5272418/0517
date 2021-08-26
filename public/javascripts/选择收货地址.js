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

   var address = document.querySelector('.address-nav-name-2');
    address.onclick = function(){
        window.location.href = '添加地址.html'
    }

    let list = JSON.parse(localStorage.getItem('address'));
        console.log(list)
    var addressbox = document.querySelector('.address-box');
    console.log(addressbox)
    for(let i =0;i < list.length; i++){
        console.log(list[i][0])
        addressbox.innerHTML +=
        `
        <div class="address-list">
            <div class="address-info-wrap">
                <div class="address-info">
                    <div class="preson">
                        <span>${list[i][0]}</span>
                        <span>${list[i][1]}</span>
                    </div>
                    <div class="address">
                        <span class="text">${list[i][2]}</span>
                    </div>
                </div>
            </div>
            <div class="handle-wrap">
                    <div class="edit"></div>
                    <div class="del"></div>
            </div>
        </div>
        `
        var addresslist = document.querySelectorAll('.address-list');
        console.log(addresslist[i])
        for(let j = 0; j < addresslist.length; j++){
            addresslist[j].onclick = function(){
                localStorage.setItem('cccc',JSON.stringify(list[j]))
                localStorage.setItem('numb',JSON.stringify(123))
                window.location.href = '确认订单.html'
                event.stopPropagation();
            }
        }
        var del = document.querySelectorAll('.del');
        console.log(i)
        for(let k = 0; k < del.length; k++){
            del[k].onclick = function(){
            $(this).parent().parent().remove();
            console.log(list)
            list.splice(k, 1)
            localStorage.setItem('address', JSON.stringify(list))
            // event.stopPropagation();
            }
        }
        

    }
        
    

    let list2 = JSON.parse(localStorage.getItem('adss'));
    console.log(list2)
    var boxb = document.querySelector('.boxb');
    console.log(boxb)
    boxb.innerHTML = 
    `
    <div class="address-list">
            <div class="address-info-wrap">
                <div class='check-mark'></div>
                <div class="address-info">
                    <div class="preson">
                        <span>${list2[0]}</span>
                        <span>${list2[1]}</span>
                    </div>
                    <div class="address">
                        <span class='default'>默认</span>
                        <span class="text">${list2[2]}</span>
                    </div>
                </div>
            </div>
            <div class="handle-wrap">
                    <div class="edit"></div>
                    <div class="del"></div>
            </div>
        </div>
    `
    var addresslist = document.querySelector('.address-list');
    addresslist.onclick = function(){
        localStorage.setItem('cccc',JSON.stringify(list2))
        localStorage.setItem('numb',JSON.stringify(123))
        window.location.href = '确认订单.html'
        event.stopPropagation();
    }
    var del = boxb.querySelector('.del');
    console.log(del)
    del.onclick = function(){
        $(this).parent().parent().remove();
         window.localStorage.removeItem('adss');
    }



    var edit = document.querySelectorAll('.edit');
    console.log(edit)
    for(let i = 0; i < edit.length; i++){
         edit[i].onclick = function(){
        window.location.href = '添加地址.html';
        event.stopPropagation();
        }
    }

   

}