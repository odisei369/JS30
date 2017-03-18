let secondHand = document.querySelector(".sec-hand");
let minuteHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");
setInterval(setDate, 1000);
function setDate() {
    const now = new Date();
    const sec = now.getSeconds();
    if (sec == 0){secondHand.style.transition = 'none';}
    const secDegree = sec/60*360 + 90;
    secondHand.style.transform = `rotate(${secDegree}deg)`;
    if (sec == 0){secondHand.style.transition = 'all 0.05s'};
    const min = now.getMinutes();
    if (min == 0){minuteHand.style.transition = 'none';}
    const minDegree = min/60*360 + 90;
    minuteHand.style.transform = `rotate(${minDegree}deg)`;
    if (min == 0){minuteHand.style.transition = 'all 0.05s';}
    const hour = now.getHours();
    if (hour == 0){hourHand.style.transition = 'none';}
    const hourDegree = hour/12*360 + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    if (hour == 0){hourHand.style.transition = 'all 0.05s';}
}