window.onload = function(){
    var tens = 00;
    var seconds = 00;
    var minutes = 00;
    var appendMinutes = document.getElementById("minutes");
    var appendSeconds = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var buttonLap = document.getElementById("button-lap");
    var lapSplit = document.getElementById("lap-split");
    var stopInd;
    var Interval;
    var timing;
    var splitList = [];
    
    

buttonStart.onclick = function(){
    if(stopInd){
        stopInd = false;
    }

    clearInterval(Interval);
    Interval = setInterval(startTimer,10);
}

buttonStop.onclick = function(){
    stopInd = true;
    clearInterval(Interval);
}

buttonReset.onclick = function(){
    clearInterval(Interval);
    minutes  = "00";
    seconds = "00";
    tens = "00";
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
    //Clear lap-splits result for when reset is clicked
    lapSplit.innerHTML = "";
}

buttonLap.onclick = function(){
    
    // If timer was stopped, do no log the lap split
    if(stopInd){
        return;
    }
   
    // Add a 0 at the front of tens if tens is equal or less than 9.
    // This ensure tens have 2 digits
    // Ensure the digits length stay at 2
    if(tens<=9 && tens.toString().length<2){
        tens = "0" + tens;
    }

    if(seconds<=9 && seconds.toString().length<2){
        seconds = "0" + seconds;
    }

    if(minutes<=9 && minutes.toString().length<2){
        minutes = "0" + minutes;
    }

    timing = minutes + ":" + seconds + ":" + tens ;
    
    splitList.push(timing)

    lapSplit.innerHTML += '<li>' + timing + '</li>'
   
}


function startTimer() {
    tens++;
    

    if(tens <=9){
        appendTens.innerHTML = "0" + tens;
    }

    if(tens >9){
        appendTens.innerHTML = tens;
    }
    
    if(tens > 99){

        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;

    if(seconds <= 9){
        appendSeconds.innerHTML = "0" + seconds;
    }

    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }

    if(seconds > 99){
        console.log("minutes");
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }

    if(minutes > 9){
        appendMinutes.innerHTML = minutes;
    }
}
}

}