
const startBtn = document.querySelector('button[data-start]')
const stopBtn = document.querySelector('button[data-stop]')
const body = document.querySelector('body')
console.log(body);
let timerId = null;
stopBtn.disabled = true;

//зміна кольору фону
startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        let backgroundColorBody = getRandomHexColor();
        body.style.backgroundColor = backgroundColorBody;
        //змінюємо активність кнопок
        if (timerId !== null) {
            stopBtn.disabled = false;
            startBtn.disabled = true;
            stopBtn.addEventListener('click', () => { 
                stopBtn.disabled = true;
                startBtn.disabled = false;
            })
        }
    },1000)
})
// відключення зміни кольору при натиску на кнопку стоп
stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
})



//функція рандомної генерація кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
console.log(getRandomHexColor());

//стилізація кнопок
startBtn.style.margin = "100px auto auto 550px";
startBtn.style.padding = "10px 20px 10px 20px";
stopBtn.style.padding = "10px 20px 10px 20px";