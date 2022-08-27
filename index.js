let string="";
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
    try{
    if(e.target.innerHTML=='='){
        string=eval(string);
        
        num=parseInt(string);
        num=num.toFixed(5);
        string=num.toString();
        console.log(num);
        document.getElementById('screen').value=string;
    }
    else if(e.target.innerHTML=='AC'){
        
        string='';
        document.getElementById('screen').value=string;
    }
    
    else if(e.target.innerHTML=='x'){
        
        string+='*';
        console.log(string);
        document.getElementById('screen').value=string;
        
    }
    else if(e.target.innerHTML=='÷'){
        
        string+='/';
        console.log(string);
        document.getElementById('screen').value=string;
        
    }
    else if(e.target.innerHTML=='⇐'){
        string=document.getElementById('screen').value.substr(0,document.getElementById('screen').value.length-1);
        document.getElementById('screen').value=string;

    }
    else{
        console.log(e.target.innerHTML);
        string=string+e.target.innerHTML;
        document.getElementById('screen').value=string;
    }}
    catch(err){
        document.getElementById('screen').value="Undefined";
        
    }
})
})