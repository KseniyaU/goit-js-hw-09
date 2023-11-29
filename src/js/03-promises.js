//npm i notiflix
import Notiflix from 'notiflix'; //бібліотека для виводу красивих повідомлень

const form = document.querySelector('.form')
// відслуховуємо відправку форми
form.addEventListener("submit", hendlerSubmi);

function hendlerSubmi(event) {
  event.preventDefault();
  const {delay, step, amount} = event.currentTarget.elements;//робимо деструктирізацію полів з форми оскільки вони задані чере name
  //робимо затримку промісів
  setTimeout(() => {
    for (let i = 1; i <= +amount.value; i++){
      createPromise(i, (step.value * i))
        .then(data => Notiflix.Notify.success(data))//виводимо позитивний проміс 
        .catch(arror => Notiflix.Notify.failure(arror))//виводимо негативний проміс
    }
  }, +delay.value)
}



//функція створення самого промісу
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;// рандомне значення
      //по рандомному значенню викликаємо написи на промісах
      if (shouldResolve) {
         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
        
    // Fulfill
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`)
      
    // Reject
  }
    }, delay)
  }

  )
  // 
 
}
