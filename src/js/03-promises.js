//npm i notiflix
import Notiflix from 'notiflix';

const delay = document.querySelector('input[name="delay"]')//перша затримка в мілісекундах
const step = document.querySelector('input[name="step"]')//крок збільшення затримки після першого промісу
const amout = document.querySelector('input[name="amount"]')//кількість промісів яку необхідно створити
const btn = document.querySelector('button')//кнопка відправки


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success("ok")
    // Fulfill
  } else {
    Notiflix.Notify.failure("be")
    // Reject
  }
}
btn.addEventListener('click', () => {
  const intervalId = setInterval(() => {
    for (let i = 0; i < amout.value; i++){
      createPromise(i+1, delay.value + i*step)
    }
  }, delay.value)
})

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });