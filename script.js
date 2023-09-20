var milliSaniye = document.querySelector('.milliSaniye');
var saniye = document.querySelector('.saniye');
var deqiqe = document.querySelector('.deqiqe');
var saat = document.querySelector('.saat');
var milliSaniyeCounter = 0;
var saniyeCounter = 0;
var deqiqeCounter = 0;
var saatCounter = 0;
var cycleIndex = 0;
//Buttons
var basla = document.querySelector('.start');
var dayan = document.querySelector('.stop');
var tur = document.querySelector('.cycle');
var temizle = document.querySelector('.reset');
var cycleContainer = document.querySelector('.cycle-container');
// Events
basla.onclick = function(){
    var x = setInterval(function(){
        milliSaniyeCounter++;
        if(milliSaniyeCounter < 10){
            milliSaniye.innerText = "0" + milliSaniyeCounter;
        }
        else{
            milliSaniye.innerText = milliSaniyeCounter;
        }
        if(milliSaniyeCounter == 100){
            milliSaniyeCounter = 0;
            saniyeCounter++;
            if(saniyeCounter < 10){
                saniye.innerText ="0" + saniyeCounter;
            }
            else{
                saniye.innerText = saniyeCounter;
            }
        }
        if(saniyeCounter == 60){
            saniyeCounter = 0;
            deqiqeCounter++;
            if(deqiqeCounter < 10){
                deqiqe.innerText = "0" + deqiqeCounter;
            }
            else{
                deqiqe.innerText = deqiqeCounter;
            }
        }
        if(deqiqeCounter == 60){
            deqiqeCounter = 0;
            saatCounter++;
            if(saatCounter < 10){
                saat.innerText = "0" + saatCounter;
            }
            else{
                saat.innerText = saatCounter;
            }
        } 
    },10)
    dayan.onclick = function(){
        clearInterval(x);
    }
};

tur.onclick = function(){
    var li = document.createElement('li');
    cycleIndex++;
    li.innerText = `${cycleIndex}) ${saatCounter} : ${deqiqeCounter} : ${saniyeCounter} : ${milliSaniyeCounter}`;
    cycleContainer.prepend(li);
};

temizle.onclick = function(){
    cycleContainer.innerText = '';
    milliSaniyeCounter = 0;
    saniyeCounter = 0;
    deqiqeCounter = 0;
    saatCounter = 0;
    cycleIndex = 0;
    milliSaniye.innerText = "0" + milliSaniyeCounter;
    saniye.innerText = "0" + saatCounter;
    deqiqe.innerText = "0" + deqiqeCounter;
    saat.innerText = "0" + saatCounter;
};