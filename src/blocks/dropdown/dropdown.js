document.addEventListener('DOMContentLoaded', function(){
  const items = document.querySelectorAll('.drop-out__counter');

  for(let i=0; i<items.length; i++) {
    // Значение счётчика
    let amount = items[i].childNodes[1].innerHTML;
    // Элементы счётчика
    const decrease = items[i].childNodes[0];
    const counter = items[i].childNodes[1];
    const increase = items[i].childNodes[2];
    // Обработка событий для 'минуса'
    decrease.addEventListener('click', function(event) {
      if (amount > 1) {
        amount--;
        counter.innerHTML = amount;
      }
      if (amount == 1) {
        decrease.classList.remove('drop-out__btn-decrease--active'); // Делаем кнопку не активной при 0
      }
      if (amount < 10) {
        increase.classList.add('drop-out__btn-increase--active'); // Делаем кнопку активной при != 0
      }
    });
    // Обработка событий для 'плюса'
    increase.addEventListener('click', function(event) {
      if (amount < 10) {
        amount++;
        counter.innerHTML = amount;
      }
      if (amount > 1) {
        decrease.classList.add('drop-out__btn-decrease--active'); // Делаем кнопку активной при != 10
      }
      if (amount == 10) {
        increase.classList.remove('drop-out__btn-increase--active'); // Делаем кнопку не активной при 10
      }
    });
  } // Конец цикла
});

// Вывод в input
document.addEventListener('DOMSubtreeModified', function(){
  // Собираем все dropdown на странице
  const dropdowns = document.querySelectorAll('.dropdown');
  // Работаем с каждым dropdown отдельно
  for(let i=0; i<dropdowns.length; i++) {
    const input = dropdowns[i].childNodes[0].childNodes[0]; // Находим input
    const dropOutItems = dropdowns[i].querySelectorAll('.drop-out__amount'); // Массив значений из 3 счётчиков
    // Записываем значения в input
    if((dropOutItems[0].textContent != 1)||(dropOutItems[1].textContent != 1)||(dropOutItems[2].textContent != 1)) {
      input.value = dropOutItems[0].textContent+' спальни, '+dropOutItems[1].textContent+' кровати, '+dropOutItems[2].textContent+' ванные комнаты';
    } else {
     input.value = null; // Если все счётчики "0", обнуляем значение input
    }
  }
});