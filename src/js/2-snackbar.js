// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]');
  const stateRadio = document.querySelector('input[name="state"]:checked');

  const delay = parseInt(delayInput.value, 10);

  const notificationPromise = new Promise((resolve, reject) => {
    if (stateRadio.value === 'fulfilled') {
      setTimeout(() => resolve(delay), delay);
    } else {
      setTimeout(() => reject(delay), delay);
    }
  });

  notificationPromise
    .then(delay => {
      iziToast.success({
        title: 'OK',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
