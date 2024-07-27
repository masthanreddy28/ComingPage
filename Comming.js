var countDownDate=new Date("jul 26,2024 00:00:00").getTime();
var x=setInterval(function(){
    var now=new Date().getTime();
    var distance=countDownDate-now;
    console.log(distance)
var days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
var hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
var minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
var seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));


 document.getElementById("days").innerHTML=days;
 document.getElementById("hours").innerHTML=hours;
 document.getElementById("minutes").innerHTML=minutes;
 document.getElementById("seconds").innerHTML=seconds;
},1000);


// 1 day= 24 hours  ,  1hour= 60min ,   1 min= 60 sec, 1 sec=1000millsec

//x=avagMillisec/1000*60