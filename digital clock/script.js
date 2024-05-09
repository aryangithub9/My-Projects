let hours = document.getElementById("hours");
let mins = document.getElementById("mints");
let sec  = document.getElementById("secs");
let milisec = document.getElementById("mili");







setInterval(()=>{

    let time = new Date();

    hours.innerHTML = (time.getHours()<10?"0":"")+time.getHours();
    mins.innerHTML = (time.getMinutes()<10?"0":"")+time.getMinutes();
    sec.innerHTML = (time.getSeconds()<10?"0":"")+time.getSeconds()


},1000)