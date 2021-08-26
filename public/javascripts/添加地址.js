window.onload = function(){
    function address(){
        var $target = $('.area');
        $target.citySelect();
        $target.on('click', function (event) {
            event.stopPropagation();
            $target.citySelect('open');
        });
        $target.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });
    }
    address();

    var ipt = document.getElementsByTagName('input');
    var addbtn = document.getElementsByClassName('add-btn')[0];
    var opage = document.getElementsByClassName('page')[0];
    var opageb = document.getElementsByClassName('pageb')[0];
    var submitsave = document.getElementsByClassName('submit-save')[0];
    var rightbtn = document.querySelector('.right-btn');
    addbtn.onclick = function(){
        console.log(1)
        opage.style.display = 'block';
        opageb.style.display = 'none';
        submitsave.innerHTML = '保存';
        rightbtn.style.display = 'none';
        ipt[0].value = '';
        ipt[1].value = '';
        ipt[2].value = '';
        ipt[3].value = '';
    }
    var oback = document.getElementsByClassName('back')[0];
    oback.onclick = function(){
        opage.style.display = 'none';
        opageb.style.display = 'block';
    }
    
   
    var vtt = document.getElementsByClassName('van-toast');
    var vtttext = document.getElementsByClassName('van-toast_text');
    var namewrap = document.querySelector('.name-wrap');
    var ipt = document.getElementsByTagName('input');
    // var address = document.querySelector('.address');
    // console.log(address)
    submitsave.onclick = function(){
        if(ipt[0].value == ''){
            block(vtt[0]);
            none(vtt[0]);
        }else if(ipt[1].value == ''){
            vtttext[0].innerHTML = '请输入手机号';
            block(vtt[0]);
            none(vtt[0]);
        }else if(ipt[1].value.length !== 11 && ipt[1].value[0] !== 1){
            vtttext[0].innerHTML = '您输入的手机号格式不正确';
            block(vtt[0]);
            none(vtt[0]);
        }else if(ipt[2].value == ''){
            vtttext[0].innerHTML = '请选择所在地区';
            block(vtt[0]);
            none(vtt[0]);
        }else if(ipt[3].value == ''){
            vtttext[0].innerHTML = '请输入详细地址';
            block(vtt[0]);
            none(vtt[0]);
        }else{
            if(ipt[4].checked == true){
                var ads = [];
                ads.push(ipt[0].value)
                ads.push(ipt[1].value)
                ads.push(ipt[2].value)
                ads.push(ipt[3].value)
                localStorage.setItem('adss', JSON.stringify(ads));
                ipt[0].value = '';
                ipt[1].value = '';
                ipt[2].value = '';
                ipt[3].value = '';
                opage.style.display = 'none';
                opageb.style.display = 'block';
                bb();
            }else{
                var newlist
            if ("address" in localStorage) {
                list2=JSON.parse(localStorage.getItem('address')) ;
            } else {
                list2=[];
            }
            let arr=[];
            arr.push(ipt[0].value)
            arr.push(ipt[1].value)
            arr.push(ipt[2].value)
            arr.push(ipt[3].value)
            console.log(arr)
            list2.push(arr)
            localStorage.setItem('address', JSON.stringify(list2))
            console.log(list2)
            ipt[0].value = '';
            ipt[1].value = '';
            ipt[2].value = '';
            ipt[3].value = '';
            opage.style.display = 'none';
            opageb.style.display = 'block';
            aa()
            }   
        }
       
    }
    aa();
    function aa(){
        let list = JSON.parse(localStorage.getItem('address'));
        console.log(list)
        var main=document.querySelectorAll(".main")
        // var ospan = namewrap.querySelectorAll('span');
        // console.log(ospan[0])
        console.log(main[1])
        main[1].innerHTML= '';
        for(let i =0;i<list.length;i++){
            console.log(list[i][0])
        main[1].innerHTML+=
            `
                <div class="list">
                    <div class="name-wrap">
                        <span>${list[i][0]}</span>
                        <span>${list[i][1]}</span>
                    </div>
                    <div class="address">
                        <span></span>
                        ${list[i][2]}${list[i][3]}
                    </div>
                    <div class="right-arrow"></div>
                </div>
            `
            // var olists = document.querySelectorAll('.list');
            // console.log(olists.length)
            // for(let k = 0; k < olists.length; k++){
            //     olists.onclick = function(){

            //     }
            // }
            var rightarrow = document.querySelectorAll('.right-arrow');
            var rightbtn = document.querySelector('.right-btn');
            console.log(rightarrow)
            console.log(rightbtn)
            for(let j = 0; j < rightarrow.length; j++){
                rightarrow[j].onclick = function(){
                    opage.style.display = 'block';
                    opageb.style.display = 'none';
                    ipt[0].value = list[j][0];
                    ipt[1].value = list[j][1];
                    ipt[2].value = list[j][2];
                    ipt[3].value = list[j][3];
                    rightbtn.style.display = 'block';
                    submitsave.innerHTML = '修改';
                    ipt[4].checked = false;
                    //   if(submitsave.innerHTML = '修改'){
                    //     submitsave.onclick = function(){
                    //         list.splice(j, 1)
                    //         // localStorage.setItem('address', JSON.stringify(list2))
                    //     }
                    // } 
                }
            }
          
            
        }
    }
    bb();
    function bb(){
        // var main = document.querySelectorAll(".main")
        let list2 = JSON.parse(localStorage.getItem('adss'));
        var mainb = document.querySelector('.mainb')
        console.log(mainb)
        console.log(list2)
        mainb.innerHTML = ''
        mainb.innerHTML +=
        `
            <div class="list">
                <div class="name-wrap">
                    <span>${list2[0]}</span>
                    <span>${list2[1]}</span>
                </div>
                <div class="address">
                    <span>[默认]</span>
                    ${list2[2]}${list2[3]}
                </div>
                <div class="right-arrow"></div>
            </div>
        `
        var rightarrow =  mainb.querySelectorAll('.right-arrow');
        var rightbtn =  document.querySelector('.right-btn');
        console.log(rightarrow)
        // for(let j = 0; j < rightarrow.length; j++){
            rightarrow[0].onclick = function(){
                opage.style.display = 'block';
                opageb.style.display = 'none';
                ipt[0].value = list2[0];
                ipt[1].value = list2[1];
                ipt[2].value = list2[2];
                ipt[3].value = list2[3];
                rightbtn.style.display = 'block';
                submitsave.innerHTML = '修改';
                ipt[4].checked = true;
            }
    }
    
   
   
    

    var timer = null;
    function block(bb){
		var timer = setInterval(function(){
            clearInterval(timer);
            console.log(11)
            bb.style.display = 'block';
            timer = null;
        },300)
    }

    function none(aa){
		var timer = setInterval(function(){
            clearInterval(timer);
            aa.style.display = 'none';
        },3000)
    }

    function backbeforb(){
        var oback = document.getElementsByClassName('back');
            oback[1].onclick = function(){
            console.log(1)
            window.history.back(-1);
        }
   }
   backbeforb();
}