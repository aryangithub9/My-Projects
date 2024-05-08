const input = document.getElementById("input");
const submit = document.getElementById("submit");

submit.addEventListener('click',()=>{
    document.body.style.backgroundColor = input.value;
    input.value = '';
})

const black = document.getElementById("black");

black.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'black'
})

white.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'white'
})

function getrandomcolor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + "," + g + "," + b + ")";
}


random = document.getElementById("random");
random.addEventListener('click',()=>{
    document.body.style.backgroundColor = getrandomcolor();
})


