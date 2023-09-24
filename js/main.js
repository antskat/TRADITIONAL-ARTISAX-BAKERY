var buybtn = document.getElementById('bybtn');
var order01 = document.getElementById('order01');
var order02 = document.getElementById('order02');
var order03 = document.getElementById('order03');
var order04 = document.getElementById('order04');
var scrollObject = document.getElementById('scroll-object');
var message = document.getElementById('message')

buybtn.getAttribute('disabled');

function scroll() {
    scrollObject.scrollIntoView({ behavior: "smooth" });
}

function alarm() {
    let elem = document.getElementById('message');
    let style = getComputedStyle(elem);
    if (style.display === 'none') {
        document.getElementById('message').style.display='block';
    } else if (style.display !== 'none') {
        document.getElementById('message').style.display='none';
    }
    setTimeout(function () {
        document.getElementById('message').style.display='none';
    }, 3000);
}

order01.addEventListener('click', alarm);
order01.addEventListener('click', scroll);
order02.addEventListener('click', alarm);
order02.addEventListener('click', scroll);
order03.addEventListener('click', alarm);
order03.addEventListener('click', scroll);
order04.addEventListener('click', alarm);
order04.addEventListener('click', scroll);