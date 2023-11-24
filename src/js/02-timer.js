//npm install flatpickr
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

//npm i notiflix
import Notiflix from 'notiflix';
const btn = document.querySelector('button[data-start]')
const input = document.querySelector('input#datetime-picker')
const daysTime = document.querySelector('span[data-days]')
const hoursTime = document.querySelector('span[data-hours]')
const minutesTime = document.querySelector('span[data-minutes]')
const secondsTime = document.querySelector('span[data-seconds]')
const timer = document.querySelector('.timer')
const field = document.querySelectorAll('.field')
const value = document.querySelectorAll('.value')
const label = document.querySelectorAll('.label')

let handleDate; 
btn.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      handleDate = selectedDates[0].getTime();
      if (handleDate < Date.now()) {
          //допоміжне вікно з помилкою
        Notiflix.Notify.failure("Please choose a date in the future")
      } else {
          btn.disabled = false;
      }

  },
};

flatpickr(input, { ...options })
//прослуховувач кліків на кнопку та виведення зміни часу
btn.addEventListener('click', () => {
    const intervalId = setInterval(() => {
        const time = handleDate - Date.now()
        if (time >= 0) {
            convertMs(time);
            //додаємо трішки краси
            value.forEach((valueElement) => {
                valueElement.style.color = getRandomHexColor();
;        
            })
            label.forEach((labelElement) => {
             labelElement.style.color = getRandomHexColor();
;
            })
        } else {
            clearInterval(intervalId);
        }    
        
    },1000)

})

//функція для отримання формату виведення числових значень 00
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

//функція для розрахунку кфлькості часових одниниць якщо відомий час в мілісекундах
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
    
  // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    daysTime.textContent = days;
  // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    hoursTime.textContent = hours
  // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    minutesTime.textContent = minutes 
  // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    secondsTime.textContent = seconds

  return { days, hours, minutes, seconds };
}
//стилізація
timer.style.display = 'flex';

field.forEach((fieldElement) => {
  fieldElement.style.textAlign = 'center';
  fieldElement.style.marginRight = '20px';
});
value.forEach((valueElement) => {
    valueElement.style.display = 'block';
    valueElement.style.fontSize = '40px'
})
label.forEach((labelElement) => {
    labelElement.style.display = 'block';
    labelElement.style.fontSize = '20px';
})
//функція рандомної генерація кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
