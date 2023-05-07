// Grabing all the elements needed to change
let hour = document.getElementById("hr");
let minute = document.getElementById("min");
let second = document.getElementById("sec");
let milisecond = document.getElementById("msec");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

//Declaring all the required variables
let hr = 0; 
let min = 0; 
let sec = 0; 
let msec = 0;
let timerEvent;
let checkTimerStart = false;

//Adding event listener to start button to start the timer
startButton.addEventListener('click' , function(){
    clearInterval(timerEvent);
    timerEvent = setInterval(startTimer , 1);
} );

//Adding event listener to stop button to the timer
stopButton.addEventListener("click" , function(){
    clearInterval(timerEvent)
});

//Adding event listener to reset the timer
resetButton.addEventListener("click" , function(){
    clearInterval(timerEvent);
    checkTimerStart = false;
    hr = 0; 
    min = 0; 
    sec = 0; 
    msec = 0;
    hour.textContent = "00";
    minute.textContent = "00";
    second.textContent = "00";
    milisecond.textContent = "000";
})

//function to start timer
function startTimer(){
    checkTimerStart = true;
        if(checkTimerStart = true){
            msec += 5;
    
            if(msec == 1000){
                sec++;
                msec =0;
            }
            if(sec == 60){
                min++;
                sec = 0;
            }
            if(min == 60){
                hr++;
                min =0;
            }
            
            let hrtext = hr;
            let mintext = min;
            let sectext = sec;
            let msectext = msec;
    
            if(hr < 10){
                hrtext = "0" + hrtext;
            }
            if(min < 10){
                mintext = "0"+ mintext;
            }
            if(sec < 10){
                sectext = "0" + sectext;
            }
            if(msec < 10){
                minsectext = "0" + msectext;
            }
            hour.textContent = hrtext;
            minute.textContent = mintext;
            second.textContent = sectext;
            milisecond.textContent = msectext;
        } 
}
