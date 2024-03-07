
let op = document.getElementById('op');
let sign = document.getElementById('sign');
let log = document.getElementById('logn');
let hh = document.getElementById('hh');
let pp = document.getElementById('pp');
let L = document.getElementById('L');
let S = document.getElementById('s');
hh.onclick = function(){
    sign.classList.remove('hih');
    log.classList.add('hih');
}
pp.onclick = function(){
    sign.classList.add('hih');
    log.classList.remove('hih');
}
L.onclick = function(){
    sign.classList.add('hih');
}
S.onclick = function(){
    log.classList.add('hih');
}