var ul = document.querySelector("#wrap ul");
var lis = document.querySelectorAll("#wrap ul li");
var closeBtns = document.querySelectorAll("#wrap .close");
var last = null; // 上一个选中的li
setTimeout(function(){
    ul.className = '';
}, 200);

lis.forEach(function(li, index){
    li.onclick = function(){
        ul.setAttribute('id', 'activeWrap');
        last && (last.className = '');
        this.className = 'active';
        last = this;         
    }
    closeBtns[index].onclick = function(ev){
        ul.removeAttribute('id');
        lis[index].className = '';
        last = null;
        ev.cancelBubble = true;
    }
});

