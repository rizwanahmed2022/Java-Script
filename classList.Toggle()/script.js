let a = document.getElementById("red");
let b = document.getElementById("yellow");
let c = document.getElementById("green");



setInterval(()=>{
    a.classList.toggle('red2');
},800);

setInterval(()=>{
    b.classList.toggle('y2');
},1000);

setInterval(()=>{
    c.classList.toggle('g2');
},1100);