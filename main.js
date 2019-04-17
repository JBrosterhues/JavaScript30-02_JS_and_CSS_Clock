function moveHands() {
    let weekdayArr = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    let monthArr = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    let hourHand = document.getElementById('hour-hand');
    let minuteHand = document.getElementById('minute-hand');
    let secondHand = document.getElementById('second-hand');
    let currDate = new Date();
    let currYear = currDate.getFullYear();
    let currMonth = currDate.getMonth();
    let currDay = currDate.getDate();
    let currWeekday = currDate.getDay();
    let dateText =
        weekdayArr[currWeekday] +
        ', ' +
        currDay +
        '. ' +
        monthArr[currMonth] +
        ' ' +
        currYear;
    let dateElement = document.getElementById('date-text');
    dateElement.innerHTML = dateText;
    let currHour = currDate.getHours();
    let currMinute = currDate.getMinutes();
    let currSecond = currDate.getSeconds();
    hourHand.style.transform = 'rotate(' + `${currHour * 6 + 90}` + 'deg)';
    minuteHand.style.transform = 'rotate(' + `${currMinute * 6 + 90}` + 'deg)';
    secondHand.style.transform = 'rotate(' + `${currSecond * 6 + 90}` + 'deg)';
    console.log(currHour + ':' + currMinute + ':' + currSecond);
}

setInterval(moveHands, 1000);
