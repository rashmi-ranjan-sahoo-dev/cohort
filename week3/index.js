var a = 0 ;

function callback()
{
    document.querySelector("h1").innerHTML = a;
    a++;
}

 let r = setInterval(callback,1000);

let stop = document.querySelector(".stop");

function stopinterval()
{
    clearInterval(r);
}
stop.addEventListener("click",stopinterval);

let start = document.querySelector(".start");

function startinterval()
{
    clearInterval(r);
   a = 0;
   setInterval(callback,1000);
}

start.addEventListener("click",startinterval);