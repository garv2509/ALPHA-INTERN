const storeOpening = new Date('oct ,16 2024 00:00:00');
setCountdown(storeOpening);
setInterval(function() {
    setCountdown(storeOpening);
},1000);

setCountdown(storeOpening); 

function setCountdown(countingDownTime) {

    let now = new Date();

    let timeRemaining = countingDownTime - now;

    console.log(timeleft);

    let seconds = Math.floor(timeleft / 1000);
    let minutes = Math.floor(timeleft / (1000*60));
    let hours = Math.floor(timeleft / (1000*60*60));
    let days = Math.floor(timeleft / (1000*60*60*24));

    console.log(days, hours, minutes, seconds);

    let daysToDisplay = days;
    let hoursToDisplay = hours - (days * 24);
    let minutesToDisplay = minutes - ( hours * 60 );
    let secondsToDisplay = seconds - ( minutes * 60 );

    console.log(daysToDisplay, hoursToDisplay, minutesToDisplay, secondsToDisplay);
 
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    daysEl.textContent = daysToDisplay;
    hoursEl.textContent = hoursToDisplay;
    minutesEl.textContent = minutesToDisplay;
    secondsEl.textContent = secondsToDisplay;

}