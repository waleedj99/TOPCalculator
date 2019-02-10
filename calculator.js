
var grids = document.querySelectorAll(".grid-item");
console.log(grids)
window.addEventListener('keypress', function (e) {
    console.log(e.keyCode)
    if (e.keyCode == 32) {
        console.log(e.keyCode);
        
        document.querySelector('#ipbox').value = eval(document.querySelector('#ipbox').value)
    }
});
grids.forEach(element => {
    element.addEventListener('click',function() {
        var input = document.querySelector('#ipbox')
        if(this.innerHTML== "CLR")
        {
            input.value ="";
        }else if(this.innerHTML == "BKP"){
            input.value = input.value.substring(0,input.value.length - 1) 
        }else if(this.innerHTML == "=")
        {
            input.value = eval(input.value)
        }
        else{
            input.value += this.innerHTML;
        }
    })
});
