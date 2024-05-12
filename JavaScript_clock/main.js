setInterval(() => {
let a;
let date;
let time; 
const options = { weekday: 'long', year: 'numeric', month: 'long',day: 'numeric'}  
b=new Date();
time=b.getHours() + ":" + b.getMinutes()+":"+ b.getSeconds();
date=b.toLocaleDateString(undefined,options)
document.getElementById('time').innerHTML= time +"<br> on "+ date;
}, 1000);