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
let hourDigits = document.getElementById('hour-digits');
let minuteHand = document.getElementById('minute-hand');
let secondHand = document.getElementById('second-hand');
let dateElement = document.getElementById('date-text');
let timeElement = document.getElementById('time-string');

function addLeadingZero(timeNum) {
    if (timeNum < 10) {
        return '0' + timeNum.toString();
    }
    return timeNum.toString();
}

function moveHands() {
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
    dateElement.innerHTML = dateText;
    let currHour = currDate.getHours();
    let currMinute = currDate.getMinutes();
    let currSecond = currDate.getSeconds();
    timeElement.innerHTML =
        addLeadingZero(currHour) +
        ':' +
        addLeadingZero(currMinute) +
        ':' +
        addLeadingZero(currSecond);
    hourDigits.innerHTML = addLeadingZero(currHour);
    minuteHand.style.transform = 'rotate(' + `${currMinute * 3}` + 'deg)';
    secondHand.style.transform = 'rotate(' + `${currSecond * 6 + 90}` + 'deg)';
}

setInterval(moveHands, 1000);
