var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var numberVal = "123456789";
var symbolVal = "~&*#@%^_!?/|(){}[]=";
var alphabets ="";
var lAlphabets ="";
var number ="";
var symbol = "";



    document.querySelector('.checkbox1').addEventListener('click',function(){
        const val1 = Number(document.querySelector('.checkbox1').checked);
        if(val1){
            for(let i =0; i<26; i++){
                alphabets += alpha.charAt(Math.floor(Math.random()*alpha.length));  
            }
        }
        else{
            alphabets = "";
        }
    });

    document.querySelector('.checkbox2').addEventListener('click',function(){
        const val1 = Number(document.querySelector('.checkbox2').checked);
        if(val1){
            for(let i=0; i<26; i++){
                lAlphabets += lowerAlpha.charAt(Math.floor(Math.random()*lowerAlpha.length));
                
            }
        }
        else{
            lAlphabets="";
        }
    });

    document.querySelector('.checkbox3').addEventListener('click',function(){
        const val1 = Number(document.querySelector('.checkbox3').checked);
        if(val1){
            for(let i=0; i<9; i++){
            number += numberVal.charAt(Math.floor(Math.random()*numberVal.length));
            }
        }
        else{
            number ="";
        }
    });

    document.querySelector('.checkbox4').addEventListener('click',function(){
        const val1 = Number(document.querySelector('.checkbox4').checked);
        if(val1){
            for(let i=0; i<19; i++){
            symbol += symbolVal.charAt(Math.floor(Math.random()*symbolVal.length));
            }
        }
        else{
            symbol = "";
        }
    });


var range = document.querySelector('.progress-bar-inner');
var progressValue = document.querySelector('.progress-value');

function changeValue(){
    var rangeValue = range.value;
    progressValue.innerHTML = rangeValue;
    return rangeValue;
}

 function genPassword() {
    var chars = alphabets + lAlphabets + number + symbol;
    var passwordLength = changeValue();
    var password = "";
 for (var i = 0; i < passwordLength; i++) {
   var randomNumber = (Math.floor(Math.random() * chars.length));
   password += chars.substring(randomNumber, randomNumber +1); 
  }
        document.querySelector('.output-display').value = password;
 }

