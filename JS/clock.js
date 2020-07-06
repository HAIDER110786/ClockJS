const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
let currentTime;

function getDate(){
    currentTime = new Date();
    getSecondsAndRotateSecondsHand();
    getMinutesAndRotateMinutesHand();
    getHoursAndRotateHoursHand();
}

function getSecondsAndRotateSecondsHand(){
    let seconds = currentTime.getSeconds();
    secondHand.style.transform = `rotate(${seconds*6+90}deg)`;
}

function getMinutesAndRotateMinutesHand(){
    let minutes = currentTime.getMinutes();
    minuteHand.style.transform = `rotate(${minutes*6+90}deg)`;
}

function getHoursAndRotateHoursHand(){
    let hours = currentTime.getHours();
    hourHand.style.transform = `rotate(${((hours-12)*30)+90}deg)`;
}

window.onload = setInterval(getDate,1000);