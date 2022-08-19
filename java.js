var start  = document.getElementById('open');
var main = document.getElementById('main');
var btn = document.getElementById('active');
var bg = document.getElementById('background');
var op0 = document.getElementById('op0');

btn.onclick = function(){
    bg.classList.toggle('recmenu');
    op0.classList.toggle('op0');
}

window.onload = function(){
    setTimeout(function(){
        main.classList.remove('main');
    },3000)
    setTimeout(function(){
        start.classList.add('op0');
    },3000)
    
}