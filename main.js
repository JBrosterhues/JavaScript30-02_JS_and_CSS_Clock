function moveHands() {
    let hourHand = document.getElementById('hour-hand');
    let minuteHand = document.getElementById('minute-hand');
    let secondHand = document.getElementById('second-hand');
    let currDate = new Date();
    let currHour = currDate.getHours();
    let currMinute = currDate.getMinutes();
    let currSecond = currDate.getSeconds();
    hourHand.style.transform = 'rotate(' + `${currHour * 6 + 90}` + 'deg)';
    minuteHand.style.transform = 'rotate(' + `${currMinute * 6 + 90}` + 'deg)';
    secondHand.style.transform = 'rotate(' + `${currSecond * 6 + 90}` + 'deg)';
    console.log(currHour + ':' + currMinute + ':' + currSecond);
}

setInterval(moveHands, 1000);
