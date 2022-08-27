let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttontext = e.target.innerText;
        console.log("button text is",buttontext);
        if(buttontext == 'x'){
            buttontext ="*";
            screenvalue += buttontext;
            screen.value = screenvalue;
        }else if(buttontext == 'C'){
            buttontext = "0";
            screenvalue = buttontext;
            screen.value = screenvalue;
        }else if(buttontext == '='){
            screen.value = eval(screenvalue);
        }else{
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
    })
}